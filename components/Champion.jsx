import Image from "next/image";
import Link from "next/link";
export default function Champion({ champion }) {
  return (
    <Link href={`/champion/${champion.id}`} className="flex flex-col cursor-pointer hover:brightness-75 transition-all hover:scale-[.975]" key={champion.name}>
      <Image width={100} height={100} src={`${process.env.NEXT_PUBLIC_DATA_API_URL}/img/champion/${champion.image.full}`} alt={champion.name} className="champ-image" />
      <p className="mt-2 text-sm" key={champion.id}>
        {champion.name}
      </p>
    </Link>
  );
}
