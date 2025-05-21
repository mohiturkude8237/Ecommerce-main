// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <div className="">
//       <div className="bg-[#041222]  pt-10 items-center justify-center flex">
//         <div className="flex flex-col items-center text-center sm:grid sm:grid-cols-[3fr_1fr_1fr] sm:text-left sm:items-start gap-14 my-10 mx-5 text-sm">
//           {/* Logo and description */}
//           <div>
//             <img
//               src={assets.logo2}
//               alt="logo"
//               className="mb-4 w-32 mx-auto sm:mx-0"
//             />
//             <p className="w-full md:w-2/3 text-gray-500 mx-auto sm:mx-0">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//               quas deleniti, iure tenetur eos expedita earum quisquam natus
//               quidem veritatis. Recusandae debitis nam aspernatur facere quos.
//               Minus facere ipsam sequi?
//             </p>
//           </div>

//           {/* Company Links */}
//           <div>
//             <p className="text-xl font-medium mb-5 text-white">INFORMATIONS</p>
//             <ul className="flex flex-col gap-1 text-gray-500">
//               <li>About Us</li>
//               <li>Contact Us</li>
//               <li>Terms & Conditions</li>
//               <li>Return & Exchange</li>
//               <li>Shipping & Delivery</li>
//               <li>Private Policy</li>
//             </ul>
//           </div>
//           {/* Categories Links */}
//           <div>
//             <p className="text-xl font-medium mb-5 text-white">INFORMATIONS</p>
//             <ul className="flex flex-col gap-1 text-gray-500">
//               <li>Clothing</li>
//               <li>Lingerie</li>
//               <li>Hand Bag</li>
//               <li>Jwellery</li>
//               <li>Shipping & Delivery</li>
//               <li>Private Policy</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <p className="text-xl font-medium mb-5 text-white">CONTACT</p>
//             <ul className="flex flex-col gap-1 text-gray-500">
//               <li>Phone: +91 8237742810</li>
//               <li>Email: contact@shopeasy.com</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around flex-wrap bg-gray-700 text-white">
      {/* About */}
      <div className="md:w-1/4 p-4 w-full mb-5 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet
          quaerat nihil modi est aut iure deleniti, iste cum fugiat?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit
          quos ea ipsam molestiae animi sapiente architecto quas temporibus aut!
        </p>
      </div>
      {/* Categories */}
      <div className="md:w-1/5 mb-5 p-4 font-medium">
        <ul>
          <li>Cloth</li>
          <li>Bag</li>
          <li>Belt</li>
        </ul>
      </div>
      {/* Informations */}
      <div className="mb-5 p-4 font-medium">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms & Conditions</li>
          <li>Return & Exchange</li>
          <li>Private Policy</li>
        </ul>
      </div>
      <div className="mb-5 p-4 font-medium">
        <ul>
          <li>Address:XYZ,New Delhi,India. Pin-Code:110005</li>
          <li>Phone:+91 8237742810</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div className="flex flex-wrap  p-6 bg-gray-100">
//       {/* About */}
//       <div className="w-full md:w-1/4 mb-4 md:mb-0 border-2 p-4">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet
//           quaerat nihil modi est aut iure deleniti, iste cum fugiat? Lorem ipsum
//           dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit
//           quos ea ipsam molestiae animi sapiente architecto quas temporibus aut!
//         </p>
//       </div>

//       {/* Categories */}
//       <div className="w-full md:w-1/5 mb-4 md:mb-0 border-2 p-4">
//         <h3 className="font-semibold mb-2">Categories</h3>
//         <ul className="space-y-1">
//           <li>Cloth</li>
//           <li>Bag</li>
//           <li>Belt</li>
//         </ul>
//       </div>

//       {/* Information */}
//       <div className="w-full md:w-1/5 mb-4 md:mb-0 border-2 p-4">
//         <h3 className="font-semibold mb-2">Information</h3>
//         <ul className="space-y-2">
//           <li>About Us</li>
//           <li>Contact</li>
//           <li>Terms & Conditions</li>
//           <li>Return & Exchange</li>
//           <li>Privacy Policy</li>
//         </ul>
//       </div>

//       {/* Contact */}
//       <div className="w-full md:w-1/5 border-2 p-4">
//         <h3 className="font-semibold mb-2">Contact</h3>
//         <ul className="space-y-1">
//           <li>Address: XYZ, New Delhi, India. Pin-Code: 110005</li>
//           <li>Phone: +91 8237742810</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;
