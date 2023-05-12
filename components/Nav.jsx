"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const navItems = [
  {
    name: "Champions",
    href: "/champions",
  },
  {
    name: "Guides",
    href: "/guides",
  },
  {
    name: "Items",
    href: "/items",
  },
  {
    name: "Runes",
    href: "/runes",
  },
  {
    name: "Summoner Spells",
    href: "/summoner-spells",
  },
];
export default function Nav() {
  //scrolling effect
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);
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
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex z-10 fixed top-0 w-full transition-all bg-primary-800 border-b-2 border-primary-900 shadow-xl justify-between items-center px-6 lg:px-12 xl:px-24 ${
          isScrolled ? "py-2" : "py-4"
        }`}>
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="mr-12 xl:mr-12">
            <h2 className="font-bold text-2xl gradient_text">Rift-Guides</h2>
          </Link>
          <ul className="flex gap-8 xl:gap-10">
            {navItems.map((item, index) => (
              <li key={index} className="text-white font-medium text-lg hover:text-gray-400">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <a href="#guides" className="text-white font-medium text-lg mr-8 hover:text-gray-400">
            Sign in
          </a>
          <button className={`px-6 ${isScrolled ? "py-1" : "py-2"} primary_btn text-lg font-medium rounded-md`}>Sign up</button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="flex lg:hidden z-10 fixed top-0 w-full transition-all bg-primary-800 border-b-2 border-primary-900 shadow-xl justify-between items-center px-6 lg:px-12 xl:px-24 py-4">
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="mr-12 xl:mr-12">
            <h2 className="font-bold text-2xl gradient_text">Rift-Guides</h2>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          {!isMobileMenuOpen ? (
            <Menu className="!z-40" size={32} onClick={() => setIsMobileMenuOpen((prev) => !prev)} />
          ) : (
            <X className="!z-40" size={32} onClick={() => setIsMobileMenuOpen((prev) => !prev)} />
          )}
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.5,
                type: "tween",
              }}
              className="fixed top-0 left-0 w-full bg-primary-800 z-20">
              <div className="flex flex-col justify-center items-center h-screen w-screen">
                <ul className="flex flex-col w-screen justify-center">
                  <li className="text-white h-full flex border-t-2 w-full font-medium py-6 text-center bg-white/10 text-lg hover:text-gray-400">
                    <Link
                      className="w-full h-full"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      href="/">
                      Home
                    </Link>
                  </li>
                  {navItems.map((item, index) => (
                    <li key={index} className="text-white border-t-2 last:border-b-2 w-full font-medium py-6 text-center bg-white/10 text-lg hover:text-gray-400">
                      <Link
                        className="w-full h-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        href={item.href}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Mobile Menu */}
    </>
  );
}
