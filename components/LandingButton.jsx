import { ArrowRight } from "lucide-react";

export default function LandingButton() {
  return (
    <button className="sm:max-w-[290px] hover:scale-[1.025] active:scale-[0.975] transition-all rounded-full p-[1.5px] relative group" type="button">
      <div className="absolute -left-[1.5px] -top-[1.5px] w-[calc(100%+3px)] rounded-full h-[calc(100%+3px)] z-[-1] overflow-hidden">
        <div className="animate-rotate -left-[calc(10px/2)] -top-[calc(194px/2)] absolute w-[300px] h-[300px] md:w-[300px] md:h-[300px] bg-rainbow group-hover:animation-running"></div>
      </div>
      <div className="bg-bg flex justify-center items-center gap-4 rounded-[55px] py-4 px-12 text-xl md:text-2xl text-white">
        <span>Let's Start</span>
        <ArrowRight className="w-6 md:w-8 h-6 md:h-8" />
      </div>
      <div className="opacity-40 absolute -left-[1.5px] -top-[1.5px] w-[calc(100%+3px)] rounded-full h-[calc(100%+3px)] z-[-1] blur-lg overflow-hidden">
        <div className="animate-rotate -left-[calc(10px/2)] -top-[calc(194px/2)] absolute w-[300px] h-[300px] md:w-[300px] md:h-[300px] bg-rainbow group-hover:animation-running"></div>
      </div>
    </button>
  );
}
