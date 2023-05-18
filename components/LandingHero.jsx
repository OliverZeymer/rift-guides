import Image from "next/image";
import Wave from "./Wave";
import SearchField from "./SearchField";
import LandingButton from "./LandingButton";

export default function LandingHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center flex-col top_section overflow-hidden select-none">
      <Image alt="rift guides background" src="/assets/images/rift-guides-background.webp" fill className="absolute object-cover inset-0 opacity-30 bg-cover bg-center pt-4 -z-10" />
      <article className="max-w-7xl flex justify-center h-full flex-col items-center mx-auto px-6 lg:px-12">
        <div>
          <h1 className="landing_text mx-auto">Rift-Guides</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl 5xl:text-3xl font-bold text-white text-center text-shadow my-6">
            Discover & Share League of Legends <span className="text-primary-100">Guides</span> and <span className="text-secondary-100">Builds</span>.
          </h2>
        </div>
        <SearchField placeholder="Search for a champion or user" />
        <LandingButton />
      </article>
      <Wave />
    </section>
  );
}
