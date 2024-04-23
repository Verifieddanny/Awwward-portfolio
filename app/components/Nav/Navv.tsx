import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Curve from "./Curve/Curve";
import Links from "./Link/Link";
import Magnetic from "../common/magnetic";

const navItems = [
  {
    title: "Home",

    href: "/",
  },

  {
    title: "Work",

    href: "/work",
  },

  {
    title: "About",

    href: "/about",
  },

  {
    title: "Contact",

    href: "/contact",
  },
];

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

function Nav() {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="menu"
      >
        <div className="body">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="nav"
          >
            <div className="header">
              <p>Navigation</p>
            </div>

            {navItems.map((data, index) => {
              const isActive = selectedIndicator === data.href;

              return (
                <Links
                  key={index}
                  data={{ ...data }}
                  index={index}
                  isActive={isActive}
                  setSelectedIndicator={setSelectedIndicator}
                ></Links>
              );
            })}
          </div>
          <div className="footer">
            <a>Awwwards</a>

            <a>Instagram</a>

            <a>Dribble</a>

            <a>LinkedIn</a>
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}

export default Nav;
