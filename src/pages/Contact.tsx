import { useEffect } from "react";
import { Mail, Github, Linkedin, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-[5%] sm:px-[10%] py-20 bg-transparent relative overflow-hidden"
        >
            {/* Effet lumineux d’arrière-plan */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a1b3a]/50 to-[#030014] blur-3xl opacity-40"></div>

            {/* Titre principal */}
            <div
                className="text-center mb-16"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                    Restons en contact 💬
                </h2>
                <p
                    className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Vous souhaitez collaborer, poser une question ou simplement dire bonjour ?  
                    <br /> Voici comment me joindre 👇
                </p>
            </div>

            {/* Carte principale */}
            <div
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-10 w-full max-w-2xl text-center transition-all duration-500 hover:shadow-[#6366f1]/20 hover:scale-[1.01]"
            >
                <div className="flex flex-col items-center space-y-6">
                    {/* Email */}
                    <a
                        href="mailto:rabaasourour@gmail.com"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#6366f1]/20 hover:to-[#a855f7]/20 transition-all duration-300 text-white/90 hover:scale-105 border border-white/10"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <Mail className="w-6 h-6 text-[#6366f1]" />
                        <span className="font-medium">Mail</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/sourour-aljane-9075b6296/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#0A66C2]/20 hover:to-[#6366f1]/20 transition-all duration-300 text-white/90 hover:scale-105 border border-white/10"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                        <span className="font-medium">Linkedin</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/rabaaSourour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#6e5494]/20 hover:to-[#a855f7]/20 transition-all duration-300 text-white/90 hover:scale-105 border border-white/10"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <Github className="w-6 h-6 text-white" />
                        <span className="font-medium">Github</span>
                    </a>
                </div>

                {/* Message bas de carte */}
                <p
                    className="text-gray-400 text-sm mt-10 flex items-center justify-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Sparkles className="w-4 h-4 text-[#a855f7]" />
                    Je réponds toujours avec plaisir 💜
                </p>
            </div>
        </section>
    );
};

export default ContactPage;
