// import React from "react";
// import {assets} from '../assets/assets.js'
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div className="flex justify-between">
//       <div className="new-heading mt-4">
//         <h1 className="text-8xl font-bold">NEW</h1>
//         <h1 className="text-8xl  font-light">COLLECTION</h1>
//         <p className="text-2xl italic mb-4">There's nothing like new</p>
//         <Link to='/' className="border-2 px-2">
//         SHOP NEW ARRIVALS
//         </Link>
//       </div>    
//       <div className="hero-image">
//         <img src={assets.img8} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React from "react";
// import { assets } from "../assets/assets.js";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center p-4">
//       <div className="new-heading mt-4 text-center md:text-left">
//         <h1 className="text-5xl md:text-8xl font-bold ml-9">NEW</h1>
//         <h1 className="text-5xl md:text-8xl font-light ml-9">COLLECTION</h1>
//         <p className=" md:text-2xl italic mb-9 ml-[80px]">There's nothing like new</p>
//         <Link 
//           to='/' 
//           className="border-2 border-black px-6 py-2 text-lg hover:bg-black transition duration-300 ml-9 font-bold"
//         >
//           SHOP NEW ARRIVALS
//         </Link>
//       </div>    
//       <div className="hero-image mt-6 md:mt-0">
//         <img src={assets.img8} alt="New collection preview" className="w-full max-w-md" />
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React from "react";
// import { assets } from "../assets/assets.js";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="flex flex-col md:flex-row justify-between items-center p-4">
//       <div className="text-center md:text-left mt-4">
//         <h1 className="text-5xl md:text-8xl font-bold ml-6">NEW</h1>
//         <h1 className="text-5xl md:text-8xl font-light ml-6">COLLECTION</h1>
//         <p className="md:text-2xl italic mb-9 ml-6">There's nothing like new</p>
//         <Link 
//           to='/' 
//           className="border-3 px-6 py-2 text-lg ml-6 font-bold" 
//         >
//           SHOP NEW ARRIVALS
//         </Link>
//       </div>    

//       {/* className="border-2 px-6 py-2 text-lg transition duration-300 ml-6 font-bold" */}

//       <div className="mt-6 md:mt-0">
//         <img 
//           src={assets.img8} 
//           alt="Preview of new clothing collection" 
//           className="w-full max-w-md" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React from "react";
// import { assets } from "../assets/assets.js";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="flex flex-col md:flex-row justify-between items-center p-4">
//       {/* Text Section */}
//       <div className="text-center md:text-left mt-4">
//         <h1 className="text-5xl md:text-8xl font-bold ml-6">NEW</h1>
//         <h1 className="text-5xl md:text-8xl font-light ml-6">COLLECTION</h1>
//         <p className="md:text-2xl italic mb-9 ml-6">There's nothing like new</p>
        
//         <Link 
//           to="/" 
//           className="border-2 border-black px-6 py-2 text-lg ml-6 font-bold transition duration-300 hover:bg-black hover:text-white"
//         >
//           SHOP NEW ARRIVALS
//         </Link>
//       </div>    

//       {/* Image Section */}
//       <div className="mt-6 md:mt-0">
//         <img 
//           src={assets.img8} 
//           alt="Preview of new clothing collection" 
//           className="w-full max-w-md" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 gap-8">
      {/* Text Section */}
      <div className="text-center md:text-left mt-4">
        <h1 className="text-5xl md:text-8xl font-bold ml-6">NEW</h1>
        <h1 className="text-5xl md:text-8xl font-light ml-6">COLLECTION</h1>
        <p className="md:text-2xl italic mb-9 ml-6">There's nothing like new</p>
        
        <Link 
          to="/" 
          className="border-2 border-black px-6 py-2 text-lg ml-6 font-bold transition duration-300 hover:bg-black hover:text-white"
        >
          SHOP NEW ARRIVALS
        </Link>
      </div>    

      {/* Image Section with Zoom on Hover */}
      <div className="mt-6 md:mt-9 transform transition duration-500 hover:scale-105">
        <img 
          src={assets.img8} 
          alt="Preview of new clothing collection" 
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;









