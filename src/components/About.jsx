import React from "react";
import NavBar from "./NavBar";
import img2 from "../assets/img2.jpg";
import tushar_patel from "../assets/tushar_patel.pdf";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import CustomCursor from './CustomCursor';
import Experience from "./Experience";
import TextScroll from "./TextScroll";
export default function About() {
  const [showContent, setShowContent] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  useEffect(() => {
      const overlayTimeout = setTimeout(() => {
        setShowContent(true);
        setTimeout(() => setAnimate(true), 100);
        setTimeout(() => setHideOverlay(true), 500);
      }, 100);
      return () => clearTimeout(overlayTimeout);
    }, []);
  
  return (
    
   <div>
    <CustomCursor /> {/* Add the custom cursor here */}
          {/* Top-down overlay animation */}
          {!hideOverlay && (
            <div
              className={`absolute inset-0 z-50 bg-black transition-all duration-700 ${showContent ? "opacity-0" : "opacity-100"}`}
              style={{
                transform: showContent ? "translateY(-100%)" : "translateY(0)",
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease 0.7s"
              }}
            />
          )}
     <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col items-center mt-10 px-4 text-center">
        {/* Profile Image */}
        <img
          src={img2}
          alt="Profile"
          className="w-80 h-96 object-cover rounded-lg shadow-lg"
        />

        {/* Animated Title */}
        <h1
          className="mt-6 text-6xl font-semibold  text-black"
          style={{ fontFamily: "'inter', sans-serif" }}
        >
          <TypeAnimation
            sequence={[
              "UI Designer..", 2000,
              "Full Stack Developer..", 2000,
              "Creative Thinker..", 2000,
              "Problem Solver..", 2000,
              "Tech Enthusiast..", 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 max-w-xl leading-relaxed">
          I am a Full stack developer and UI/UX designer building delightful
          human interfaces for the digital world.
        </p>

        {/* Resume Button */}
        <a
          href={tushar_patel}
          download
          className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-md shadow-md hover:bg-gray-900 transition-all"
        >
          Download Resume
        </a>
      </div>
    </div>
    <Experience/>
    <TextScroll/>
    
   </div>
  );
}
