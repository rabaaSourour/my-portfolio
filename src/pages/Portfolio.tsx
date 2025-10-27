import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Boxes } from "lucide-react";

import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";

// 🔹 Types
type Project = {
    id: number;
    Img: string;
    Title: string;
    Description: string;
    ProjectLink?: string;
};

type Tech = {
    iconUrl: string;
    language: string;
};

// 🔹 ToggleButton
type ToggleButtonProps = {
    onClick: () => void;
    isShowingMore: boolean;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, isShowingMore }) => (
    <button
        onClick={onClick}
        className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
    >
        <span className="relative z-10 flex items-center gap-2">
            {isShowingMore ? "Voir moins" : "Voir plus"}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
            >
                <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
            </svg>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
    </button>
);

// 🔹 TabPanel
type TabPanelProps = {
    children?: React.ReactNode;
    value: number;
    index: number;
};

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box sx={{ p: { xs: 1, sm: 3 } }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return { id: `full-width-tab-${index}`, "aria-controls": `full-width-tabpanel-${index}` };
}

// 🔹 Tes vrais projets ici
const projects: Project[] = [
    {
        id: 1,
        Img: "/projects/portfolio.png",
        Title: "Portfolio personnel",
        Description: "Site vitrine responsive pour présenter mes projets et mes compétences.",
        ProjectLink: "#",
    },
    {
        id: 2,
        Img: "/projects/zoo-arcadia.png",
        Title: "Zoo Arcadia",
        Description: "Site vitrine avec espace d’administration : gestion des utilisateurs, animaux et rapports vétérinaires.",
        ProjectLink: "https://aljane.alwaysdata.net/home/show",
    },
    {
        id: 3,
        Img: "/projects/osez-noel.png",
        Title: "Osez Noël",
        Description: "Application web de type calendrier de l’Avent interactif avec surprises et personnalisation.",
    },
        {
        id: 4,
        Img: "/projects/jeu-memoire.png",
        Title: "Jeu de mémoire",
        Description:
            "Jeu interactif avec rendu 3D via Three.js. L’objectif : retrouver toutes les paires d’images avec effets visuels modernes.",
        ProjectLink: "https://rabaasourour.github.io/jeu-de-memoir/",
    },
    {
        id: 5,
        Img: "/projects/okaz.png",
        Title: "Okaz",
        Description: "Plateforme d’achat et de vente en ligne avec gestion des annonces, catégories et utilisateurs.",
    },
    {
        id: 6,
        Img: "/projects/quiz.png",
        Title: "Jeu de Quiz",
        Description: "Application de quiz avec niveaux de difficulté, scores et interface animée.",
    },

];

// 🔹 Tech Stack
const techStacks: Tech[] = [
    { iconUrl: "/html.svg", language: "HTML" },
    { iconUrl: "/css.svg", language: "CSS" },
    { iconUrl: "/javascript.svg", language: "JavaScript" },
    { iconUrl: "/Sass.svg", language: "Sass" },
    { iconUrl: "/tailwind.svg", language: "Tailwind CSS" },
    { iconUrl: "/bootstrap.svg", language: "Bootstrap" },
    { iconUrl: "/reactjs.svg", language: "ReactJS" },
    { iconUrl: "/Threejs.svg", language: "Three.js" },
    { iconUrl: "/nodejs.svg", language: "Node.js" },
    { iconUrl: "/PHP.svg", language: "PHP" },
    { iconUrl: "/mysql.svg", language: "MySQL" },
    { iconUrl: "/mongodb.svg", language: "MongoDb" },
    { iconUrl: "/docker.svg", language: "Docker" },
    { iconUrl: "/figma.svg", language: "Figma" },
];

export default function PortfolioTabs() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const isMobile = window.innerWidth < 768;
    const initialItems = isMobile ? 3 : 4;

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => setValue(newValue);
    const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

    return (
        <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portfolio">
            <div className="text-center pb-10" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    Mes Projets & Compétences
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
                    Découvrez mes réalisations concrètes et les technologies que je maîtrise à travers différents projets web.
                </p>
            </div>

            <Box sx={{ width: "100%" }}>
                <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        textColor="secondary"
                        indicatorColor="secondary"
                        sx={{
                            "& .MuiTab-root": {
                                textTransform: "none",
                                fontWeight: 600,
                                color: "#94a3b8",
                                "&.Mui-selected": { color: "#fff" },
                            },
                        }}
                    >
                        <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projets" {...a11yProps(0)} />
                        <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Stack Technique" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>

                <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={(index: number) => setValue(index)}>
                    {/* Projets */}
                    <TabPanel value={value} index={0}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                            {displayedProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                                >
                                    <CardProject
                                        Img={project.Img}
                                        Title={project.Title}
                                        Description={project.Description}
                                        ProjectLink={project.ProjectLink}
                                        id={project.id}
                                    />
                                </div>
                            ))}
                        </div>
                        {projects.length > initialItems && (
                            <div className="mt-6 flex justify-center">
                                <ToggleButton onClick={() => setShowAllProjects(!showAllProjects)} isShowingMore={showAllProjects} />
                            </div>
                        )}
                    </TabPanel>

                    {/* Stack technique */}
                    <TabPanel value={value} index={1}>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-center items-center">
                            {techStacks.map((tech, index) => (
                                <div
                                    key={index}
                                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                                >
                                    <TechStackIcon iconUrl={tech.iconUrl} language={tech.language} />
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}
