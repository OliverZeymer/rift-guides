"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Champions() {
  const [champions, setChampions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getChampions() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_ASSET_API_URL}/data/en_US/champion.json`);
        const championsArray = Object.values(res.data.data);
        setChampions(championsArray);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getChampions();
  }, []);
  return (
    <section className="top_section min-h-screen px-12">
      <h1 className="section_heading bg-section_heading mb-8">Champions</h1>
      <div className="flex flex-wrap justify-between gap-y-8">
        {!isLoading && champions ? (
          champions.map((champion) => (
            <article className="champ_card glassmorphism overflow-hidden" key={champion.name}>
              <h3 className="font-bold text-lg" key={champion.id}>
                {champion.name}
              </h3>
              <Image width={50} height={50} className="rounded-full" src={`${process.env.NEXT_PUBLIC_ASSET_API_URL}/img/champion/${champion.image.full}`} alt="" />
            </article>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}
