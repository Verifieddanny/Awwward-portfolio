import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import Magnetic from "./magnetic";
import "../slider/slider.css";
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface Getin {
  children: React.ReactNode;
  backgroundColor: string;
  attributes: {};
}

function Rounded({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: Getin) {
  const circle = useRef(null);

  let timeline = useRef(null);

  let timeoutId: any = null;

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });

      timeline.current

        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter"
        )

        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    });
    return () => ctx.revert();
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="roundedButton"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}

        <div
          ref={circle}
          style={{ backgroundColor }}
          className="r-circle"
        ></div>
      </div>
    </Magnetic>
  );
}

export default Rounded;
