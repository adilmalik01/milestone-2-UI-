"use client"

import Image from "next/image";
import Navbar from "./component/Navbar";
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
import * as Icon from "react-bootstrap-icons"
import "@/app/globals.css"


type textT = string[]

export default function Home() {

  const texts: textT = [
    "Adil Malik",
    "Front-End Developer",
    "Back-End Developer",
    "Mern-Stack develpor"
  ];


  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!fadingOut) {
      const interval = setInterval(() => {
        if (letterIndex < texts[currentTextIndex].length) {
          setDisplayedText((prev) => prev + texts[currentTextIndex][letterIndex]);
          setLetterIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setFadingOut(true);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      const fadeOutInterval = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setFadingOut(false);
          setLetterIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 100);

      return () => clearInterval(fadeOutInterval);
    }
  }, [letterIndex, fadingOut, currentTextIndex, displayedText, texts]);

  return (
    <main className="min-h-screen  relative">
      <Navbar />
      <div className="h-[90vh] w-full flex justify-between  items-center">
        <div className="left w-[50%] p-10 mt-32 flex  flex-col gap-3">

          <div className="textSequence">
            <h1 className={fadingOut ? 'fadeOut' : "typing"}> I'm {displayedText} </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[23px]  font-semibold ">
              I'm a passionate MERN Stack Developer, recently embarked on a journey to further my skills at Aptech.
              Driven by a love for coding and continuous learning,
              I'm excited to build innovative web applications.
            </p>
          </motion.div>
          <div className="icons flex  mt-5 justify-start   gap-10 items-center">
            <Icon.Github size={25} />
            <Icon.Linkedin size={25} />
            <Icon.Instagram size={25} />
          </div>
        </div>


        <div className="right mt-24">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={"/4.png"} width={700} height={100} alt="" />
          </motion.div>
        </div>

      </div>
    </main>
  );
}
