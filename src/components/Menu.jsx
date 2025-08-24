import React from "react";
import CustomCursor from "./CustomCursor"; 
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const onBackHandle = () => {
    navigate('/');
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <CustomCursor /> 
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center space-y-4">
          {["HOME", "LATEST WORK", "ABOUT ME", "CONTACT"].map((label) => (
            <button
              key={label}
              className="text-5xl font-medium text-black text-center tracking-wide select-none focus:outline-none transition-all duration-200 hover:scale-125 hover:tracking-widest"
              style={{ fontFamily: "'Anton', sans-serif" }}
              onClick={label === "HOME" ? onBackHandle : undefined}
            >
              {label}
            </button>
          ))}
        </div>
        <button onClick={onBackHandle}
          className="mt-8 text-2xl font-normal text-black relative overflow-hidden group transition-all duration-200 hover:scale-125 hover:tracking-widest"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="relative z-10 group-hover:line-through transition-all duration-200">
            BACK
          </span>
        </button>
      </div>
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
      <div className="absolute bottom-8 right-8 text-xs text-gray-500 z-10">
        ©2025 Tushar Patel. All Right Reserved
      </div>
    </div>
  );
}