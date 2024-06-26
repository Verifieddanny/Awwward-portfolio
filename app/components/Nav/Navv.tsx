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

    href: "#top",
  },

  {
    title: "Work",

    href: "#work",
  },

  {
    title: "About",

    href: "#about",
  },

  {
    title: "Contact",

    href: "#contact",
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

function Nav({ setIsActive }: { setIsActive: (isActive: boolean) => void }) {
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
                  setIsActive={setIsActive}
                ></Links>
              );
            })}
          </div>
          <div className="footer">
            <Magnetic>
              <p>Awwwards</p>
            </Magnetic>

            <Magnetic>
              <Link href="https://github.com/Verifieddanny">Github</Link>
            </Magnetic>

            <Magnetic>
              <Link href="https://twitter.com/dannyclassi_c">Twitter</Link>
            </Magnetic>

            <Magnetic>
              <Link href="https://www.linkedin.com/in/devdanny0/">
                Linkedin
              </Link>
            </Magnetic>
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
}

export default Nav;
