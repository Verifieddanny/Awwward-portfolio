import { useLayoutEffect, useRef, useEffect } from "react";

import gsap from "gsap";
import React from "react";
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Magnetic({ children }: { children: JSX.Element }) {
  const magnetic: any = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      console.log(children);
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magnetic.current.addEventListener("mousemove", (e: any) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      });
      magnetic.current.addEventListener("mouseleave", (e: any) => {
        xTo(0);
        yTo(0);
      });
    });
    return () => ctx.revert();
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
