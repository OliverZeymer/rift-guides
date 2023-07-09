"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ children, href, className, activeClassName, onClick }) {
  const currentRoute = usePathname();
  return (
    <Link onClick={onClick} href={href} className={`${className} ${currentRoute === href ? activeClassName : ""}`}>
      {children}
    </Link>
  );
}
