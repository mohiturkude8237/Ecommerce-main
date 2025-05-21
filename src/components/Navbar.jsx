// import React from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between p-2">
//       <Link to="/">
//         <img src={assets.logo} alt="" />
//       </Link>
//       <ul className="flex gap-8">
//         <NavLink to='/' className="hover:underline ">Home</NavLink>
//         <NavLink to='/men' className="hover:underline ">Men</NavLink>
//         <NavLink to='/women' className="hover:underline ">Women</NavLink>
//         <NavLink to='/kids' className="hover:underline ">Kids</NavLink>
//         <NavLink to='/contact' className="hover:underline ">Contact</NavLink>
//       </ul>
//       <Link to="/" className="">
//       Cart
//       </Link>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center p-4 shadow-md">
//       {/* Logo */}
//       <Link to="/">
//         <img src={assets.logo} alt="Logo" className="h-10" />
//       </Link>

//       {/* Navigation Links */}
//       <ul className="flex gap-8 text-lg">
//         <NavLink
//           to="/"
//           className="hover:underline hover:font-bold transition duration-200"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/men"
//           className="hover:underline hover:font-bold transition duration-200"
//         >
//           Men
//         </NavLink>
//         <NavLink
//           to="/women"
//           className="hover:underline hover:font-bold transition duration-200"
//         >
//           Women
//         </NavLink>
//         <NavLink
//           to="/kids"
//           className="hover:underline hover:font-bold transition duration-200"
//         >
//           Kids
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="hover:underline hover:font-bold transition duration-200"
//         >
//           Contact
//         </NavLink>
//       </ul>

//       {/* Cart Link */}
//       <Link to="/" className="text-lg font-medium">
//         Cart
//       </Link>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center px-6 py-4 shadow-md">
//       {/* Logo */}
//       <Link to="/">
//         <img src={assets.logo} alt="Logo" className="h-10" />
//       </Link>

//       {/* Navigation Links */}
//       <ul className="flex gap-8 text-lg font-medium">
//         {["Home", "Men", "Women", "Kids", "Contact"].map((text, index) => {
//           const path = text === "Home" ? "/" : `/${text.toLowerCase()}`;
//           return (
//             <li key={index}>
//               <NavLink
//                 to={path}
//                 className={({ isActive }) =>
//                   `transition duration-200 hover:underline hover:font-bold ${
//                     isActive ? "font-bold underline text-black" : ""
//                   }`
//                 }
//               >
//                 {text}
//               </NavLink>
//             </li>
//           );
//         })}
//       </ul>

