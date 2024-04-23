import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import "./slider/contact.css";
import Magnetic from "./common/magnetic";

function Contact() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className="contact">
      <div className="c-body">
        <div className="c-title">
          <span>
            <div className="c-imageContainer">
              <Image fill={true} alt="image" src={`/Images/bg2.jpg`} />
            </div>
            <h2>Let&lsquo;s work together</h2>
          </span>
          <motion.div style={{ x }} className="c-buttonContainer">
            <div className="c-button" style={{ background: "#334BD3" }}>
              <p>Get in touch</p>
            </div>
          </motion.div>

          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>

        <div className="c-nav">
          <div className="c-button buz">
            <p>dannyclassic56@gmail.com</p>
          </div>
          <div className="c-button buz">
            <p>+234 906 7522 357</p>
          </div>
        </div>

        <div className="c-info">
          <div className="flex gap-2">
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+1</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>

              <Magnetic>
                <p>Instagram</p>
              </Magnetic>

              <Magnetic>
                <p>Dribbble</p>
              </Magnetic>

              <Magnetic>
                <p>Linkedin</p>
              </Magnetic>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
