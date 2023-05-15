import Image from "next/image";

export default function ChampionProfile({ champion }) {
  console.log(champion);
  return (
    <article>
      <div className="flex items-center gap-4 mb-12">
        <h1 className="section_heading  bg-section_heading">{champion?.name}</h1>
        <div className="overflow-hidden rounded-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA_API_URL}/img/champion/${champion.image.full}`}
            alt={champion.name}
            width={50}
            height={50}
            className="rounded-full object-cover overflow-hidden transform scale-[1.15]"
          />
        </div>
      </div>
      <p className="text-shadow-sm">{champion?.lore}</p>
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_API_URL}/img/champion/splash/${champion.id}_${champion.skins[champion.skins.length - 1].num}.jpg`}
        alt={champion.name}
        fill
        className="absolute object-cover inset-0 opacity-30 bg-cover bg-center pt-4 -z-10"
      />
    </article>
  );
}
