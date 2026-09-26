import PlayerCard from "../components/PlayerCard";
import anjum from "../assets/anjum_01.jpg";
import fahim from "../assets/fahim_02.jpg";
import masum from "../assets/masum_03.jpg";
import saiful from "../assets/saiful_05.jpg";
import bodiul from "../assets/bodi_06.jpg";
import zihad from "../assets/zihad_07.jpg";
import hasan from "../assets/zubair_08.jpg";
import bashir from "../assets/bashir_09.jpg";
import sabbir from "../assets/sabbir_10.jpg";

const players = [
    {
        name: "Anjum Hossain",
        role: "All Rounder",
        jersey: 16,
        runs: 450,
        wickets: 23,
        image: anjum
    },
    {
        name: "Fahim Abdullah",
        role: "Batsman",
        jersey: 12,
        runs: 510,
        wickets: 4,
        image: fahim
    },
    {
        name: "Masum Billah",
        role: "Bowler",
        jersey: 21,
        runs: 180,
        wickets: 31,
        image: masum
    },
    {
        name: "Saiful Islam",
        role: "All Rounder",
        jersey: 9,
        runs: 400,
        wickets: 18,
        image: saiful
    },
    {
        name: "Bodiul Islam",
        role: "Batsman",
        jersey: 15,
        runs: 475,
        wickets: 6,
        image: bodiul
    },
    {
        name: "Zihad Hasan",
        role: "Bowler",
        jersey: 23,
        runs: 200,
        wickets: 28,
        image: zihad
    },
    {
        name: "Jubayer Hasan",
        role: "All Rounder",
        jersey: 11,
        runs: 360,
        wickets: 21,
        image: hasan
    },
    {
        name: "Bashir Hasan",
        role: "Batsman",
        jersey: 18,
        runs: 525,
        wickets: 3,
        image: bashir
    },
    {
        name: "Sabbir Rahman",
        role: "Bowler",
        jersey: 25,
        runs: 150,
        wickets: 33,
        image: sabbir
    },
    {
        name: "Nayem Islam",
        role: "All Rounder",
        jersey: 5,
        runs: 410,
        wickets: 20,
        image: "https://i.pravatar.cc/150?img=14"
    }
];

const Team = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">

            <h2 className="text-3xl font-bold text-center mb-10">
                Our Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {players.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                ))}
            </div>

        </div>
    );
};

export default Team;