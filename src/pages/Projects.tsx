import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';

const Projects: React.FC = () => {

    return (
        <div className="pt-[80px]">
            <section className="py-20 bg-light-bg text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Portfolio</span>
                    <h1 className="text-4xl md:text-[56px] font-bold mt-4 mb-4 text-secondary">Our Case Studies</h1>
                    <p className="text-xl max-w-[600px] mx-auto text-gray-600">Explore how we've helped businesses achieve their goals through technology.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map(project => (
                        <div key={project.id} className="group relative bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all animate-up">
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <img src={project.img} alt={`${project.title} - ${project.category} | GKR Technology Solutions`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={`/projects/${project.id}`} className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                            <div className="p-8 border border-gray-100 rounded-b-[20px]">
                                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
