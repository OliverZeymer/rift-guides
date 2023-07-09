"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { fadeIn } from "@utils/motion";
import { CheckCircle } from "lucide-react";
const points = [
  {
    title: "Champion Guides",
  },
  {
    title: "Item Guides",
  },
  {
    title: "Rune Guides",
  },
  {
    title: "Build Guides",
  },
];
export default function LandingAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <AnimatePresence>
      <section className="py-48">
        <motion.article ref={ref} initial="hidden" animate={isInView ? "show" : "hidden"} className="flex flex-col items-center">
          <motion.h2 variants={fadeIn("left", "tween", 0.1, 0.5)} className="section_heading mb-4">
            What is Rift Guides?
          </motion.h2>
          <motion.p variants={fadeIn("left", "tween", 0.3, 0.5)} className="section_subheading mb-12 text-center font-semibold">
            Rift Guides is a website that helps you learn how to play League of Legends.
          </motion.p>
          <motion.ul className=" flex flex-col items-center justify-center gap-4 rounded-lg bg-black/50 p-12 text-center backdrop-blur">
            {points.map((point, index) => (
              <motion.li variants={fadeIn("left", "tween", 0.5 + index * 0.5, 0.75)} key={point.title} className="section_subheading flex w-full items-center justify-center gap-6">
                <CheckCircle className="inline-block" color="white" size={24} /> {point.title}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeIn("left", "tween", 0.3)} className="gradient-left" />
        </motion.article>
      </section>
    </AnimatePresence>
  );
}
