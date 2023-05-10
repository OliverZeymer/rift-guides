"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <nav
      className={`flex z-10 fixed top-0 w-full transition-all bg-primary-800 border-b-2 border-primary-900 shadow-xl justify-between items-center px-6 lg:px-24 py-${
        isScrolled ? "2" : "4"
      }`}>
      <div className="flex-1 flex justify-start items-center">
        <Link href="/" className="mr-16">
          <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-secondary-100">Rift-Guides</h2>
        </Link>
        <ul className="flex gap-12">
          <li className="text-white font-medium text-lg hover:text-gray-400">
            <Link href="/guides">Guides</Link>
          </li>
          <li className="text-white font-medium text-lg hover:text-gray-400">
            <Link href="/champions">Champions</Link>
          </li>
          <li className="text-white font-medium text-lg hover:text-gray-400">
            <Link href="/items">Items</Link>
          </li>
          <li className="text-white font-medium text-lg hover:text-gray-400">
            <Link href="/runes">Runes</Link>
          </li>
          <li className="text-white font-medium text-lg hover:text-gray-400">
            <Link href="/summoner-spells">Summoner Spells</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <a href="#signin" className="text-white font-medium text-lg mr-8 hover:text-gray-400">
          Sign in
        </a>
        <button
          className={`px-6 py-${
            isScrolled ? "1.5" : "2.5"
          } bg-gradient-to-r from-secondary-100 to-purple-600 cursor-pointer text-white font-medium text-lg rounded-md hover:bg-red-700 transition-all`}>
          Sign up
        </button>
      </div>
    </nav>
  );
}