//       {/* Cart Link */}
//       <Link to="/" className="text-lg font-medium hover:underline hover:font-bold transition duration-200">
//         Cart
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // Icons for hamburger & close

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Men", path: "/men" },
//     { name: "Women", path: "/women" },
//     { name: "Kids", path: "/kids" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full shadow-md bg-white fixed top-0 z-50">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img src={assets.logo} alt="Logo" className="h-10" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg font-medium">
//           {menuItems.map((item, i) => (
//             <li key={i}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `transition duration-200 hover:underline hover:font-bold ${
//                     isActive ? "font-bold underline text-black" : ""
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Cart Link */}
//         {/* <Link
//           to="/"
//           className="hidden md:block text-lg font-medium hover:underline hover:font-bold transition duration-200"
//         >
//           Cart
//         </Link> */}

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white px-6 pb-4 shadow-md">
//           <ul className="flex flex-col gap-4 text-lg font-medium">
//             {menuItems.map((item, i) => (
//               <li key={i}>
//                 <NavLink
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `block py-1 transition duration-200 hover:underline hover:font-bold ${
//                       isActive ? "font-bold underline text-black" : ""
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="block py-1 transition duration-200 hover:underline hover:font-bold"
//               >
//                 Cart
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, User, ShoppingCart } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Men", path: "/men" },
//     { name: "Women", path: "/women" },
//     { name: "Kids", path: "/kids" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full shadow-md bg-white fixed top-0 z-50">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img src={assets.logo} alt="Logo" className="h-10" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg font-medium">
//           {menuItems.map((item, i) => (
//             <li key={i}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `transition duration-200 hover:underline hover:font-bold ${
//                     isActive ? "font-bold underline text-black" : ""
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Icons */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/profile" className="hover:text-black hover:scale-105 transition">
//             <User size={24} />
//           </Link>
//           <Link to="/cart" className="hover:text-black hover:scale-105 transition">
//             <ShoppingCart size={24} />
//           </Link>
//         </div>

//         {/* Hamburger Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white px-6 pb-4 shadow-md">
//           <ul className="flex flex-col gap-4 text-lg font-medium">
//             {menuItems.map((item, i) => (
//               <li key={i}>
//                 <NavLink
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `block py-1 transition duration-200 hover:underline hover:font-bold ${
//                       isActive ? "font-bold underline text-black" : ""
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//             <li>
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 py-1 transition duration-200 hover:underline hover:font-bold"
//               >
//                 <User size={20} /> Profile
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/cart"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 py-1 transition duration-200 hover:underline hover:font-bold"
//               >
//                 <ShoppingCart size={20} /> Cart
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, User, ShoppingCart } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   // Dummy cart count
//   const cartCount = 3;

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Men", path: "/men" },
//     { name: "Women", path: "/women" },
//     { name: "Kids", path: "/kids" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="w-full shadow-md bg-white fixed top-0 z-50">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link to="/">
//           <img src={assets.logo} alt="Logo" className="h-10" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg font-medium">
//           {menuItems.map((item, i) => (
//             <li key={i}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `transition duration-200 hover:underline hover:font-bold ${
//                     isActive ? "font-bold underline text-black" : ""
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Icons */}
//         <div className="hidden md:flex items-center gap-6 relative">
//           {/* Profile with dropdown */}
//           <div
//             onMouseEnter={() => setShowProfile(true)}
//             onMouseLeave={() => setShowProfile(false)}
//             className="relative"
//           >
//             <button className="hover:text-black transition">
//               <User size={24} />
//             </button>
//             {showProfile && (
//               <div className="absolute right-0 top-10 w-40 bg-white shadow-lg border rounded-md p-2 z-50">
//                 <Link to="/profile" className="block py-1 px-2 hover:bg-gray-100">Profile</Link>
//                 <Link to="/orders" className="block py-1 px-2 hover:bg-gray-100">Orders</Link>
//                 <Link to="/logout" className="block py-1 px-2 hover:bg-gray-100">Logout</Link>
//               </div>
//             )}
//           </div>

//           {/* Cart with badge */}
//           <Link to="/cart" className="relative hover:text-black transition">
//             <ShoppingCart size={24} />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white px-6 pb-4 shadow-md">
//           <ul className="flex flex-col gap-4 text-lg font-medium">
//             {menuItems.map((item, i) => (
//               <li key={i}>
//                 <NavLink
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `block py-1 transition duration-200 hover:underline hover:font-bold ${
//                       isActive ? "font-bold underline text-black" : ""
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//             {/* Profile in Mobile */}
//             <li>
//               <Link
//                 to="/profile"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 py-1 hover:underline hover:font-bold"
//               >
//                 <User size={20} /> Profile
//               </Link>
//             </li>
//             {/* Cart in Mobile */}
//             <li>
//               <Link
//                 to="/cart"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-2 py-1 hover:underline hover:font-bold"
//               >
//                 <ShoppingCart size={20} /> Cart ({cartCount})
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Dummy cart count
  const cartCount = 3;
  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <NavLink 
          to='/'
            className={({ isActive }) =>
              `transition duration-200 hover:underline hover:font-bold ${
                isActive ? "font-bold underline text-black" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink to='/men'
        
            className={({ isActive }) =>
              `transition duration-200 hover:underline hover:font-bold ${
                isActive ? "font-bold underline text-black" : ""
              }`
            }
          >
            Men
          </NavLink>
          <NavLink to="/women"
            className={({ isActive }) =>
              `transition duration-200 hover:underline hover:font-bold ${
                isActive ? "font-bold underline text-black" : ""
              }`
            }
          >
            Women
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `transition duration-200 hover:underline hover:font-bold ${
                isActive ? "font-bold underline text-black" : ""
              }`
            }
          >
            Kids
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `transition duration-200 hover:underline hover:font-bold ${
                isActive ? "font-bold underline text-black" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 relative">
          {/* Profile with dropdown */}
          <div
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
            className="relative"
          >
            <button className="hover:text-black transition">
              <User size={24} />
            </button>
            {showProfile && (
              <div className="absolute right-0 top-10 w-40 bg-white shadow-lg border rounded-md p-2 z-50">
                <Link
                  to="/profile"
                  className="block py-1 px-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="block py-1 px-2 hover:bg-gray-100"
                >
                  Orders
                </Link>
                <Link
                  to="/logout"
                  className="block py-1 px-2 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

          {/* Cart with badge */}
          <Link to="/cart" className="relative hover:text-black transition">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {menuItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 transition duration-200 hover:underline hover:font-bold ${
                      isActive ? "font-bold underline text-black" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* Profile in Mobile */}
            <li>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-1 hover:underline hover:font-bold"
              >
                <User size={20} /> Profile
              </Link>
            </li>
            {/* Cart in Mobile */}
            <li>
              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-1 hover:underline hover:font-bold"
              >
                <ShoppingCart size={20} /> Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
