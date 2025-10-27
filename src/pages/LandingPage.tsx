import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "./WelcomeScreen";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import AnimatedBackground from "../components/Background";

interface LandingPageProps {
    showWelcome: boolean;
    setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line no-empty-pattern
const LandingPage: React.FC<LandingPageProps> = ({ }) => {
    const [hasStarted, setHasStarted] = useState(false);/*  */

    return (
        <div className="relative min-h-screen bg-[#030014] overflow-hidden text-white">
            <AnimatePresence mode="wait">
                {!hasStarted ? (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                    >
                        <WelcomeScreen onLoadingComplete={() => setHasStarted(true)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Background animé derrière tout */}
                        <AnimatedBackground />

                        {/* Navbar et sections */}
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

                        {/* Footer simple */}
                        <footer>
                            <center>
                                <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
                                <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                                    © 2025{" "}
                                    <a href="https://flowbite.com/" className="hover:underline">
                                        ALJANE Sourour
                                    </a>
                                    . All Rights Reserved.
                                </span>
                            </center>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default LandingPage;
