import React, { useState } from 'react';
import { ArrowRight, Filter, ExternalLink, Shield, Cloud, Server, Cpu, Building2, Globe2, Briefcase } from 'lucide-react';

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Cybersecurity', 'Cloud Solutions', 'Infrastructure', 'GCC Services'];

    const projects = [
        {
            id: 1,
            title: 'Global SOC Implementation',
            category: 'Cybersecurity',
            desc: 'Architecture and deployment of a 24/7 Security Operations Center for a multi-national banking client.',
            img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            tags: ['SIEM', 'Threat Intel', 'Compliance']
        },
        {
            id: 2,
            title: 'Multi-Cloud Migration',
            category: 'Cloud Solutions',
            desc: 'Seamless transition of critical legacy workloads to a hybrid AWS/Azure environment with zero downtime.',
            img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
            tags: ['AWS', 'Azure', 'Kubernetes']
        },
        {
            id: 3,
            title: 'Data Center Consolidation',
            category: 'Infrastructure',
            desc: 'Consolidating regional data centers into a centralized, high-efficiency private cloud infrastructure.',
            img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
            tags: ['Virtualization', 'Scalability', 'Green IT']
        },
        {
            id: 4,
            title: 'GCC Strategic Setup',
            category: 'GCC Services',
            desc: 'Establishing a Global Capability Center for a Fortune 500 company, including talent acquisition and ops.',
            img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
            tags: ['Operations', 'Talent', 'Strategy']
        },
        {
            id: 5,
            title: 'Enterprise Risk Assessment',
            category: 'Cybersecurity',
            desc: 'Comprehensive security audit and vulnerability management for a global manufacturing conglomerate.',
            img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
            tags: ['VAPT', 'ISO 27001', 'Risk']
        },
        {
            id: 6,
            title: 'Network Modernization',
            category: 'Infrastructure',
            desc: 'Upgrading legacy networking hardware to SD-WAN for 50+ global locations for enhanced connectivity.',
            img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
            tags: ['SD-WAN', 'Connectivity', 'Cisco']
        },
    ];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const sectors = [
        { name: 'BFSI', icon: <Building2 className="w-8 h-8" /> },
        { name: 'Healthcare', icon: <Building2 className="w-8 h-8" /> },
        { name: 'Government', icon: <Globe2 className="w-8 h-8" /> },
        { name: 'Energy', icon: <Cpu className="w-8 h-8" /> },
        { name: 'Manufacturing', icon: <Briefcase className="w-8 h-8" /> },
        { name: 'Logistics', icon: <Server className="w-8 h-8" /> },
    ];

    return (
        <div className="pt-[100px] bg-white min-h-screen">
            {/* HERO SECTION - MNC STYLE */}
            <section className="relative py-24 bg-[#0e2a47] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
                <div className="max-w-[1170px] mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-blue-500 font-bold tracking-[4px] text-sm uppercase block mb-6">GLOBAL PORTFOLIO</span>
                        <h1 className="text-[42px] md:text-[64px] font-extrabold text-white leading-[1.1] mb-8">
                            Transforming businesses through <span className="text-blue-500">strategic innovation.</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-12">
                            Explore our cross-industry expertise and the measurable impact we've delivered for our global partners through precision technology solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* FILTER BAR - TAP ROUTING FEEL */}
            <section className="sticky top-[75px] z-50 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-[1170px] mx-auto px-6 overflow-x-auto">
                    <div className="flex items-center gap-2 md:gap-8 py-4 whitespace-nowrap scrollbar-hide">
                        <div className="flex items-center gap-2 text-gray-400 mr-4 hidden md:flex">
                            <Filter size={18} />
                            <span className="text-sm font-bold uppercase tracking-wider">Filter By:</span>
                        </div>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                                    : 'text-[#0e2a47] hover:bg-gray-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a47]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                        <a
                                            href={`#/projects/${project.id}`}
                                            className="w-full py-4 bg-white text-[#0e2a47] rounded-xl font-bold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2"
                                        >
                                            View Project Case Study <ExternalLink size={18} />
                                        </a>
                                    </div>
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-[#0e2a47] mb-4 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[11px] font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-md">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No projects found in this category. Stay tuned for updates.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTORS SERVED - MNC TRUST FACTOR */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-[3px] text-sm uppercase block mb-4">MNC EXPERTISE</span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0e2a47] mb-6">Global Sectors We Empower</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We bring deep domain knowledge and specialized technology solutions across a diverse range of global industries.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {sectors.map((sector) => (
                            <div key={sector.name} className="flex flex-col items-center p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                                <div className="mb-4 text-gray-400 group-hover:text-blue-600 transition-colors">
                                    {sector.icon}
                                </div>
                                <span className="font-bold text-[#0e2a47] text-sm">{sector.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-blue-600">
                <div className="max-w-[1170px] mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your global transformation?</h2>
                    <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">Join the ranks of leading enterprises that trust GKR Technology for their critical infrastructure and security needs.</p>
                    <a
                        href="#/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0e2a47] rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Schedule a Strategic Consultation <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Projects;
