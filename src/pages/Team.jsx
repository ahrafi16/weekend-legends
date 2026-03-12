import PlayerCard from "../components/PlayerCard";

const players = [
    {
        name: "Anjum Hossain",
        role: "All Rounder",
        jersey: 16,
        runs: 450,
        wickets: 23,
        image: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Fahim Abdullah",
        role: "Batsman",
        jersey: 12,
        runs: 510,
        wickets: 4,
        image: "https://i.pravatar.cc/150?img=6"
    },
    {
        name: "Masum Billah",
        role: "Bowler",
        jersey: 21,
        runs: 180,
        wickets: 31,
        image: "https://i.pravatar.cc/150?img=7"
    },
    {
        name: "Saiful Islam",
        role: "All Rounder",
        jersey: 9,
        runs: 400,
        wickets: 18,
        image: "https://i.pravatar.cc/150?img=8"
    },
    {
        name: "Bodiul Islam",
        role: "Batsman",
        jersey: 15,
        runs: 475,
        wickets: 6,
        image: "https://i.pravatar.cc/150?img=9"
    },
    {
        name: "Zihad Hasan",
        role: "Bowler",
        jersey: 23,
        runs: 200,
        wickets: 28,
        image: "https://i.pravatar.cc/150?img=10"
    },
    {
        name: "Jubayer Hasan",
        role: "All Rounder",
        jersey: 11,
        runs: 360,
        wickets: 21,
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Bashir Hasan",
        role: "Batsman",
        jersey: 18,
        runs: 525,
        wickets: 3,
        image: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Sabbir Rahman",
        role: "Bowler",
        jersey: 25,
        runs: 150,
        wickets: 33,
        image: "https://i.pravatar.cc/150?img=13"
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