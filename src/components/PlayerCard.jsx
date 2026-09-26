// import { FaBaseballBall, FaTshirt } from "react-icons/fa";

// const PlayerCard = ({ player }) => {
//     const { name, role, image, jersey, runs, wickets } = player;

//     return (
//         <div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300">

//             {/* Player Image */}
//             <figure className="px-6 pt-6">
//                 <img
//                     src={image}
//                     alt={name}
//                     className="rounded-xl h-40 w-40 object-cover"
//                 />
//             </figure>

//             {/* Player Info */}
//             <div className="card-body items-center text-center">

//                 <h2 className="card-title text-xl font-bold">
//                     {name}
//                 </h2>

//                 <p className="text-sm text-gray-500">
//                     {role}
//                 </p>

//                 {/* Jersey */}
//                 <div className="flex items-center gap-2 text-sm">
//                     <FaTshirt />
//                     Jersey #{jersey}
//                 </div>

//                 {/* Stats */}
//                 <div className="flex gap-6 mt-3 text-sm">

//                     <div>
//                         <p className="font-bold">{runs}</p>
//                         <p>Runs</p>
//                     </div>

//                     <div>
//                         <p className="font-bold">{wickets}</p>
//                         <p>Wickets</p>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PlayerCard;
















import { FaTshirt } from "react-icons/fa";

// The jersey silhouette is one clip-path polygon: shoulders + collar notch
// at the top, sleeve tips flaring out, then a straight-sided body below.
const JERSEY_CLIP =
  "polygon(20% 0%, 35% 0%, 50% 9%, 65% 0%, 80% 0%, 100% 18%, 86% 28%, 86% 100%, 14% 100%, 14% 28%, 0% 18%)";

const PlayerCard = ({ player }) => {
  const { name, role, image, jersey, runs, wickets } = player;

  return (
    <div className="w-72 mx-auto [perspective:1200px]">
      <div
        className="group relative transition-transform duration-500 ease-out will-change-transform
                   [transform-style:preserve-3d] hover:[transform:rotateX(6deg)_rotateY(-8deg)_scale(1.03)]"
      >
        {/* Grounding shadow, so the card reads as lifted off the page */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/30 rounded-full blur-md
                     transition-all duration-500 group-hover:w-48 group-hover:opacity-70"
        />

        {/* Trim layer: same shape, slightly larger, painted behind the body
            via padding — this is what creates the piping around the whole outline */}
        <div className="relative bg-amber-400 p-1 drop-shadow-xl" style={{ clipPath: JERSEY_CLIP }}>
          {/* Jersey body */}
          <div
            className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black pt-16 pb-8 px-8"
            style={{ clipPath: JERSEY_CLIP }}
          >
            {/* Fabric sheen — simulates light hitting curved fabric */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/40 mix-blend-overlay" />
            {/* Fold shadow near the hem, for depth */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(0,0,0,0.5),transparent_60%)]" />
            {/* Center seam */}
            <div className="pointer-events-none absolute top-[10%] bottom-[4%] left-1/2 w-px -translate-x-1/2 bg-black/20" />

            {/* Ribbed cuffs — double stripe on each sleeve */}
            <div className="absolute top-[11%] left-0 w-[20%] h-[4%] bg-amber-400" />
            <div className="absolute top-[15.5%] left-0 w-[20%] h-[3%] bg-white/80" />
            <div className="absolute top-[11%] right-0 w-[20%] h-[4%] bg-amber-400" />
            <div className="absolute top-[15.5%] right-0 w-[20%] h-[3%] bg-white/80" />

            {/* Jersey number, where the back number would sit */}
            <p className="relative text-center text-amber-400 font-extrabold text-5xl leading-none mb-3 [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
              {jersey}
            </p>

            {/* Player photo */}
            <div className="relative flex justify-center mb-4">
              <img
                src={image}
                alt={name}
                className="h-24 w-24 rounded-full object-cover border-4 border-amber-400 shadow-lg"
              />
            </div>

            {/* Name & role */}
            <div className="relative text-center mb-5">
              <h2 className="text-white text-lg font-bold tracking-wide [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                {name}
              </h2>
              <div className="flex items-center justify-center gap-1.5 text-slate-300 text-sm mt-1">
                <FaTshirt className="text-amber-400" />
                <span>{role}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="relative flex justify-center gap-8 text-center pb-2">
              <div>
                <p className="text-amber-400 font-bold text-lg">{runs}</p>
                <p className="text-slate-300 text-xs uppercase tracking-wide">Runs</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold text-lg">{wickets}</p>
                <p className="text-slate-300 text-xs uppercase tracking-wide">Wickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;