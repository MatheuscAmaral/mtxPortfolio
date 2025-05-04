export const handleScroll = (setActiveSection: (section: string) => void) => {
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