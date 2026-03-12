import g1 from "../assets/gal (1).jpg";
import g2 from "../assets/gal (2).jpg";
import g3 from "../assets/gal (3).jpg";
import g4 from "../assets/gal (4).jpg";
import g5 from "../assets/gal (5).jpg";
import g6 from "../assets/gal (6).jpg";
const images = [
    g1, g2, g3, g4, g5, g6
];

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6">

            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-10">
                Match Gallery 📸
            </h2>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

                {images.map((img, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={img}
                            alt="Cricket match"
                            className="w-full h-64 object-cover hover:scale-110 transition duration-300"
                        />
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Gallery;