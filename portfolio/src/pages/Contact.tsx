import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { TbLoader3 } from "react-icons/tb";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          toast.success(t("contact_toast_success"));
          form.current?.reset();
        })
        .catch(() => {
          toast.error(t("contact_toast_error"));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col gap-10 justify-center items-start xl:h-screen text-center pb-32 pt-60 xl:pt-0 xl:pb-32 transition-all"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h1
          className="flex items-center gap-2 text-2xl md:text-4xl font-bold mb-5"
          variants={itemVariants}
        >
          <p>{t('contact_title_contact')}</p>
          <p className="text-primary">{t('contact_title_me')}</p>
        </motion.h1>
        <motion.p className="text-sm md:text-lg mb-5 text-start text-primary" variants={itemVariants}>
          {t('contact_intro')}{' '}
          <label
            htmlFor="name"
            className="underline hover:text-primary/80 cursor-pointer"
          >
            {t('contact_cta')}
          </label>
        </motion.p>
      </div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 w-full"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row w-full gap-5">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-2 items-start pb-4 w-full"
          >
            <motion.label variants={itemVariants} htmlFor="name">
              {t('contact_label_name')}
            </motion.label>
            <motion.span variants={itemVariants} className="w-full">
              <Input
                type="text"
                id="name"
                name="name"
                className="border bg-transparent rounded p-5 w-full"
                placeholder={t('contact_placeholder_name')}
                required
              />
            </motion.span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-2 items-start pb-4 w-full"
          >
            <motion.label variants={itemVariants} htmlFor="mail">
              {t('contact_label_mail')}
            </motion.label>
            <motion.span variants={itemVariants} className="w-full">
              <Input
                type="email"
                id="mail"
                name="mail"
                className="border rounded p-5 w-full"
                placeholder={t('contact_placeholder_mail')}
                required
              />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 items-start pb-4 w-full"
        >
          <motion.label variants={itemVariants} htmlFor="message">
            {t('contact_label_message')}
          </motion.label>
          <motion.span variants={itemVariants} className="w-full">
            <Textarea
              id="message"
              name="message"
              className="border rounded p-5 w-full h-32"
              placeholder={t('contact_placeholder_message')}
              required
            />
          </motion.span>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-2 text-white rounded p-2 w-20"
          >
            {loading ? (
              <TbLoader3 className="size-5 animate-spin" />
            ) : (
              <>
                {t('contact_button_send')}
                <LuArrowRight />
              </>
            )}
          </Button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default Contact;