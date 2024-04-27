import { AnimatePresence, delay, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Magnetic from "../../common/magnetic";

interface GetIn {
  data: {
    title: string;

    href: string;
  };
  isActive: boolean;
  setSelectedIndicator: any;
  index: number;
  setIsActive: (isActive: boolean) => void;
}

const slide = {
  initial: { x: 80 },
  enter: {
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 },
  },
  exit: {
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 },
  },
};

const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

function Links({
  data,
  isActive,
  setSelectedIndicator,
  index,
  setIsActive,
}: GetIn) {
  const { title, href } = data;
  return (
    <motion.div
      key={index}
      onMouseEnter={() => {
        setSelectedIndicator(data.href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="relative flex items-center"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]"
      ></motion.div>

      <Magnetic>
        <a href={href} onClick={() => setIsActive(false)}>
          {title}
        </a>
      </Magnetic>
    </motion.div>
  );
}

export default Links;
