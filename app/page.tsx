"use client";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/locomotive-scroll.css";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Desciption from "./components/Desciption";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/utils/Preloader";
export default function Home() {
  const refScrollContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getLocomotive() {
      //npm install @types/locomotive-scroll --save-dev (important)
      const Locomotive = (await import("locomotive-scroll")).default;

      new Locomotive({
        el: refScrollContainer.current,
        smooth: true,
      });

      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    }

    getLocomotive();
  }, []);
  return (
    <main ref={refScrollContainer} className="">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Landing />
      <Desciption />
      <Projects />
      <Slider />
      <Contact />
    </main>
  );
}
