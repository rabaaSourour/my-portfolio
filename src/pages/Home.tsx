import React, { useState, useEffect, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🧩 Interfaces
interface TechStackProps {
    tech: string;
}
interface CTAButtonProps {
    href: string;
    text: string;
    icon: React.ElementType;
}
interface SocialLinkProps {
    icon: React.ElementType;
    link: string;
}

const MainTitle = memo(() => (
    <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Développeuse
                </span>
            </span>
            <br />
            <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Web & Mobile
                </span>
            </span>
        </h1>
    </div>
));

const TechStack: React.FC<TechStackProps> = memo(({ tech }) => (
    <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
        {tech}
    </div>
));

const CTAButton: React.FC<CTAButtonProps> = memo(({ href, text, icon: Icon }) => (
    <a href={href}>
        <button className="group relative w-[160px]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
            <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                    <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        {text}
                    </span>
                    <Icon
                        className={`w-4 h-4 text-gray-200 ${text === "Contact"
                                ? "group-hover:translate-x-1"
                                : "group-hover:rotate-45"
                            } transform transition-all duration-300 z-10`}
                    />
                </span>
            </div>
        </button>
    </a>
));

const SocialLink: React.FC<SocialLinkProps> = memo(({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="group relative p-3">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
        </button>
    </a>
));

// ⚙️ Constantes
const WORDS = ["Passionnée par les technologies modernes"];
const TECH_STACK = [
    "Front-end : HTML5, CSS3, JavaScript, Bootstrap, SASS, React, Tailwind, TypeScript",
    "Back-end : PHP, Node.js, MySQL, MongoDB",
    "Outils : Git/GitHub, Docker, Figma",
];
const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/rabaaSourour" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/sourour-aljane-9075b6296/" },
    { icon: Mail, link: "mailto:rabaasourour@gmail.com" },
];

const TYPING_SPEED = 40;

// 🌟 Composant principal
const Home: React.FC = () => {
    const [text, setText] = useState("");
    const [wordIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        AOS.init({ once: true, offset: 10 });
        window.addEventListener("resize", AOS.refresh);
        return () => window.removeEventListener("resize", AOS.refresh);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    // Typing effect
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= WORDS[wordIndex].length) {
                setText(WORDS[wordIndex].slice(0, index));
                index++;
            } else clearInterval(interval);
        }, TYPING_SPEED);
        return () => clearInterval(interval);
    }, [wordIndex]);

    const lottieOptions = {
        src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
        loop: true,
        autoplay: true,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice", progressiveLoad: true },
        style: { width: "100%", height: "100%" },
        className: `w-full h-full transition-all duration-500 ${isHovering
                ? "scale-[130%] sm:scale-[120%] md:scale-[115%] lg:scale-[110%] rotate-2"
                : "scale-[140%] sm:scale-[130%] md:scale-[125%] lg:scale-[120%]"
            }`,
    };

    return (
        <div
            className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]"
            id="Home"
        >
            <div
                className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
                    {/* Colonne gauche */}
                    <div
                        className="w-full lg:w-1/2 space-y-6 text-left"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <MainTitle />

                        <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                            <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                                {text}
                            </span>
                            <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                        </div>

                        <p
                            className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >
                            Je conçois et développe des sites web modernes, fonctionnels et adaptatifs,
                            en alliant créativité et performance.
                        </p>

                        <div
                            className="flex flex-wrap gap-3 justify-start"
                            data-aos="fade-up"
                            data-aos-delay="1200"
                        >
                            {TECH_STACK.map((tech, index) => (
                                <TechStack key={index} tech={tech} />
                            ))}
                        </div>

                        <div className="flex flex-row gap-3 mt-4" data-aos="fade-up" data-aos-delay="1400">
                            <CTAButton href="#Portfolio" text="Projets" icon={ExternalLink} />
                            <CTAButton href="#Contact" text="Contact" icon={Mail} />
                        </div>

                        <div className="flex gap-4 mt-4" data-aos="fade-up" data-aos-delay="1600">
                            {SOCIAL_LINKS.map((social, index) => (
                                <SocialLink key={index} {...social} />
                            ))}
                        </div>
                    </div>

                    {/* Colonne droite */}
                    <div
                        className="w-full lg:w-1/2 max-h-[350px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px] relative flex items-center justify-center mt-8 lg:mt-0 overflow-visible"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <DotLottieReact {...lottieOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Home);
