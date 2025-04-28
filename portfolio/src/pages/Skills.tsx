import { motion } from "framer-motion";
import { stacks } from "../data";

const Skills = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="skills"
      className=" flex flex-col justify-center items-start h-screen text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="flex flex-col items-start gap-3"
      >
        <motion.h1 
          className="text-4xl font-bold"
          variants={itemVariants}
        >
          Essentials Tools I use
        </motion.h1>
        <motion.p 
          className="text-md text-start text-primary"
          variants={itemVariants}
        >
          Discover the powerful tools and technologies i use to create {" "}
          exceptional, <br /> high-performing website & applications.
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-4 gap-10 mt-10 w-full">
        {stacks.map((stack, index) => (
          <motion.div
            key={index}
            className="flex gap-5 items-center border p-3 rounded-md"
            variants={itemVariants}
          >
            <motion.span 
              className="flex flex-col items-center bg-gray-500/20 p-3 rounded-md"
              variants={itemVariants}
            >
              {stack.icon}
            </motion.span>
            <motion.span 
              className="flex flex-col items-start"
              variants={itemVariants}
            >
              <motion.h2 className="text-xl font-bold">{stack.name}</motion.h2>
              <motion.p className="text-gray-500">{stack.description}</motion.p>
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
