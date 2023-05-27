"use client";
import Link from "next/link";

export default function NavLink({ currentRoute, children, href, className, activeClassName }) {
  return (
    <Link href={href} className={`${className} ${currentRoute === href ? activeClassName : ""}`}>
      {children}
    </Link>
  );
}
