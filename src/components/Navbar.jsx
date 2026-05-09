"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Add Destination", path: "/add-destination" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          

          <h1 className="text-2xl font-black tracking-wide">
            Wander<span className="text-blue-600">Lust</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="relative text-sm font-semibold text-gray-700 transition duration-300 hover:text-blue-600"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/profile"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600"
          >
            Profile
          </Link>

          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[3px] w-6 rounded bg-black"></span>
          <span className="h-[3px] w-6 rounded bg-black"></span>
          <span className="h-[3px] w-6 rounded bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-sm font-semibold text-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/profile"
                className="rounded-full border border-gray-300 px-4 py-2 text-center text-sm font-medium"
              >
                Profile
              </Link>

              <Link
                href="/login"
                className="rounded-full border border-gray-300 px-4 py-2 text-center text-sm font-medium"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;