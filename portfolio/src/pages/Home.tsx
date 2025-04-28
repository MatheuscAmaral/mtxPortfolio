import { ArrowDown } from "lucide-react";
import { FaPaperPlane, FaCircle } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { },
  show: {
    transition: {
      staggerChildren: 0.3,  
      delayChildren: 0.2  
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col gap-5 justify-center h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.span
          className="flex items-center gap-2"
          variants={itemVariants}
      >
        <FaCircle className="size-3 text-green-500" />
        <p className="text-md text-primary font-semibold">
          Open to New Projects
        </p>
      </motion.span>

      <motion.h1
        className="text-6xl font-bold mb-4"
        variants={itemVariants}
      >
        I turn ideas into meaningful design solutions that inspire.
      </motion.h1>

      <motion.div
        className="flex items-center gap-5"
        variants={itemVariants}
      >
        <Button className="p-5">
          <a href="#contact" className="flex items-center gap-3">
            <p>Get in touch</p>
            <FaPaperPlane  />
          </a>
        </Button>
        <Button className="border hover:border-gray-400 bg-transparent hover:bg-transparent text-color p-5">
          <a href="#projects" className="flex items-center gap-3">
            <p>My work</p>
            <ArrowDown />
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Home;
