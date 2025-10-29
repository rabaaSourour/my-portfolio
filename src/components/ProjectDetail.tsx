import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Code2,
    Star,
    Layers,
    Layout,
    Globe,
    Package,
    Cpu,
    Code,
} from "lucide-react";
import Swal from "sweetalert2";

// === Types ===
interface Project {
    id: string;
    Title: string;
    Description: string;
    TechStack: string[];
    Features: string[];
    Link: string;
    Github: string;
    Img: string;
}

interface TechBadgeProps {
    tech: string;
}

interface FeatureItemProps {
    feature: string;
}

interface ProjectStatsProps {
    project: Project;
}

// === Icônes technologies ===
const TECH_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    React: Globe,
    Tailwind: Layout,
    Express: Cpu,
    Python: Code,
    Javascript: Code,
    HTML: Code,
    CSS: Code,
    PHP: Code,
    MySQL: Code,
    Bootstrap: Layout,
    ThreeJS: Globe,
    "UX/UI Design": Package,
    default: Package,
};

// === Badge technologie ===
const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
    const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
    return (
        <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <div className="relative flex items-center gap-1.5 md:gap-2">
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
                    {tech}
                </span>
            </div>
        </div>
    );
};

// === Élément de fonctionnalité ===
const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
        <div className="relative mt-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
        </div>
        <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
            {feature}
        </span>
    </li>
);

// === Statistiques projet ===
const ProjectStats: React.FC<ProjectStatsProps> = ({ project }) => {
    const techStackCount = project.TechStack.length;
    const featuresCount = project.Features.length;

    return (
        <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-40 blur-2xl z-0" />

            <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
                <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
                    <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                    <div className="text-lg md:text-xl font-semibold text-blue-200">{techStackCount}</div>
                    <div className="text-[10px] md:text-xs text-gray-400">Technologies</div>
                </div>
            </div>

            <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
                <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
                    <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <div>
                    <div className="text-lg md:text-xl font-semibold text-purple-200">{featuresCount}</div>
                    <div className="text-[10px] md:text-xs text-gray-400">Fonctionnalités</div>
                </div>
            </div>
        </div>
    );
};

// === Alerte GitHub privé ===
const handleGithubClick = (githubLink: string): boolean => {
    if (githubLink === "Private") {
        Swal.fire({
            icon: "info",
            title: "Code source privé",
            text: "Le code source de ce projet est privé.",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
            background: "#0d0d1a",
            color: "#ffffff",
        });
        return false;
    }
    return true;
};

// === Données ===
const projects: Project[] = [
    {
        id: "1",
        Title: "Portfolio personnel",
        Description: "Site vitrine responsive pour présenter mes projets et compétences.",
        TechStack: ["HTML", "CSS", "Javascript"],
        Features: ["Présentation de projets", "Design responsive"],
        Link: "#",
        Github: "Private",
        Img: "/images/portfolio.png",
    },
    {
        id: "2",
        Title: "Zoo Arcadia",
        Description:
            "Site vitrine avec espace d’administration : gestion des utilisateurs, animaux, rapports vétérinaires et opérations quotidiennes.",
        TechStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
        Features: [
            "Gestion utilisateurs",
            "Gestion animaux",
            "Rapports vétérinaires",
            "Opérations quotidiennes",
        ],
        Link: "https://aljane.alwaysdata.net/home/show",
        Github: "Private",
        Img: "/images/zoo-arcadia.png",
    },
    {
        id: "6",
        Title: "Jeu de Mémoire",
        Description:
            "Jeu interactif où le joueur doit retrouver toutes les paires d’images. Expérience fluide et visuellement moderne.",
        TechStack: ["HTML", "CSS", "Javascript", "ThreeJS", "UX/UI Design"],
        Features: ["Jeu interactif", "Effets visuels", "Responsive", "Animations fluides"],
        Link: "https://rabaasourour.github.io/jeu-de-memoir/",
        Github: "https://github.com/rabaasourour/jeu-de-memoir",
        Img: "/images/jeu-memoire.png",
    },
];

// === Composant principal ===
const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const selected = projects.find((p) => p.id === id) || null;
        setProject(selected);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-transparent flex items-center justify-center text-white">
                <h2 className="text-2xl animate-pulse">Chargement du projet...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent px-[2%] sm:px-0 relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-10 animate-fadeIn">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Retour</span>
                </button>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Texte */}
                    <div className="space-y-8 animate-slideInLeft">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            {project.Title}
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">{project.Description}</p>

                        <ProjectStats project={project} />

                        <div className="flex gap-4 flex-wrap">
                            <a
                                href={project.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl hover:scale-105 transition-all duration-300"
                            >
                                <ExternalLink className="inline mr-2 w-4 h-4" />
                                Voir en ligne
                            </a>

                            <a
                                href={project.Github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                                className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl hover:scale-105 transition-all duration-300"
                            >
                                <Github className="inline mr-2 w-4 h-4" />
                                Github
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">Technologies utilisées</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.TechStack.map((tech, i) => (
                                    <TechBadge key={i} tech={tech} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image + fonctionnalités */}
                    <div className="space-y-6 animate-slideInRight">
                        <img
                            src={project.Img}
                            alt={project.Title}
                            className="rounded-2xl border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Star className="text-yellow-400" />
                                Fonctionnalités clés
                            </h3>
                            <ul className="space-y-2">
                                {project.Features.map((f, i) => (
                                    <FeatureItem key={i} feature={f} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out; }
        `}</style>
        </div>
    );
};

export default ProjectDetails;
