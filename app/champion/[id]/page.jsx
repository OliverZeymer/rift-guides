"use client";
import ChampionProfile from "@components/ChampionProfile";
import Loader from "@components/Loader";
import { useQuery } from "react-query";

export default function ChampionPage({ params }) {
  const id = params.id;
  const {
    data: champion,
    isLoading,
    error,
  } = useQuery(["champion", id], async () => {
    const response = await fetch(`/api/champion/${id}`);
    const championData = await response.json();
    const championArray = Object.values(championData.data);
    return championArray;
  });
  return (
    <section className="top_section min-h-screen px-6 lg:px-12 xl:px-24">
      {isLoading ? <Loader /> : error ? <p>Error: {error.message}</p> : <ChampionProfile champion={champion[0]} />}
    </section>
  );
}
