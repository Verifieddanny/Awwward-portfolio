import Image from "next/image";
import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
interface GetIn {
  modal: { active: boolean; index: number };
  projects: {
    title: string;

    src: string;

    color: string;
  }[];
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Modals({ modal, projects }: GetIn) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  const cursor = useRef(null);

  const cursorLabel = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });

      let xMoveCusor = gsap.quickTo(cursor.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      let yMoveCusor = gsap.quickTo(cursor.current, "top", {
        duration: 0.5,
        ease: "power3",
      });

      let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
        duration: 0.45,
        ease: "power3",
      });
      let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
        duration: 0.45,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        const { pageX, pageY } = e;
        xMoveContainer(pageX);
        yMoveContainer(pageY);
        xMoveCusor(pageX);
        yMoveCusor(pageY);
        xMoveCursorLabel(pageX);
        yMoveCursorLabel(pageY);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={
          active
            ? {
                scale: 1,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
              }
            : {
                scale: 0,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
              }
        }
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div style={{ top: index * -100 + "%" }} className="modalSlider">
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                className="h-full w-full flex items-center justify-center"
                style={{ background: color }}
              >
                <Image
                  src={`/Images/${src}`}
                  width={300}
                  height={0}
                  alt={project.title}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={
          active
            ? {
                scale: 1,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
              }
            : {
                scale: 0,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
              }
        }
        className="cursor"
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={
          active
            ? {
                scale: 1,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
              }
            : {
                scale: 0,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
              }
        }
        className="cursorLabel"
      >
        view
      </motion.div>
    </>
  );
}

export default Modals;
