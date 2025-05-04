import { ArrowDown } from "lucide-react";
import { FaPaperPlane, FaCircle } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { TypeWritter } from "../components";
import { useTranslation } from "react-i18next";
import memoji from "../assets/memoji.png";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="home"
      className="flex flex-col gap-5 justify-center h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex items-center gap-3" variants={itemVariants}>
        <img src={memoji} className="w-10" alt="" />
        <motion.span className="flex items-center gap-2">
          <FaCircle className="size-3 text-green-500" />
          <p className="text-md text-primary font-semibold">
            {t('open_to_new_projects')}
          </p>
        </motion.span>
      </motion.div>

      <TypeWritter
        template={t('typewriter_template')}
        words={[
          t('typewriter_word_innovative'),
          t('typewriter_word_scalable'),
          t('typewriter_word_immersive'),
          t('typewriter_word_impactful'),
        ]}
      />

      <motion.div className="flex flex-col gap-3 items-start" variants={itemVariants}>
        <motion.p className="text-sm md:text-lg text-start text-primary">
          {t('intro_paragraph_1')} <span className="text-primary">{t('full_stack_software_engineer')}</span> {t('intro_paragraph_2')}
        </motion.p>
      </motion.div>

      <motion.div className="flex items-center gap-5" variants={itemVariants}>
        <Button className="p-5">
          <a href="#contact" className="flex items-center gap-3">
            <p>{t('get_in_touch')}</p>
            <FaPaperPlane />
          </a>
        </Button>
        <Button className="border hover:border-gray-400 bg-transparent hover:bg-transparent text-color p-5">
          <a href="#projects" className="flex items-center gap-3">
            <p>{t('my_work')}</p>
            <ArrowDown />
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Home;
