"use client";
import Champion from "@components/Champion";
import ChampionFiltering from "@components/ChampionFiltering";
import Loader from "@components/Loader";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
export default function Champions() {
  const {
    data: champions,
    isLoading,
    error,
  } = useQuery(["champions"], async () => {
    const response = await fetch(`/api/champions`);
    const championData = await response.json();
    const champions = Object.values(championData.data);
    return champions;
  });
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  useEffect(() => {
    if (!isLoading && champions) {
      setFilteredChampions(champions);
    }
  }, [champions]);
  return (
    <section className="top_section mx-auto min-h-screen max-w-[100rem] px-6 lg:px-12 xl:px-24">
      <h1 className="section_heading bg-section_heading mx-auto mb-8 w-fit text-center">Champions</h1>
      <ChampionFiltering
        champions={champions}
        setFilteredChampions={setFilteredChampions}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
      />
      <div className="gradient_border rounded-xl">
        <article className="champion_container grid min-h-[176px] justify-items-center rounded-3xl bg-primary-700 p-6 sm:gap-2">
          {isLoading ? <Loader /> : error ? <p>Error: {error.message}</p> : filteredChampions.map((champion, index) => <Champion key={index} champion={champion} />)}
        </article>
      </div>
    </section>
  );
}
