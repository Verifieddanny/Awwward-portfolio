"use client";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav/Navv";
import Magnetic from "./components/common/magnetic";
import "./header.css";
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Header() {
  const header = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  const button = useRef(null);

  //   useEffect(() => {
  //     if (isActive) setIsActive(false);
  //   }, [isActive, pathname]);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },

          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={header} className="header">
        <a href="#top">
          <div className="logo">
            <p className="copyright">©</p>
            <div className="name">
              <p className="codeBy">Code by</p>
              <p className="daniel">Daniel</p>
              <p className="nwachukwu">Nwachukwu</p>
            </div>
          </div>
        </a>
        <div className="nav">
          <div className="el">
            <Magnetic>
              <a href="#work">Work</a>
            </Magnetic>
            <div className="indicator"></div>
          </div>
          <div className="el">
            <Magnetic>
              <a href="#about">About</a>
            </Magnetic>
            <div className="indicator"></div>
          </div>
          <div className="el">
            <Magnetic>
              <a href="#contact">Contact</a>
            </Magnetic>
            <div className="indicator"></div>
          </div>
        </div>
      </div>
      <div ref={button} className="headerButtonContainer">
        <div className="button" onClick={() => setIsActive(!isActive)}>
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}

export default Header;
