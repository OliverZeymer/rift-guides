"use client";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TokenContext from "@contexts/TokenContext";
import { setCookie } from "react-use-cookie";
import { toast } from "react-toastify";

const navItems = [
  {
    name: "Guides",
    href: "/guides",
  },
  {
    name: "Champions",
    href: "/champions",
  },

  {
    name: "Items",
    href: "/items",
  },
  {
    name: "Runes",
    href: "/runes",
  },
];
export default function Nav() {
  const { token, setToken } = useContext(TokenContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);
  function logOut() {
    setToken(null);
    setCookie("token", "", { days: 0 });
    sessionStorage.removeItem("token");
    toast.success("Logged out successfully");
  }
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex z-10 fixed top-0 w-full transition-all bg-primary-800 border-b-2 border-primary-900 shadow-xl justify-between items-center px-6 lg:px-12 xl:px-24 ${
          isScrolled ? "py-2" : "py-4"
        }`}>
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="mr-12 xl:mr-12">
            <h2 className="font-bold text-2xl gradient_text_hover">Rift-Guides</h2>
          </Link>
          <ul className="flex gap-8 xl:gap-10">
            {navItems.map((item, index) => (
              <li key={index} className="text-white font-medium text-lg hover:text-gray-400">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end gap-8 xl:gap-10 items-center">
          {!token ? (
            <Link href="/register" className={`px-6 ${isScrolled ? "py-1" : "py-2"} primary_btn text-lg font-medium rounded-md`}>
              Log in
            </Link>
          ) : (
            <>
              <button onClick={logOut} className="outline_btn">
                <LogOut className="mr-1" size={16} />
                Log out
              </button>
              <Link href="/profile" className={`px-6 ${isScrolled ? "py-1" : "py-2"} primary_btn text-lg font-medium rounded-md`}>
                Profile
              </Link>
            </>
          )}
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.2,
                type: "tween",
              }}
              className="fixed top-0 right-0 w-[calc(100vw-4rem)] bg-primary-800 z-30">
              <div className="flex flex-col h-screen w-full px-6 mobile-menu">
                <ul className="flex flex-col gap-8 items-end mt-24 w-full justify-center">
                  <li className="text-3xl section_heading">
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
                    <li key={index} className="text-3xl section_heading">
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
