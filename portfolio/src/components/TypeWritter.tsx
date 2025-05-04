import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ITypeWritter } from "../interfaces";

const TypeWritter = ({
  template,
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}: ITypeWritter) => {
  const [prefix, suffix] = template.split("{word}");
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = words[wordIndex];

    if (!isDeleting && displayWord === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayWord === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {}, typingSpeed);
    } else {
      const delta = isDeleting ? -1 : 1;
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayWord(current.substring(0, displayWord.length + delta));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayWord, isDeleting, words, wordIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      className={
        "w-full flex flex-wrap gap-3.5 items-center font-semibold text-3xl md:text-4xl xl:text-5xl " +
        "whitespace-normal break-words transition-all duration-500 ease-out"
      }
    >
      {prefix}
      <span
        className={
          "relative inline-flex items-center gap-2 text-primary border-b-2 border-current font-bold whitespace-nowrap"
        }
      >
        {displayWord}
        <motion.span
          className="absolute right-0 bottom-0 w-[2px] h-full bg-current"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </span>
      {suffix}
    </motion.h1>
  );
};

export default TypeWritter;