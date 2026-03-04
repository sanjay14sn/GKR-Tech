import React, { useState } from 'react';
import heroImg from '../assets/hero.png';

const faqs = [
    {
        question: "What services does GKR Technology Solutions provide?",
        answer: "GKR Technology Solutions offers cybersecurity, IT infrastructure, cloud solutions, network setup, and managed IT services to help businesses build secure and scalable technology environments."
    },
    {
        question: "Do you provide cybersecurity services?",
        answer: "Yes. We provide comprehensive cybersecurity services including risk assessments, security monitoring, threat protection, and compliance support to safeguard your business systems and data."
    },
    {
        question: "Can you help with cloud and infrastructure setup?",
        answer: "Our team helps businesses design, implement, and manage cloud platforms, servers, and network infrastructure to ensure reliable and scalable IT operations."
    },
    {
        question: "Do you offer ongoing IT support?",
        answer: "Yes. We provide continuous monitoring, maintenance, and technical support to ensure your systems remain secure, optimized, and running smoothly."
    }
]

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="pt-[100px] font-sans">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="py-[50px] md:py-[100px] bg-white overflow-hidden">
                <div className="max-w-[1170px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="flex-1 z-10">
                        <h1 className="text-[28px] sm:text-[36px] md:text-[52px] font-bold leading-[1.15] text-[#0e2a47] mb-[15px] md:mb-[25px] text-center md:text-left">
                            GKR Technology Solutions <br className="hidden md:block" />
                            <span className="text-blue-600">Your End-to-End Technology Partner</span>
                        </h1>

                        <p className="text-sm md:text-base leading-[24px] md:leading-[28px] text-gray-500 mb-[25px] md:mb-[35px] max-w-[450px] text-center md:text-left mx-auto md:mx-0">
                            We deliver end-to-end cybersecurity, IT infrastructure, datacenter, and GCC expertise under one roof. No handoffs. No gaps.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-[20px]">
                            <div className="flex items-center gap-[15px]">
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute inline-flex h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
                                    <button className="relative w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-full bg-blue-600 text-white flex items-center justify-center border-none cursor-pointer shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:scale-105 transition-transform z-10">
                                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                                        </svg>
                                    </button>
                                </div>
                                <span className="font-bold text-xs md:text-sm tracking-widest text-[#0e2a47] uppercase whitespace-nowrap">
                                    WATCH PROMO
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* FIXED: Right Image - Bleeds to the edge and scaled up */}
                    <div className="flex-1 relative w-full lg:w-[50vw] lg:min-w-[600px] lg:-mr-[15vw] mt-12 md:mt-0">
                        <img
                            src={heroImg}
                            alt="SaaS Management Interface"
                            className="w-full h-auto object-contain drop-shadow-2xl scale-100 lg:scale-125 lg:origin-left"
                        />
                    </div>

                </div>
            </section>
            {/* What We Do Section */}
            <section className="py-24 bg-[#f7faff]">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-[3px] text-sm uppercase block mb-4">WHAT WE DO</span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0e2a47] mb-6">We analysis & monitoring <br />your application</h2>
                        <div className="w-[40px] h-[3px] bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {[
                            { title: "Manage customers", img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/1-2.png" },
                            { title: "Live Messaging", img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/3-2.png" },
                            { title: "Ticket Manage", img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/2-3.png" },
                            { title: "Email Workflow", img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/4-1.png" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-xl flex flex-col sm:flex-row gap-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition-all duration-300">
                                <div className="shrink-0 w-[60px]">
                                    <img src={item.img} alt={item.title} className="w-full" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0e2a47] mb-4">{item.title}</h3>
                                    <p className="text-[15px] leading-[26px] text-gray-500">
                                        Prevailed mr tolerably discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-[1170px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Image */}
                    <div className="flex-1 relative">
                        <div className="relative z-10">
                            <img
                                src="https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/11.png"
                                alt="Technology Infrastructure"
                                className="w-full"
                            />
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0e2a47] rounded-full opacity-5 -z-0"></div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex-1 relative">

                        {/* DOT PATTERN */}
                        <div
                            className="absolute top-0 right-0 w-[80%] h-full -z-10 opacity-60"
                            style={{
                                backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)',
                                backgroundSize: '30px 30px'
                            }}
                        ></div>

                        {/* Content */}
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0e2a47] leading-tight mb-6">
                            Secure Infrastructure for Modern Businesses
                        </h2>

                        <p className="text-gray-500 mb-10 leading-relaxed">
                            GKR Technology Solutions helps organizations build secure, scalable, and reliable
                            technology environments. From cybersecurity protection to cloud infrastructure and
                            managed IT services, we deliver solutions that keep your business connected,
                            protected, and ready for the future.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                            {/* Feature 1 */}
                            <div>
                                <div className="text-blue-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 3v18h18" />
                                        <path d="M18 17V9" />
                                        <path d="M13 17V5" />
                                        <path d="M8 17v-3" />
                                    </svg>
                                </div>

                                <h4 className="text-lg font-bold text-[#0e2a47] mb-2">
                                    Infrastructure Monitoring
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Monitor networks, servers, and systems to ensure optimal performance,
                                    security, and reliability across your IT infrastructure.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div>
                                <div className="text-blue-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>

                                <h4 className="text-lg font-bold text-[#0e2a47] mb-2">
                                    24/7 Security Monitoring
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Our team continuously monitors your systems to detect threats early,
                                    respond quickly, and maintain a secure digital environment.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Asked Questions Section */}
            <section className="py-24 bg-[#fcfdff]">
                <div className="max-w-[1170px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-20 items-start">

                    {/* Left Side */}
                    <div>
                        <span className="flex items-center gap-3 text-blue-600 text-sm font-bold tracking-[3px] uppercase mb-6">
                            <span className="w-[30px] h-[2px] bg-blue-600"></span> ASKED QUESTIONS
                        </span>

                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0e2a47] mb-10 leading-tight">
                            Frequently asked questions about our services
                        </h2>

                        <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-sm shadow-lg hover:bg-blue-700 transition-colors">
                            Contact Our Team
                        </button>
                    </div>


                    {/* Right Side FAQ */}
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-50">

                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(i)}
                                >
                                    <span className="font-bold text-lg text-[#0e2a47]">
                                        {faq.question}
                                    </span>

                                    <span className="text-gray-400 text-xs">
                                        {activeIndex === i ? '▲' : '▼'}
                                    </span>
                                </div>

                                {activeIndex === i && (
                                    <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* Stats Section with Background Image */}
            {/* Stats Section with Parallax Background */}
            <section className="py-12 bg-white">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div
                        className="relative overflow-hidden rounded-[10px] py-[80px] md:py-[100px] px-4 shadow-xl bg-fixed bg-center bg-cover"
                        style={{
                            backgroundImage: `url('https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/16.jpg')`
                        }}
                    >
                        {/* Blue Overlay - Set to 85% opacity to ensure pure white text is legible */}
                        <div className="absolute inset-0 bg-[#2d62c2]/85"></div>

                        {/* Stats Content */}
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 text-white">
                            {[
                                { num: "687", label: "Happy Clients" },
                                { num: "2348", label: "Finished Projects" },
                                { num: "450", label: "Skilled Experts" },
                                { num: "1200", label: "Media Posts" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <h3 className="text-[36px] md:text-[48px] font-bold mb-1 leading-none text-white">
                                        {stat.num}+
                                    </h3>
                                    <p className="text-[13px] md:text-[15px] font-semibold uppercase tracking-wider text-white opacity-100">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Dashboard Screenshot Header */}
            <section className="py-20 text-center">
                <span className="text-blue-600 font-bold tracking-[2px] text-xs uppercase block mb-4">DASHBOARD SCREENSHOT</span>
                <h2 className="text-[32px] md:text-[36px] font-bold text-[#0e2a47]">
                    Let's See Awesome Software <br /> UI Design Screenshot
                </h2>
                <div className="w-[40px] h-[3px] bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </section>

            {/* Expert Team Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1170px] mx-auto px-6 text-center">
                    <span className="text-blue-600 font-bold tracking-[3px] text-xs uppercase block mb-4">
                        EXPERT TEAM
                    </span>

                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#0e2a47] mb-12">
                        Meet Our Leadership
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sporia Deko",
                                role: "Marketing",
                                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                            },
                            {
                                name: "Adhom Jonam",
                                role: "Project Manager",
                                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                            },
                            {
                                name: "Turka Pruda",
                                role: "Marketing",
                                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                            },
                        ].map((member, idx) => (
                            <div key={idx} className="group relative">
                                <div className="overflow-hidden rounded-2xl mb-6">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full transition-all duration-500 transform group-hover:scale-110"
                                    />
                                </div>

                                <h4 className="text-xl font-bold text-[#0e2a47] mb-1">
                                    {member.name}
                                </h4>

                                <p className="text-blue-600 text-sm font-semibold">
                                    {member.role}
                                </p>

                                <div className="absolute bottom-[85px] right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                                    <span className="text-xl font-bold">+</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-[#f7faff]">
                <div className="max-w-[1170px] mx-auto px-6 text-center">
                    <span className="text-blue-600 font-bold tracking-[3px] text-xs uppercase block mb-4">TESTIMONIALS</span>
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#0e2a47] mb-16">What People Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: "Ocean Babs", role: "Head of IT", img: "https://i.pravatar.cc/150?u=1" },
                            { name: "Hundi Monas", role: "Marketing", img: "https://i.pravatar.cc/150?u=2" }
                        ].map((testi, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-8 text-left relative overflow-hidden">
                                <div className="relative shrink-0">
                                    <img src={testi.img} alt={testi.name} className="w-24 h-24 rounded-full border-4 border-[#f7faff]" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                        <span className="text-lg">“</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-500 italic mb-6 leading-relaxed">
                                        "Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!"
                                    </p>
                                    <div className="flex text-yellow-400 mb-2">★★★★★</div>
                                    <h4 className="font-bold text-[#0e2a47]">{testi.name} <span className="font-normal text-gray-400 mx-2">/</span> <span className="text-sm font-medium text-gray-500">{testi.role}</span></h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                    </div>
                </div>
            </section>

            {/* Popular News / Blog Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1170px] mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-[3px] text-xs uppercase block mb-4">POPULAR NEWS</span>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0e2a47] mb-6">Latest From our blog</h2>
                        <div className="w-[40px] h-[3px] bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Strategies for digital dominance",
                                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
                                desc: "Explore the latest trends in digital transformation and how they impact modern business workflows."
                            },
                            {
                                title: "The evolution of user interfaces",
                                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
                                desc: "Why clean design systems are becoming the standard for successful SaaS platforms in 2024."
                            },
                            {
                                title: "Remote team collaboration",
                                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
                                desc: "Tools and techniques to keep your distributed team synchronized and productive."
                            }
                        ].map((post, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                                {/* Image Container */}
                                <div className="overflow-hidden">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8">
                                    {/* Meta Data with Icons */}
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-semibold">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            Jan 20, 2024
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                            Admin
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0e2a47] mb-4 hover:text-blue-600 cursor-pointer transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {post.desc}
                                    </p>

                                    {/* Button with Arrow Icon */}
                                    <button className="text-xs font-bold tracking-widest text-[#0e2a47] uppercase hover:text-blue-600 transition-colors flex items-center gap-2">
                                        READ MORE
                                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;