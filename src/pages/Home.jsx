import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import { FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";

const Home = () => {
    return (
        <div>

            {/* Hero Section */}
            <section
                className="hero min-h-[70vh]"
                style={{
                    backgroundImage: `url(${hero})`,
                }}
            >
                <div className="hero-overlay bg-opacity-20"></div>

                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">
                            Weekend Legends
                        </h1>

                        <p className="mb-5 text-lg max-w-xl mx-auto">
                            A group of passionate cricket lovers from Gono University who
                            gather every week to play, compete, and create memories.
                        </p>

                        <Link to="/team">
                            <button className="btn btn-primary">
                                View Team
                            </button></Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-bold mb-6">
                    About Weekend Legends
                </h2>

                <p className="text-3xl text-gray-800 amatic-sc-regular">
                    Weekend Legends is a friendly cricket community where friends from
                    our area meet regularly to play cricket at the Gono University field.
                    Our goal is simple — enjoy cricket, build friendships, and celebrate
                    the spirit of the game.
                </p>

                <p className="text-3xl text-gray-800 amatic-sc-regular">
                    Weekend Legends is a friendly cricket community where friends from
                    our area meet regularly to play cricket at the Gono University field.
                    Our goal is simple — enjoy cricket, build friendships, and celebrate
                    the spirit of the game.
                </p>

                <p className="text-3xl text-gray-800 amatic-sc-regular">
                    Weekend Legends is a friendly cricket community where friends from
                    our area meet regularly to play cricket at the Gono University field.
                    Our goal is simple — enjoy cricket, build friendships, and celebrate
                    the spirit of the game.
                </p>

                <p className="text-3xl text-gray-800 amatic-sc-regular">
                    Weekend Legends is a friendly cricket community where friends from
                    our area meet regularly to play cricket at the Gono University field.
                    Our goal is simple — enjoy cricket, build friendships, and celebrate
                    the spirit of the game.
                </p>

                <p className="text-3xl text-gray-800 amatic-sc-regular">
                    Weekend Legends is a friendly cricket community where friends from
                    our area meet regularly to play cricket at the Gono University field.
                    Our goal is simple — enjoy cricket, build friendships, and celebrate
                    the spirit of the game.
                </p>

            </section>

            {/* Highlights */}
            <section className="bg-base-200 py-16">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

                    <div className="card bg-base-100 shadow-lg text-center p-6">
                        <FaUsers className="text-4xl mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-bold">Our Team</h3>
                        <p>Dedicated players who love cricket and teamwork.</p>
                    </div>

                    <div className="card bg-base-100 shadow-lg text-center p-6">
                        <FaCalendarAlt className="text-4xl mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-bold">Weekly Matches</h3>
                        <p>We organize matches regularly at Gono University field.</p>
                    </div>

                    <div className="card bg-base-100 shadow-lg text-center p-6">
                        <FaTrophy className="text-4xl mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-bold">Competitions</h3>
                        <p>Friendly competitions and unforgettable cricket moments.</p>
                    </div>

                </div>

            </section>

            {/* Next Match */}
            <section className="py-16 text-center">

                <h2 className="text-3xl font-bold mb-6">
                    Upcoming Match
                </h2>

                <div className="card bg-base-200 max-w-md mx-auto shadow-lg">

                    <div className="card-body">

                        <h3 className="text-xl font-bold">
                            Weekend Legends vs Local Challengers
                        </h3>

                        <p>Date: Sunday</p>
                        <p>Time: 4:00 PM</p>
                        <p>Venue: Gono University Field</p>

                        <button className="btn btn-primary mt-4">
                            View Matches
                        </button>

                    </div>

                </div>

            </section>

            {/* Gallery Preview */}
            <section className="py-16 bg-base-200 text-center">

                <h2 className="text-3xl font-bold mb-8">
                    Match Memories
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

                    <img
                        src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d"
                        className="rounded-lg shadow-md"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1624880357913-a8539238245b"
                        className="rounded-lg shadow-md"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d"
                        className="rounded-lg shadow-md"
                    />

                </div>

            </section>

        </div>
    );
};

export default Home;