import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface WelcomeScreenProps {
    onLoadingComplete?: () => void;
}

const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else clearInterval(timer);
        }, 120); // plus rapide pour effet visible

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const BackgroundEffect: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
    </div>
);

const IconButton: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
    <div className="relative group hover:scale-110 transition-transform duration-300">
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
        <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
        </div>
    </div>
);

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: false });
        AOS.refresh();

        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => onLoadingComplete?.(), 1000);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        exit: { opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.8 } },
    };

    const childVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { y: -20, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 bg-[#030014] flex items-center justify-center px-4"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                >
                    <BackgroundEffect />

                    <div className="w-full max-w-4xl mx-auto text-center">
                        {/* Icons */}
                        <motion.div className="flex justify-center gap-4 mb-8" variants={childVariants}>
                            {[Code2, User, Github].map((Icon, index) => (
                                <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                                    <IconButton Icon={Icon} />
                                </div>
                            ))}
                        </motion.div>

                        {/* Welcome Text */}
                        <motion.div className="mb-8" variants={childVariants}>
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-4">
                                <div className="space-x-2">
                                    <span data-aos="fade-right" data-aos-delay="200" className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">Welcome</span>
                                    <span data-aos="fade-right" data-aos-delay="400" className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">To</span>
                                    <span data-aos="fade-right" data-aos-delay="600" className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">My</span>
                                </div>
                                <div className="space-x-2">
                                    <span data-aos="fade-up" data-aos-delay="800" className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                                </div>
                            </h1>
                        </motion.div>

                        {/* Website Link */}
                        <motion.div className="mt-4" variants={childVariants}>
                            <a
                                href="https://rabaasourour.github.io/portfolio/"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                                <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                                    <TypewriterEffect text="ALJANE Sourour" />
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeScreen;
