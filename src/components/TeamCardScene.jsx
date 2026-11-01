import { useEffect, useRef } from "react";

const createJerseyShape = (THREE) => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.3, 0.5);
    shape.lineTo(-0.15, 0.5);
    shape.lineTo(0, 0.4);
    shape.lineTo(0.15, 0.5);
    shape.lineTo(0.3, 0.5);
    shape.lineTo(0.5, 0.32);
    shape.lineTo(0.39, 0.22);
    shape.lineTo(0.39, -0.5);
    shape.lineTo(-0.39, -0.5);
    shape.lineTo(-0.39, 0.22);
    shape.lineTo(-0.5, 0.32);
    shape.closePath();
    return shape;
};

const TeamCardScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let cancelled = false;
        let cleanup = () => {};

        const initializeScene = async () => {
            const THREE = await import("three");
            if (cancelled) return;

            let renderer;
            try {
                renderer = new THREE.WebGLRenderer({
                    canvas,
                    alpha: true,
                    antialias: true,
                });
            } catch (error) {
                console.error("Unable to initialize the 3D team card scene.", error);
                return;
            }

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(
                -window.innerWidth / 2,
                window.innerWidth / 2,
                window.innerHeight / 2,
                -window.innerHeight / 2,
                0.1,
                100
            );
            camera.position.z = 10;

            scene.add(new THREE.AmbientLight(0xffffff, 1.8));
            const keyLight = new THREE.DirectionalLight(0xffd27a, 3.2);
            keyLight.position.set(-window.innerWidth / 3, window.innerHeight / 2, 8);
            scene.add(keyLight);

            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);

            const jerseyShape = createJerseyShape(THREE);
            const geometry = new THREE.ExtrudeGeometry(jerseyShape, {
                depth: 0.12,
                bevelEnabled: true,
                bevelSegments: 2,
                steps: 1,
                bevelSize: 0.012,
                bevelThickness: 0.018,
            });
            geometry.computeVertexNormals();

            const cards = Array.from(
                document.querySelectorAll("[data-three-card]")
            ).map((element) => {
                const group = new THREE.Group();
                const trim = new THREE.Mesh(
                    geometry,
                    new THREE.MeshStandardMaterial({
                        color: 0xf0ae27,
                        metalness: 0.72,
                        roughness: 0.28,
                    })
                );
                trim.scale.set(1.025, 1.015, 1);
                group.add(trim);

                const body = new THREE.Mesh(
                    geometry,
                    new THREE.MeshStandardMaterial({
                        color: 0x142238,
                        metalness: 0.42,
                        roughness: 0.34,
                        emissive: 0x07111f,
                        emissiveIntensity: 0.55,
                    })
                );
                body.position.z = 0.025;
                group.add(body);

                const outlinePoints = jerseyShape.getPoints(32);
                const outlineGeometry = new THREE.BufferGeometry().setFromPoints(
                    outlinePoints.map((point) => new THREE.Vector3(point.x, point.y, 0.18))
                );
                const outline = new THREE.LineLoop(
                    outlineGeometry,
                    new THREE.LineBasicMaterial({ color: 0xffd36a, transparent: true, opacity: 0.85 })
                );
                group.add(outline);
                scene.add(group);

                const card = {
                    element,
                    group,
                    targetRotationX: 0,
                    targetRotationY: 0,
                };
                const onPointerMove = (event) => {
                    const bounds = element.getBoundingClientRect();
                    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                    card.targetRotationX = -y * 0.24;
                    card.targetRotationY = x * 0.3;
                };
                const onPointerLeave = () => {
                    card.targetRotationX = 0;
                    card.targetRotationY = 0;
                };

                element.addEventListener("pointermove", onPointerMove);
                element.addEventListener("pointerleave", onPointerLeave);
                card.cleanup = () => {
                    element.removeEventListener("pointermove", onPointerMove);
                    element.removeEventListener("pointerleave", onPointerLeave);
                    trim.material.dispose();
                    body.material.dispose();
                    outline.geometry.dispose();
                    outline.material.dispose();
                };

                return card;
            });

            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            let frameId;
            const render = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                cards.forEach((card) => {
                    const bounds = card.element.getBoundingClientRect();
                    card.group.position.set(
                        bounds.left + bounds.width / 2 - width / 2,
                        height / 2 - (bounds.top + bounds.height / 2),
                        0
                    );
                    card.group.scale.set(bounds.width, bounds.height, 1);

                    if (!reducedMotion.matches) {
                        card.group.rotation.x +=
                            (card.targetRotationX - card.group.rotation.x) * 0.12;
                        card.group.rotation.y +=
                            (card.targetRotationY - card.group.rotation.y) * 0.12;
                    }
                });
                renderer.render(scene, camera);
                frameId = window.requestAnimationFrame(render);
            };

            const onResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.left = -width / 2;
                camera.right = width / 2;
                camera.top = height / 2;
                camera.bottom = -height / 2;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                keyLight.position.set(-width / 3, height / 2, 8);
            };

            window.addEventListener("resize", onResize);
            frameId = window.requestAnimationFrame(render);

            cleanup = () => {
                window.cancelAnimationFrame(frameId);
                window.removeEventListener("resize", onResize);
                cards.forEach((card) => {
                    card.cleanup();
                    scene.remove(card.group);
                });
                geometry.dispose();
                scene.clear();
                renderer.dispose();
            };
        };

        initializeScene().catch((error) => {
            console.error("Unable to load the 3D team card scene.", error);
        });

        return () => {
            cancelled = true;
            cleanup();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
        />
    );
};

export default TeamCardScene;
