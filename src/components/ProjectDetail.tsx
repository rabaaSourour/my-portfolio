import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";
import Swal from "sweetalert2";
import TechStackIcon from "./TechStackIcon";

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

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("projects");
        if (stored) {
            const list: Project[] = JSON.parse(stored);
            const selected = list.find((p) => p.id === id);
            if (selected) setProject(selected);
        }
        window.scrollTo(0, 0);
    }, [id]);

    if (!project)
        return (
            <div className="text-center text-white p-8">
                Projet introuvable ou non chargé.
            </div>
        );

    const handleGithubClick = (githubLink: string) => {
        if (githubLink === "Private") {
            Swal.fire({
                icon: "info",
                title: "Code Source Privé",
                text: "Désolé, le code source de ce projet est privé.",
                confirmButtonText: "OK",
            });
            return false;
        }
        return true;
    };

    return (
        <div className="min-h-screen bg-[#030014] p-6 text-white">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10"
            >
                <ArrowLeft /> Retour
            </button>

            <h1 className="text-4xl font-bold mt-6">{project.Title}</h1>
            <p className="text-gray-300 mt-2">{project.Description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {project.TechStack.map((tech) => (
                    <TechStackIcon
                        key={tech}
                        iconUrl={`/icons/${tech.toLowerCase()}.png`}
                        language={tech}
                    />
                ))}
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Star /> Fonctionnalités
                </h2>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                    {project.Features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-4 mt-6">
                {project.Link && (
                    <a
                        href={project.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 rounded-xl text-white flex items-center gap-2"
                    >
                        Voir en ligne <ExternalLink className="w-4 h-4" />
                    </a>
                )}

                <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                    className="px-4 py-2 bg-gray-700 rounded-xl text-white flex items-center gap-2"
                >
                    Github <Github className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
