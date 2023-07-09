import Image from "next/image";
import AbilityTooltip from "./AbilityTooltip";

export default function ChampionProfile({ champion }) {
  const championName = champion?.name;
  return (
    <article className="flex justify-center gap-12">
      <div className="flex w-fit flex-col items-center justify-between rounded-lg bg-black/50 p-4 backdrop-blur">
        <div className="mb-2 flex items-center gap-4">
          <h1 className="section_heading bg-section_heading">{champion?.name}</h1>
          <div className="overflow-hidden rounded-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_DATA_API_URL}/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={50}
              height={50}
              className="scale-[1.15] transform overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
        <p className="text-2xl">{champion.title}</p>
      </div>
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_API_URL}/img/champion/splash/${champion.id}_${champion.skins ? champion.skins[champion.skins.length - 1].num : "0"}.jpg`}
        alt={champion.name}
        fill
        className="absolute inset-0 -z-10 bg-cover bg-center object-cover pt-4 opacity-30"
      />
      <div className="w-fit rounded-lg bg-black/50 p-4 backdrop-blur">
        <h2 className="section_heading bg-section_heading mb-4">Abilities</h2>
        <div className="flex flex-wrap gap-8">
          <AbilityTooltip name={champion?.passive?.name} description={champion?.passive?.description} championName={championName}>
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_DATA_API_URL}/img/passive/${champion.passive.image.full}`}
                alt={champion.passive.name}
                width={64}
                height={64}
                className="overflow-hidden rounded-md object-cover"
              />
              <p className="absolute -bottom-1.5 left-1/2 flex h-[12px] w-[12px] -translate-x-1/2 select-none items-center justify-center rounded-full border-2 border-black bg-bg/75 p-[8px] text-xs font-extrabold">
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
                  className="overflow-hidden rounded-md object-cover"
                />
                <p className="absolute -bottom-1.5 left-1/2 flex h-[12px] w-[12px] -translate-x-1/2 select-none items-center justify-center rounded-full border-2 border-black bg-bg/75 p-[8px] text-xs font-extrabold">{`${
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
