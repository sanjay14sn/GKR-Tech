import React, { useState } from 'react';

// Assuming these are your asset paths
const teamImg1 = 'https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/01/7.jpg';
import teamImg2 from '../assets/about-team.png';
import statsImg from '../assets/stats-team.png';

const About: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What services does GKR Technology Solutions provide?",
            answer:
                "GKR Technology Solutions offers cybersecurity, IT infrastructure, cloud solutions, network setup, and managed IT services to help businesses build secure and scalable technology environments."
        },
        {
            question: "Do you provide cybersecurity services?",
            answer:
                "Yes. We provide comprehensive cybersecurity services including risk assessments, security monitoring, threat protection, and compliance support to safeguard your business systems and data."
        },
        {
            question: "Can you help with cloud and infrastructure setup?",
            answer:
                "Our team helps businesses design, implement, and manage cloud platforms, servers, and network infrastructure to ensure reliable and scalable IT operations."
        },
        {
            question: "Do you offer ongoing IT support?",
            answer:
                "Yes. We provide continuous monitoring, maintenance, and technical support to ensure your systems remain secure, optimized, and running smoothly."
        }
    ];

    const processSteps = [
        {
            id: "01",
            title: "Choose a Service",
            desc: "Explore our range of cybersecurity, cloud, and IT infrastructure services and choose the solution that best fits your business needs.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: "02",
            title: "Request a Meeting",
            desc: "Connect with our experts to discuss your requirements and understand the best technology strategy for your organization.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: "03",
            title: "Receive Custom Plan",
            desc: "Our team creates a customized technology and security plan tailored to your business infrastructure and future goals.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            id: "04",
            title: "Let's Make it Happen",
            desc: "We implement, monitor, and manage your systems to ensure secure, reliable, and scalable IT operations.",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )
        }
    ];

    return (
        <div className="pt-[80px]">

            {/* --- Section 1: Hero --- */}
            <section
                className="relative h-[500px] flex items-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${teamImg1})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
                    <h1 className="text-5xl font-bold text-white">About Us</h1>

                    <nav className="bg-black/60 px-6 py-3 flex items-center gap-3 text-white rounded-sm">
                        <span className="flex items-center gap-2 text-sm">
                            <i className="fas fa-home"></i> HOME
                        </span>
                        <span className="text-white/50">○</span>
                        <span className="text-sm border-b border-white">PAGES</span>
                    </nav>
                </div>
            </section>

            {/* --- Section 2 --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">

                    {/* Images */}
                    <div className="flex-1 relative mb-20 lg:mb-0">
                        <div className="relative z-10 w-full md:w-[80%]">
                            <img src={teamImg1} className="rounded-xl shadow-xl w-full" />
                        </div>

                        <div className="absolute -bottom-10 right-0 w-[60%] md:w-[50%] z-20">
                            <img src={teamImg2} className="rounded-xl shadow-2xl border-4 md:border-8 border-white w-full" />
                        </div>


                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full lg:w-auto mt-10 md:mt-0">
                        <h2 className="text-3xl md:text-[42px] font-bold text-[#002d5b] leading-tight mb-6">
                            Building Secure Digital Foundations
                        </h2>

                        <p className="text-gray-500 mb-8 leading-relaxed">
                            GKR Technology Solutions provides end-to-end cybersecurity, cloud, and IT infrastructure services to help organizations operate securely and efficiently.
                            <br /><br />
                            We support businesses through every stage of their technology journey — from strategy and implementation to ongoing management and protection.
                        </p>

                        {/* FAQ Accordion */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-100 pb-4 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center py-4">
                                        <span className="font-bold text-[#002d5b]">
                                            {faq.question}
                                        </span>
                                        <span className="text-gray-400 text-xl">
                                            {activeIndex === index ? "⌄" : "›"}
                                        </span>
                                    </div>

                                    {activeIndex === index && (
                                        <p className="text-gray-500 text-sm">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* --- Process Section --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">

                    <div className="text-center mb-16 px-4">
                        <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">PROCESS</h4>
                        <h2 className="text-3xl md:text-[42px] font-bold text-[#002d5b] mb-4">How it works</h2>
                        <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="group p-8 border border-gray-100 hover:border-blue-600 rounded-[10px] relative transition-all duration-300 bg-white"
                            >
                                <div className="absolute top-2 right-4 text-[80px] font-bold text-gray-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none z-0">
                                    {step.id}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6 bg-white inline-block">
                                        {step.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#002d5b] mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-500 text-[15px] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* --- Testimonial Section --- */}
            <section className="py-24 bg-[#f8faff]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 px-4">
                        <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">TESTIMONIALS</h4>
                        <h2 className="text-3xl md:text-[42px] font-bold text-[#002d5b] mb-4">Trusted by enterprise leaders</h2>
                        <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 relative">
                            <div className="text-blue-600 mb-6">
                                <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">
                                "They didn't just fix our firewall; they transformed our entire security posture. The fact that they handle both strategy and daily operations means we finally have a partner who understands the full picture."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">CTO</div>
                                <div>
                                    <h5 className="font-bold text-[#002d5b]">Regional Bank</h5>
                                    <span className="text-sm text-gray-400">Chief Technology Officer</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 relative">
                            <div className="text-blue-600 mb-6">
                                <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">
                                "When we needed to migrate government workloads to GCC cloud, they were the only partner with both the technical depth and regulatory knowledge to get it done."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">IT</div>
                                <div>
                                    <h5 className="font-bold text-[#002d5b]">Government Entity</h5>
                                    <span className="text-sm text-gray-400">IT Director</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;