import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white">
      {/* Left Side - Name & Role */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Tushar Patel</h1>
      </div>

      {/* Right Side - Navigation */}
      <div className="flex space-x-8">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-base transition-all duration-200 hover:text-black ${
              isActive ? "underline underline-offset-4" : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/latestwork"
          className={({ isActive }) =>
            `text-base transition-all duration-200 hover:text-black ${
              isActive ? "underline underline-offset-4" : "text-gray-700"
            }`
          }
        >
          Latest Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-base transition-all duration-200 hover:text-black ${
              isActive ? "underline underline-offset-4" : "text-gray-700"
            }`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-base transition-all duration-200 hover:text-black ${
              isActive ? "underline underline-offset-4" : "text-gray-700"
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
