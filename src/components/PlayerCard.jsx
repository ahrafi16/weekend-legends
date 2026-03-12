import { FaBaseballBall, FaTshirt } from "react-icons/fa";

const PlayerCard = ({ player }) => {
    const { name, role, image, jersey, runs, wickets } = player;

    return (
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">

            {/* Player Image */}
            <figure className="px-6 pt-6">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl h-40 w-40 object-cover"
                />
            </figure>

            {/* Player Info */}
            <div className="card-body items-center text-center">

                <h2 className="card-title text-xl font-bold">
                    {name}
                </h2>

                <p className="text-sm text-gray-500">
                    {role}
                </p>

                {/* Jersey */}
                <div className="flex items-center gap-2 text-sm">
                    <FaTshirt />
                    Jersey #{jersey}
                </div>

                {/* Stats */}
                <div className="flex gap-6 mt-3 text-sm">

                    <div>
                        <p className="font-bold">{runs}</p>
                        <p>Runs</p>
                    </div>

                    <div>
                        <p className="font-bold">{wickets}</p>
                        <p>Wickets</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;