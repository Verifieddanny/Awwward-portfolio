"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav/Navv";
function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        className="fixed right-0 m-[20px] z-[2] w-[80px] h-[80px] rounded-[50%] bg-[#455CE9] cursor-pointer flex items-center justify-center"
      >
        <div className={`${"burger"} ${isActive ? "burgerActive" : ""}`}></div>
      </div>
      {/* <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence> */}
    </>
  );
}

export default Header;
