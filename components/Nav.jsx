"use client";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AuthContext from "@contexts/AuthContext";
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
  const { auth, setAuth } = useContext(AuthContext);
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
    setAuth(false);
    setCookie("token", "", { days: 0 });
    toast.success("Logged out successfully");
  }
  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 z-10 hidden w-full items-center justify-between border-b-2 border-primary-900 bg-primary-800 px-6 shadow-xl transition-all lg:flex lg:px-12 xl:px-24 ${
          isScrolled ? "py-2" : "py-4"
        }`}>
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="mr-12 xl:mr-12">
            <h2 className="gradient_text_hover text-2xl font-bold">Rift-Guides</h2>
          </Link>
          <ul className="flex gap-8 xl:gap-10">
            {navItems.map((item, index) => (
              <li key={index} className="text-lg font-medium text-white hover:text-gray-400">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end gap-8 xl:gap-10">
          {!auth ? (
            <Link href="/login" className={`px-6 ${isScrolled ? "py-1" : "py-2"} primary_btn rounded-md text-lg font-medium`}>
              Log in
            </Link>
          ) : (
            <>
              <button onClick={logOut} className="outline_btn">
                <LogOut className="mr-1" size={16} />
                Log out
              </button>
              <Link href="/profile" className={`px-6 ${isScrolled ? "py-1" : "py-2"} primary_btn rounded-md text-lg font-medium`}>
                Profile
              </Link>
            </>
          )}
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-2 border-primary-900 bg-primary-800 px-6 py-4 shadow-xl transition-all lg:hidden lg:px-12 xl:px-24">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="mr-12 xl:mr-12">
            <h2 className="gradient_text text-2xl font-bold">Rift-Guides</h2>
          </Link>
        </div>

        <div className="flex items-center justify-end">
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
              className="fixed right-0 top-0 z-30 w-[calc(100vw-4rem)] bg-primary-800">
              <div className="mobile-menu flex h-screen w-full flex-col px-6">
                <ul className="mt-24 flex w-full flex-col items-end justify-center gap-8">
                  <li className="section_heading text-3xl">
                    <Link
                      className="h-full w-full"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      href="/">
                      Home
                    </Link>
                  </li>
                  {navItems.map((item, index) => (
                    <li key={index} className="section_heading text-3xl">
                      <Link
                        className="h-full w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        href={item.href}>
                        {item.name}
                      </Link>
                    </li>
                  ))}

                  {!auth ? (
                    <Link
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                      }}
                      href="/login"
                      className="primary_btn rounded-md px-6 py-2 text-3xl font-medium">
                      Log in
                    </Link>
                  ) : (
                    <>
                      <button onClick={logOut} className="outline_btn">
                        <LogOut className="mr-1" size={16} />
                        Log out
                      </button>
                      <Link
                        href="/profile"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                        }}
                        className="primary_btn rounded-md px-6 py-2 text-3xl font-medium">
                        Profile
                      </Link>
                    </>
                  )}
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
