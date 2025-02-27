"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Text */}
          <div className="flex-shrink-0 font-bold">
            <Link href={"/"}>Speech AI</Link>
          </div>

          {/* Transcribe Link (Desktop) */}
          <div className="hidden md:flex">
            <Link
              href={"/transcribe-page"}
              className="text-gray-900 hover:text-gray-700 transition delay-300 ease-in-out"
            >
              Transcribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu for Responsiveness */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="py-2 px-4 space-y-2">
            <Link
              href={"/transcribe-page"}
              className="block text-gray-900 hover:text-gray-700 transition delay-300 ease-in-out"
            >
              Transcribe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
