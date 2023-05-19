import { ArrowRight } from "lucide-react";

export default function LandingButton() {
  return (
    <button className="group relative rounded-full p-[1.5px] transition-all hover:scale-[1.025] active:scale-[0.975] sm:max-w-[290px]" type="button">
      <div className="absolute -left-[1.5px] -top-[1.5px] z-[-1] h-[calc(100%+3px)] w-[calc(100%+3px)] overflow-hidden rounded-full">
        <div className="animate-rotate bg-rainbow group-hover:animation-running absolute -left-[calc(10px/2)] -top-[calc(194px/2)] h-[300px] w-[300px] md:h-[300px] md:w-[300px]"></div>
      </div>
      <div className="flex items-center justify-center gap-4 rounded-[55px] bg-bg px-12 py-4 text-xl text-white md:text-2xl">
        <span>Let's Start</span>
        <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
      </div>
      <div className="absolute -left-[1.5px] -top-[1.5px] z-[-1] h-[calc(100%+3px)] w-[calc(100%+3px)] overflow-hidden rounded-full opacity-40 blur-lg">
        <div className="animate-rotate bg-rainbow group-hover:animation-running absolute -left-[calc(10px/2)] -top-[calc(194px/2)] h-[300px] w-[300px] md:h-[300px] md:w-[300px]"></div>
      </div>
    </button>
  );
}
