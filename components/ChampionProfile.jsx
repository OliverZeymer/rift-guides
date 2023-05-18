import Image from "next/image";
import AbilityTooltip from "./AbilityTooltip";

export default function ChampionProfile({ champion }) {
  const championName = champion?.name;
  return (
    <article className="flex gap-12 justify-center">
      <div className="bg-black/50 backdrop-blur w-fit p-4 rounded-lg">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="section_heading bg-section_heading">{champion?.name}</h1>
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
        <p className="text-2xl">{champion.title}</p>
      </div>
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_API_URL}/img/champion/splash/${champion.id}_${champion.skins ? champion.skins[champion.skins.length - 1].num : "0"}.jpg`}
        alt={champion.name}
        fill
        className="absolute object-cover inset-0 opacity-30 bg-cover bg-center pt-4 -z-10"
      />
      <div className="bg-black/50 backdrop-blur w-fit rounded-lg p-4">
        <h2 className="section_heading mb-4 bg-section_heading">Abilities</h2>
        <div className="flex flex-wrap gap-8">
          <AbilityTooltip name={champion?.passive?.name} description={champion?.passive?.description} championName={championName}>
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_DATA_API_URL}/img/passive/${champion.passive.image.full}`}
                alt={champion.passive.name}
                width={64}
                height={64}
                className="rounded-md object-cover overflow-hidden"
              />
              <p className="absolute -bottom-1.5 select-none border-2 border-black left-1/2 p-[8px] bg-bg/75 font-extrabold rounded-full text-xs w-[12px] h-[12px] flex items-center justify-center -translate-x-1/2">
                P
              </p>
            </div>
          </AbilityTooltip>

          {champion?.spells?.map((spell, index) => (
            <AbilityTooltip key={spell.id} name={spell.name} description={spell.description} championName={championName}>
              <div className="relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_DATA_API_URL}/img/spell/${spell.image.full}`}
                  alt={spell.name}
                  width={64}
                  height={64}
                  className="rounded-md object-cover overflow-hidden"
                />
                <p className="absolute -bottom-1.5 select-none border-2 border-black left-1/2 p-[8px] bg-bg/75 font-extrabold rounded-full text-xs w-[12px] h-[12px] flex items-center justify-center -translate-x-1/2">{`${
                  ["Q", "W", "E", "R"][index]
                }`}</p>
              </div>
            </AbilityTooltip>
          ))}
        </div>
      </div>
    </article>
  );
}
