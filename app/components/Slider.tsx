import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import "./slider/slider.css";
const slider1 = [
  {
    color: "#e3e5e7",

    src: "c2.jpg",
  },

  {
    color: "#d6d7dc",

    src: "decimal.jpg",
  },

  {
    color: "#e3e3e3",

    src: "funny.jpg",
  },

  {
    color: "#21242b",

    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",

    src: "maven.jpg",
  },

  {
    color: "#e5e0e1",

    src: "panda.jpg",
  },

  {
    color: "#d7d4cf",

    src: "powell.jpg",
  },

  {
    color: "#e1dad6",

    src: "wix.jpg",
  },
];

function Slider() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div ref={container} className="slidingImages">
      <motion.div className="s-slider" style={{ x: x1 }}>
        {slider1.map((project, index) => {
          return (
            <div
              className="s-project"
              style={{ background: project.color }}
              key={index}
            >
              <div className="s-imageContainer">
                <Image fill={true} alt="image" src={`/Images/${project.src}`} />
              </div>{" "}
            </div>
          );
        })}
      </motion.div>
      <motion.div className="s-slider" style={{ x: x2 }}>
        {slider2.map((project, index) => {
          return (
            <div
              className="s-project"
              style={{ background: project.color }}
              key={index}
            >
              <div className="s-imageContainer">
                <Image fill={true} alt="image" src={`/Images/${project.src}`} />
              </div>{" "}
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="s-circleContainer">
        <div className="s-circle"></div>
      </motion.div>
    </div>
  );
}

export default Slider;
