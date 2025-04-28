import { useTheme } from "./hooks";
import { useEffect, useState } from "react";
import { Container, Footer, Header, Scroll } from "./components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <Container>
      <p className="fixed left-5 top-5 font-semibold text-sm">MATHEUS <span className="text-primary">AMARAL</span></p>
      <Header section={activeSection} setSection={setActiveSection} />
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Scroll section={activeSection}/>
      <Footer />
    </Container>
  );
};

export default App;