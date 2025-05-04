import { useTheme } from "./hooks";
import { useEffect, useState } from "react";
import { Container, Footer, Header, Scroll, Sidebar } from "./components";
import { handleScroll } from "./utils/functions";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  const locale = navigator.language || "pt";

  useEffect(() => {
    const langCode = locale.split("-")[0];
    if (["pt", "en", "es"].includes(langCode)) {
      i18n.changeLanguage(langCode);
    } else {
      i18n.changeLanguage("pt");
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme === "dark" ? "dark" : "light");

    const onScroll = () => handleScroll(setActiveSection);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [theme]);

  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        section={activeSection}
        setSection={setActiveSection}
      />
      <Container>
        <Sidebar section={activeSection} setSection={setActiveSection} />
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Scroll section={activeSection} />
        <Footer />
      </Container>
    </>
  );
};

export default App;
