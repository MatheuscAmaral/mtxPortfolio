import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { stacks } from "../data";

const Skills = () => {
  const { t } = useTranslation();

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
      className="flex flex-col gap-10 justify-center items-start xl:h-screen text-center pt-96 xl:pt-32 transition-all"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex flex-col items-start gap-2" variants={containerVariants}>
        <motion.h1 className="flex items-center gap-2 text-4xl font-bold mb-5" variants={itemVariants}>
          <p>{t('skills_title_technologies')}</p>
          <span className="text-primary">{t('skills_title_tools')}</span>
        </motion.h1>
        <motion.p className="text-md text-start text-primary" variants={itemVariants}>
          {t('skills_intro')}
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full" variants={containerVariants}>
        {stacks.map((stack) => (
          <motion.div
            key={stack.nameKey}
            className="flex gap-5 items-center border p-2 rounded-md select-none hover:bg-gray-500/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span className="flex flex-col items-center bg-gray-500/20 p-2 ml-1 rounded-md" variants={itemVariants}>
              {stack.icon}
            </motion.span>
            <motion.span className="flex flex-col items-start" variants={itemVariants}>
              <motion.h2 className="text-md font-bold">{t(stack.nameKey)}</motion.h2>
              <motion.p className="text-sm text-gray-500">{t(stack.descriptionKey)}</motion.p>
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;