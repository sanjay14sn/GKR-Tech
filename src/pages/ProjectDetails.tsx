import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectImg from '../assets/project-1.png';

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="pt-[80px] min-h-screen bg-gray-50/30">
            {/* Header Section */}
            <section className="py-24 bg-light-bg relative overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
                <div className="container relative z-10">

                    <span className="badge">Success Story</span>
                    <h1 className="text-4xl md:text-[64px] font-extrabold mt-6 mb-4 text-secondary leading-tight tracking-tight">
                        Cyber Security Dashboard
                    </h1>
                    <p className="text-gray-500 text-xl max-w-2xl font-medium">
                        Streamlining security operations with an intuitive, powerful dashboard for real-time threat monitoring and response.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container">
                    <div className="animate-up">
                        <img
                            src={projectImg}
                            alt="Project Detail"
                            className="w-full rounded-[20px] md:rounded-[40px] shadow-2xl mb-12 md:mb-24 object-cover aspect-video hover:shadow-[0_20px_50px_rgba(8,106,216,0.15)] transition-shadow duration-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.8fr,1fr] gap-20">
                        <div className="animate-up space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-secondary flex items-center gap-4">
                                    <span className="w-10 h-[2px] bg-primary" />
                                    Project Overview
                                </h2>
                                <p className="text-gray-600 mb-8 text-xl leading-[1.8] font-medium opacity-90">
                                    We developed a comprehensive security dashboard for a major fintech company.
                                    The goal was to provide real-time monitoring of all digital assets and
                                    automated threat detection, enabling the security team to respond to incidents faster than ever before.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
                                    <h3 className="text-2xl font-bold mb-4 text-secondary">The Challenge</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        The client needed a scalable solution that could handle millions of requests
                                        per second while maintaining low latency and high accuracy in threat detection systems.
                                    </p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors">
                                    <h3 className="text-2xl font-bold mb-4 text-secondary">Our Solution</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        We implemented a microservices architecture using Node.js and Kubernetes,
                                        integrated with cutting-edge AI for anomaly detection and real-time alerts.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h3 className="text-2xl font-bold mb-6 text-secondary">Key Features</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['Real-time incident tracking', 'AI-powered threat detection', 'Automated security reports', 'Interactive visualization', 'Multi-tenant support', 'Role-based access control'].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-600 font-medium pb-2 border-b border-gray-50">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <aside className="animate-up" style={{ animationDelay: '0.2s' }}>
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/50">
                                    <h4 className="text-2xl font-bold mb-8 text-secondary pb-6 border-b border-gray-100">Project Details</h4>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Client', value: 'TechNova Solutions' },
                                            { label: 'Category', value: 'Cyber Security' },
                                            { label: 'Date', value: 'October 2025' },
                                            { label: 'Duration', value: '6 Months' },
                                            { label: 'Location', value: 'San Francisco, CA' }
                                        ].map((item, index) => (
                                            <div key={index} className="flex flex-col gap-1">
                                                <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.label}</span>
                                                <span className="text-lg font-semibold text-secondary">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className="bg-secondary p-10 rounded-[32px] text-white">
                                    <h4 className="text-2xl font-bold mb-4">Have a similar project?</h4>
                                    <p className="text-gray-400 mb-8 font-medium">Let's discuss how we can help you build something amazing.</p>
                                    <button className="w-full py-4 bg-white text-secondary font-bold rounded-2xl hover:bg-primary hover:text-white transition-colors">
                                        Hire Us Now
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
