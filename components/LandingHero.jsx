import Image from "next/image";
import Wave from "./Wave";
import SearchField from "./SearchField";

export default function LandingHero() {
  return (
    <section className="relative h-screen w-full top-section">
      <Image
        alt="rift guides background"
        src="/assets/images/rift-guides-background.webp"
        fill
        unoptimized
        className="object-cover absolute inset-0 opacity-30 bg-cover bg-center pt-4 -z-10"
      />
      <article className="max-w-7xl flex justify-center h-full flex-col items-center mx-auto">
        <div>
          <h1 className="text-8xl relative font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-secondary-100 drop-shadow-xl">
            Rift-Guides
            <span className="text-white">.</span>
          </h1>
          <h2 className="text-4xl font-bold text-white text-center text-shadow my-6">
            Discover & Share League of Legends <span className="text-secondary-100">Guides</span> and <span className="text-secondary-100">Builds</span>.
          </h2>
        </div>
        <SearchField />

        <button className="w-full mt-8 lg:w-fit px-24 py-5 uppercase tracking-wider rounded-3xl hover:scale-105 active:scale-95 text-white transition-all duration-300 bg-gradient-to-tl text-xl lg:text-2xl font-bold from-secondary-100 via-primary-100 to-secondary-100 bg-size-200 bg-pos-0 hover:bg-pos-100">
          See Featured Guides
        </button>
      </article>
      <Wave />
    </section>
  );
}
