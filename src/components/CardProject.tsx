import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

type CardProjectProps = {
    Img: string;
    Title: string;
    Description: string;
    ProjectLink?: string;
    id?: string | number;
};

const CardProject: React.FC<CardProjectProps> = ({ Img, Title, Description, ProjectLink, id }) => {
    const handleLiveDemo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!ProjectLink) {
            e.preventDefault();
            alert("Live demo link is not available");
        }
    };

    const handleDetails = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!id) {
            e.preventDefault();
            alert("Project details are not available");
        }
    };

    return (
        <div className="group relative w-full">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-500 hover:shadow-purple-500/40 hover:scale-105">
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-xl"></div>

                <div className="relative p-5 z-10 flex flex-col h-full justify-between">
                    
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500">
                        <img
                            src={Img}
                            alt={Title}
                            className="w-full h-48 md:h-52 lg:h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Info */}
                    <div className="mt-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-2 transition-all duration-500 group-hover:scale-105">
                                {Title}
                            </h3>
                            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3">{Description}</p>
                        </div>

                        {/* Buttons */}
                        <div className="pt-4 flex items-center justify-between">
                            {ProjectLink ? (
                                <a
                                    href={ProjectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLiveDemo}
                                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                                >
                                    <span className="text-sm">Live Demo</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : (
                                <span className="text-gray-500 text-sm">Demo Not Available</span>
                            )}

                            {id ? (
                                <Link
                                    to={`/project/${id}`}
                                    onClick={handleDetails}
                                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                >
                                    <span className="text-sm font-medium">Détails</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            ) : (
                                <span className="text-gray-500 text-sm">Details Not Available</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Border effect on hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-500 -z-50"></div>
            </div>
        </div>
    );
};

export default CardProject;
