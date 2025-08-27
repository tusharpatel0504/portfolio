import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12 rounded-t-2xl">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Build beautiful landing <br /> pages fast using <br /> Rareblocks Kit.
          </h2>
        </div>

        {/* Right Info */}
        <div className="space-y-4 text-gray-300">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg" />
            <p>8502 Preston Rd. Inglewood, Maine 98380, USA</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg" />
            <p>support@rareblocks.xyz</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation */}
        <div className="flex gap-8 text-gray-300 text-sm">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="Projects">Works</a>
          <a href="#">Support</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © Copyright 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
