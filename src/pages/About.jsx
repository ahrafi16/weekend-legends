import { FaUsers, FaMapMarkerAlt, FaFutbol } from "react-icons/fa";

const About = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">

            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-down">
                About Weekend Legends
            </h1>

            {/* Description */}
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12" data-aos="fade-up">
                Weekend Legends is a group of passionate cricket lovers from our local
                community who regularly gather at the Gono University field to enjoy
                the game of cricket. What started as friendly matches between friends
                has now become a strong cricket community filled with excitement,
                competition, and unforgettable memories.
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">

                <div className="card bg-base-200 p-6 text-center shadow-md">
                    <FaUsers className="text-4xl text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Community</h3>
                    <p>
                        A group of friends and cricket enthusiasts who meet regularly to
                        play and enjoy the spirit of the game.
                    </p>
                </div>

                <div className="card bg-base-200 p-6 text-center shadow-md">
                    <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Ground</h3>
                    <p>
                        Most of our matches are played at the beautiful cricket field of
                        Gono University.
                    </p>
                </div>

                <div className="card bg-base-200 p-6 text-center shadow-md">
                    <FaFutbol className="text-4xl text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Passion</h3>
                    <p>
                        Cricket is more than a game for us — it's a way to connect, compete,
                        and build friendships.
                    </p>
                </div>

            </div>

            {/* Mission */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">
                    Our Mission
                </h2>

                <p className="text-gray-600">
                    Our mission is to create a fun and competitive cricket environment
                    where everyone can enjoy the sport, improve their skills, and build
                    lifelong friendships. Weekend Legends is not just a team — it’s a
                    family built around the love of cricket.
                </p>
            </div>

        </div>
    );
};

export default About;