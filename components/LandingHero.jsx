"use client";
import Image from "next/image";
import Wave from "./Wave";
import SearchField from "./SearchField";
import LandingButton from "./LandingButton";
import { useState } from "react";

export default function LandingHero() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className="top_section relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Image alt="rift guides background" src="/assets/images/rift-guides-background.webp" fill className="absolute inset-0 -z-10 bg-cover bg-center object-cover pt-4 opacity-30" />
      <article className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 lg:px-12">
        <div>
          <h1 className="landing_text mx-auto">Rift-Guides</h1>
          <h2 className="5xl:text-3xl text-shadow my-6 text-center text-lg font-bold text-white md:text-xl lg:text-2xl">
            Discover & Share League of Legends <span className="text-primary-100">Guides</span> and <span className="text-secondary-100">Builds</span>.
          </h2>
        </div>
        <SearchField searchValue={searchValue} setSearchValue={setSearchValue} placeholder="Search for a champion or user" />
        <LandingButton />
      </article>
      <Wave />
    </section>
  );
}
