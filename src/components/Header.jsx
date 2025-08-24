import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCursor from './CustomCursor'; // Import the CustomCursor

const roles = [
  "UI Designer",
  "Front End Developer",
  "Backend Developer",
  "UI/UX Designer"
];

export default function Header() {
  const [showContent, setShowContent] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const overlayTimeout = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => setAnimate(true), 100);
      setTimeout(() => setHideOverlay(true), 500);
    }, 100);
    return () => clearTimeout(overlayTimeout);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [animate]);

  const handleExploreClick = () => {
    navigate('/menu');
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
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

      {/* Main content */}
      <div className={`${showContent ? "opacity-100" : "opacity-0"} transition-opacity duration-300 w-full h-full flex flex-col items-center justify-center`}>
        <h1
          className={`text-[5vw] font-bold text-black text-center leading-none transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          Tushar Patel
        </h1>
        <div
          className={`mt-4 mb-4 transition-all duration-700 delay-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <span className="inline-block bg-black text-pink-200 px-6 py-2 text-xl font-semibold skew-y-[-4deg]">
            India based
          </span>
        </div>
        <div
          className={`mb-8 transition-all duration-700 delay-300
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <span className="text-[4vw] font-bold text-black transition-all duration-500 ease-in-out">
            {roles[roleIndex]}
          </span>
        </div>
        <button
          onClick={handleExploreClick}
          className={`mt-8 border-2 border-black rounded-full w-36 h-36 flex items-center justify-center text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300 group
            transition-all duration-200 group-hover:w-40 group-hover:h-40
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        >
          <span className="transition-all duration-200 group-hover:font-bold group-hover:scale-110">
            explore
          </span>
        </button>
        {/* LinkedIn logo bottom left as a button */}
         <a
        href="https://www.linkedin.com/in/tusharpatel10954/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="absolute bottom-8 left-8 z-10"
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="6" fill="#000" />
          <path
            d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.523-1.387 2.7 0 3.2 1.776 3.2 4.084v4.21h-2.667v-3.733c0-.89-.016-2.037-1.241-2.037-1.242 0-1.432.97-1.432 1.97v3.8h-2.667v-8z"
            fill="#fff"
          />
        </svg>
      </a>
      </div>
      <div className="absolute bottom-8 right-8 text-xs text-gray-500 z-10">
        ©2025 Tushar Patel. All Right Reserved
      </div>
    </div>
  );
}