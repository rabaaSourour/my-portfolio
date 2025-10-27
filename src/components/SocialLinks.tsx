import React, { useEffect } from "react";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface SocialLink {
    name: string;
    displayName: string;
    subText: string;
    icon: React.ElementType;
    url: string;
    color: string;
    gradient: string;
    isPrimary?: boolean;
}

const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        displayName: "Connectons-nous",
        subText: "sur LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/sourour-aljane-9075b6296/",
        color: "#0A66C2",
        gradient: "from-[#0A66C2] to-[#0077B5]",
        isPrimary: true,
    },
    {
        name: "GitHub",
        displayName: "GitHub",
        subText: "",
        icon: Github,
        url: "https://github.com/rabaaSourour",
        color: "#ffffff",
        gradient: "from-[#333] to-[#24292e]",
    },
    {
        name: "Gmail",
        displayName: "Envoyer un email",
        subText: "par Gmail",
        icon: Mail,
        url: "mailto:tonemail@gmail.com",
        color: "#D14836",
        gradient: "from-[#D14836] to-[#A93226]",
    },
];

const SocialLinks: React.FC = () => {
    useEffect(() => {
        AOS.init({ offset: 10 });
    }, []);

    const primaryLink = socialLinks.find(link => link.isPrimary);
    const otherLinks = socialLinks.filter(link => !link.isPrimary);

    return (
        <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
            <h3
                className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
                data-aos="fade-down"
            >
                <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
                Contactez-moi
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {primaryLink && (
                    <a
                        href={primaryLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${primaryLink.gradient}`}
                        />
                        <div className="relative flex items-center justify-center">
                            <div
                                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                                style={{ backgroundColor: primaryLink.color }}
                            />
                            <div className="relative p-2 rounded-lg">
                                <primaryLink.icon
                                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                    style={{ color: primaryLink.color }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                {primaryLink.displayName}
                            </span>
                            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                {primaryLink.subText}
                            </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                    </a>
                )}

                {otherLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay={200 + index * 100}
                    >
                        <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`}
                        />
                        <div className="relative flex items-center justify-center">
                            <div
                                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                                style={{ backgroundColor: link.color }}
                            />
                            <div className="relative p-2 rounded-lg">
                                <link.icon
                                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                                    style={{ color: link.color }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                {link.displayName}
                            </span>
                            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                {link.subText}
                            </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
