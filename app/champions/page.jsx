"use client";
import Champion from "@components/Champion";
import Loader from "@components/Loader";
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
  return (
    <section className="top_section min-h-screen px-6 lg:px-12 xl:px-24">
      <h1 className="section_heading bg-section_heading mb-8">Champions</h1>
      <div className="gradient_border rounded-xl">
        <article className="champion_container bg-primary-700 p-6 rounded-3xl grid justify-items-center sm:gap-2">
          {isLoading ? <Loader /> : error ? <p>Error: {error.message}</p> : champions.map((champion, index) => <Champion key={index} champion={champion} />)}
        </article>
      </div>
    </section>
  );
}
