export default function LandingButton() {
  return (
    <button className="sm:max-w-[290px] hover:scale-[1.025] active:scale-[0.975] transition-all rounded-full p-[1.5px] relative group" type="button">
      <div className="absolute -left-[1.5px] -top-[1.5px] w-[calc(100%+3px)] rounded-full h-[calc(100%+3px)] z-[-1] overflow-hidden">
        <div className="animate-rotate -left-[calc(10px/2)] -top-[calc(194px/2)] absolute w-[300px] h-[300px] md:w-[300px] md:h-[300px] bg-rainbow group-hover:animation-running"></div>
      </div>
      <div className="bg-bg flex justify-center items-center gap-4 rounded-[55px] py-4 px-12 text-xl md:text-2xl text-white">
        <span>Let's Start</span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 h-6 md:h-8">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.821 9.822c.651-.651 1.707-.651 2.357 0l5 5c.651.65.651 1.706 0 2.357l-5 5a1.667 1.667 0 1 1-2.357-2.357l2.155-2.155H7a1.667 1.667 0 0 1 0-3.334h13.976l-2.155-2.155a1.667 1.667 0 0 1 0-2.357Z"
            fill="currentColor"></path>
        </svg>
      </div>
      <div className="opacity-40 absolute -left-[1.5px] -top-[1.5px] w-[calc(100%+3px)] rounded-full h-[calc(100%+3px)] z-[-1] blur-lg overflow-hidden">
        <div className="animate-rotate -left-[calc(10px/2)] -top-[calc(194px/2)] absolute w-[300px] h-[300px] md:w-[300px] md:h-[300px] bg-rainbow group-hover:animation-running"></div>
      </div>
    </button>
  );
}
