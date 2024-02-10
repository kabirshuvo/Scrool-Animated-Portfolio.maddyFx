import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="w-full px-8 flex items-center justify-between absolute top-0 z-10 py-2 border-b border-slate-700 ">
        <div>
          <Image src="/cmyk_plus_logo.png" alt="Logo" width={30} height={30} />
        </div>
        <div>
          <ul className="flex gap-7 pt-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/designs">Designs</Link>
            </li>
            <li>
              <Link href="/offers">Offers</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default NavBar;
