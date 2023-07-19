import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchBarOnHeroSection from "./SearchBarOnHeroSection";

const SecondaryNav = ({ onSearch }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-4 py-2 transition-colors min-w-full ${
        isSticky ? "bg-gray-800 fixed top-0 z-50" : "bg-gray-800 bg-opacity-60"
      }`}
    >
      <ul className="flex gap-3 text-white items-center">
        <li className="px-2 py-1 rounded-sm hover:bg-gray-200 hover:bg-opacity-40 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-200 hover:bg-opacity-40 hover:text-black">
          Link1
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-200 hover:bg-opacity-40 hover:text-black">
          Link2
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-200 hover:bg-opacity-40 hover:text-black">
          Link3
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-200 hover:bg-opacity-40 hover:text-black">
          Link4
        </li>
        <li className="px-2 py-1 rounded-sm hover:bg-gray-200 hover:bg-opacity-40 hover:text-black">
          Link5
        </li>
        {isSticky && (
          <div className="flex justify-between w-full">
            <SearchBarOnHeroSection isSticky={isSticky} onSearch={onSearch} />
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">
              <span className="bg-gray-600 hover:bg-gray-700 relative rounded-md px-2 py-1">
                J4B MOVIES
              </span>
              <sup className="badge badge-primary">Beta v0.1</sup>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SecondaryNav;
