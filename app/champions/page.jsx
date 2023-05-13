"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Champions() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    async function fetchChampions() {
      try {
        const response = await fetch("/api/champions");
        const championsData = await response.json();
        const championsArray = Object.values(championsData.data);
        setChampions(championsArray);
      } catch (error) {
        console.error(error);
      }
    }
    fetchChampions();
  }, []);

  return (
    <section className="top_section min-h-screen px-12">
      <h1 className="section_heading bg-section_heading mb-8">Champions</h1>
      <div className="gradient_border rounded-xl">
        <div className="champion_container bg-primary-700 p-6 rounded-3xl">
          {champions ? (
            champions.map((champion) => (
              <article className="flex flex-col cursor-pointer" key={champion.name}>
                <Image width={100} height={100} className="" src={`${process.env.NEXT_PUBLIC_ASSET_API_URL}/img/champion/${champion.image.full}`} alt="" />
                <p className="mt-2 text-sm" key={champion.id}>
                  {champion.name}
                </p>
              </article>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}
