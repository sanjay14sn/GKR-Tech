import React from 'react';
import teamImg from '../assets/about-team.png';

const About: React.FC = () => {
    return (
        <div className="pt-[80px]">
            <section className="py-20 bg-light-bg text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Know More</span>
                    <h1 className="text-[56px] font-bold mt-4 mb-4 text-secondary">About Our Company</h1>
                    <p className="text-xl max-w-[600px] mx-auto text-gray-600">We are a leading provider of premium IT solutions and SaaS products.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 animate-up">
                        <img src={teamImg} alt="Our Expert Team" className="w-full rounded-[20px] shadow-lg" />
                    </div>
                    <div className="flex-1 animate-up" style={{ animationDelay: '0.2s' }}>
                        <span className="badge">Our Mission</span>
                        <h2 className="text-[40px] font-bold mt-6 mb-6 text-secondary leading-tight">We help businesses grow with technology</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            GRK Solution provides cutting-edge technological solutions that empower
                            businesses to streamline their operations, enhance security, and scale
                            effectively in the digital age.
                        </p>
                        <ul className="mb-10 flex flex-col gap-4">
                            <li className="flex items-center gap-2.5 font-bold text-secondary">
                                <span className="text-primary text-xl">✓</span> Innovative Software Development
                            </li>
                            <li className="flex items-center gap-2.5 font-bold text-secondary">
                                <span className="text-primary text-xl">✓</span> Strategic IT Consulting
                            </li>
                            <li className="flex items-center gap-2.5 font-bold text-secondary">
                                <span className="text-primary text-xl">✓</span> Advanced Cloud Infrastructure
                            </li>
                            <li className="flex items-center gap-2.5 font-bold text-secondary">
                                <span className="text-primary text-xl">✓</span> 24/7 Dedicated Support
                            </li>
                        </ul>
                        <button className="btn btn-primary">Contact Our Team</button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-light-bg">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-12 rounded-[20px] text-center shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
                        <div className="text-[48px] mb-6">🚀</div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                        <p className="text-gray-600">To be the world's most trusted partner for business transformation through technology.</p>
                    </div>
                    <div className="bg-white p-12 rounded-[20px] text-center shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
                        <div className="text-[48px] mb-6">🎯</div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
                        <p className="text-gray-600">Empowering organizations with innovative tools that solve complex challenges and drive growth.</p>
                    </div>
                    <div className="bg-white p-12 rounded-[20px] text-center shadow-md hover:-translate-y-1 transition-transform hover:shadow-lg">
                        <div className="text-[48px] mb-6">💎</div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Values</h3>
                        <p className="text-gray-600">Integrity, Innovation, and Excellence are at the core of everything we do.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
