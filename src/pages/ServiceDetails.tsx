import React from 'react';
import { useParams } from 'react-router-dom';
import itImg from '../assets/service-it.png';

const ServiceDetails: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="pt-[80px]">
            <section className="py-20 bg-light-bg">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Service Details</span>
                    <h1 className="text-[56px] font-bold mt-4 mb-0 text-secondary">IT Management Solution</h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
                    <div className="flex-[2] animate-up">
                        <img src={itImg} alt="Service Detail" className="w-full rounded-[30px] shadow-xl mb-12 object-cover aspect-video" />
                        <h2 className="text-3xl font-bold mb-6 text-secondary">Overview</h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Our IT Management solutions are designed to help you maintain a
                            competitive edge by streamlining your technology infrastructure.
                            We handle everything from server management to network security.
                        </p>
                        <h3 className="text-2xl font-bold mb-6 text-secondary">Service Benefits</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            <li className="flex items-center gap-3 font-bold text-secondary bg-light-bg p-4 rounded-xl border border-gray-100">
                                <span className="text-primary text-xl">✓</span> Reduced Operational Costs
                            </li>
                            <li className="flex items-center gap-3 font-bold text-secondary bg-light-bg p-4 rounded-xl border border-gray-100">
                                <span className="text-primary text-xl">✓</span> Enhanced System Security
                            </li>
                            <li className="flex items-center gap-3 font-bold text-secondary bg-light-bg p-4 rounded-xl border border-gray-100">
                                <span className="text-primary text-xl">✓</span> 99.9% Uptime Guarantee
                            </li>
                            <li className="flex items-center gap-3 font-bold text-secondary bg-light-bg p-4 rounded-xl border border-gray-100">
                                <span className="text-primary text-xl">✓</span> Expert Technical Support
                            </li>
                        </ul>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether you're a startup or an enterprise, our team of experts
                            will work with you to implement a strategy that fits your unique
                            needs and budget.
                        </p>
                    </div>

                    <aside className="flex-1 animate-up space-y-8" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white p-10 rounded-[20px] shadow-lg border border-gray-100 text-center">
                            <h4 className="text-2xl font-bold mb-4 text-secondary">Direct Contact</h4>
                            <p className="text-gray-500 mb-8">Have questions? Reach out to us directly.</p>
                            <a href="tel:+123456789" className="text-primary text-2xl font-extrabold hover:text-secondary transition-colors block">📞 +1 234 567 890</a>
                        </div>
                        <div className="bg-primary p-10 rounded-[20px] shadow-lg text-center text-white">
                            <h4 className="text-2xl font-bold mb-6">Get a Quote</h4>
                            <p className="mb-8 opacity-80">Ready to start your next project with us? Get a free consultation today.</p>
                            <button className="w-full py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-primary transition-all">Inquiry Now</button>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;
