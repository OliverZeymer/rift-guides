"use client";
import Image from "next/image";
import Wave from "./Wave";
import SearchField from "./SearchField";
import { useRef, useEffect, useState } from "react";

export default function LandingHero() {
  //image scrolling effect
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center flex-col top_section overflow-hidden" ref={containerRef}>
      <Image
        alt="rift guides background"
        src="/assets/images/rift-guides-background.webp"
        fill
        unoptimized
        className="object-cover absolute inset-0 opacity-30 bg-cover bg-center pt-4 -z-10"
        style={{
          transform: `translateY(${scrollPosition}px)`,
        }}
      />
      <article className="max-w-7xl flex justify-center h-full flex-col items-center mx-auto px-6 lg:px-12">
        <div>
          <h1 className="landing_text mx-auto">
            Rift-Guides
            <span className="text-white">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl 5xl:text-4xl font-bold text-white text-center text-shadow my-6">
            Discover & Share League of Legends <span className="text-primary-100">Guides</span> and <span className="text-secondary-100">Builds</span>.
          </h2>
        </div>
        <SearchField />

        <button className="w-full text-xl lg:text-2xl font-bold mt-8 sm:w-fit px-4 sm:px-24 py-5 uppercase tracking-wider rounded-3xl primary_btn">See Featured Guides</button>
      </article>
      <Wave />
    </section>
  );
}
