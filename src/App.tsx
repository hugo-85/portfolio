import { useEffect } from "react";
import "./App.css";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import PersonalInfo from "./components/personal_info/PersonalInfo";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
// Supports weights 100-900
// import "@fontsource-variable/league-spartan";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("header nav a");

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("data-id") == entry.target.id) {
              item.classList.add("project-in-view");
            } else {
              item.classList.remove("project-in-view");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    document.onvisibilitychange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <main>
      <Navbar />
      <PersonalInfo />
      <Experience />
      <Projects />
      <About />
    </main>
  );
}

export default App;
