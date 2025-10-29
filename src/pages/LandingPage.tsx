import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "./WelcomeScreen";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import AnimatedBackground from "../components/Background";

const LandingPage: React.FC = () => {
  // === Affiche WelcomeScreen seulement si jamais vu cette session ===
  const [showWelcome, setShowWelcome] = useState(() => {
    return sessionStorage.getItem("hasSeenWelcome") !== "true";
  });

  // === Dernière section visitée avant projet ===
  const [lastSection, setLastSection] = useState(() => {
    return sessionStorage.getItem("lastSection") || "Home";
  });

  // === Quand WelcomeScreen se termine ===
  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    sessionStorage.setItem("hasSeenWelcome", "true");
  };

  // === Stocker la section visible avant de naviguer vers un projet ===
  useEffect(() => {
    const sections = ["Home", "Portfolio", "Contact"];
    const handleScroll = () => {
      let current = "Home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = id;
          }
        }
      });
      setLastSection(current);
      sessionStorage.setItem("lastSection", current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Scroll automatique vers la dernière section connue ===
  useEffect(() => {
    if (!showWelcome && lastSection) {
      const element = document.getElementById(lastSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [showWelcome, lastSection]);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
          >
            <WelcomeScreen onLoadingComplete={handleWelcomeComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedBackground />
            <Navbar />
            <section id="Home">
              <Home />
            </section>
            <section id="Portfolio">
              <Portfolio />
            </section>
            <section id="Contact">
              <Contact />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
