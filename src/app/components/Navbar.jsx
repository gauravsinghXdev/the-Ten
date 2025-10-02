"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 text-white">
        <div className="flex items-center justify-center gap-12">
          {/* Left links */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a
                href="#"
                className="relative inline-block hover:opacity-80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:opacity-80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                About
              </a>
            </li>
          </ul>

          {/* Center Logo */}
          <div className="px-6 flex justify-center items-center">
            <div className="leading-none text-center">
              <span className="block text-lg tracking-wide">THE</span>
              <span className="block text-lg tracking-wide">TEN</span>
              {/* <span className="block text-xs tracking-wide">SUITES</span> */}
            </div>
          </div>

          {/* Right links */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a
                href="#"
                className="relative inline-block hover:opacity-80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:opacity-80 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
