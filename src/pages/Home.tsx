import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Activity, Clock, Calendar, User, ArrowRight,
    Headphones, Monitor, Database, Cloud, Layers,
    Share2, Shield, HeartPulse
} from 'lucide-react';
import heroImg from '../assets/hero.png';
import { services, blogPosts } from '../data/content';

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

const serviceCatalogItems = [
    {
        title: "Service Desk",
        icon: <Headphones size={32} />,
        desc: "Support that ensures client staff stay productive through issue resolution, access management, and reliable IT operations."
    },
    {
        title: "End User Compute",
        icon: <Monitor size={32} />,
        desc: "Consistent, secure user experiences across all employee devices and locations."
    },
    {
        title: "Database",
        icon: <Database size={32} />,
        desc: "Manage and optimize to ensure interoperability, performance, availability, and data integrity."
    },
    {
        title: "Cloud",
        icon: <Cloud size={32} />,
        desc: "Migration, modernization, and management across public, private, and hybrid environments."
    },
    {
        title: "Infrastructure",
        icon: <Layers size={32} />,
        desc: "Design and management to ensure security, performance, scalability, and uptime."
    },
    {
        title: "Network & NOC",
        icon: <Share2 size={32} />,
        desc: "Proactive monitoring and support to keep systems always connected."
    },
    {
        title: "Cybersecurity",
        icon: <Shield size={32} />,
        desc: "Layered to prevent attacks, minimize risk, and maintain business trust."
    },
    {
        title: "Products & Apps Support",
        icon: <HeartPulse size={32} />,
        desc: "Ensuring apps runs fast, secure, and reliable—app to infrastructure."
    }
];

const technologyLogos = [
    "Wintel", "Palo Alto", "VMware", "AWS", "Google Cloud", "SQL Server", "Teradata",
    "Fortinet", "IBM DB2", "NetApp", "Linux", "Oracle Database", "Nutanix",
    "Oracle Cloud", "Azure", "PostgreSQL", "Check Point", "Citrix", "Dell EMC", "Cato Networks"
];

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="pt-[100px] font-sans">
            {/* Hero Section */}
            <section className="min-h-[calc(100vh-100px)] flex items-center bg-white overflow-hidden py-12 md:py-0">
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
                            <Link to="/about" className="flex items-center gap-[15px] group">
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute inline-flex h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-600 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-300"></span>
                                    <div className="relative w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-full bg-blue-600 text-white flex items-center justify-center border-none cursor-pointer shadow-[0_10px_25px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform z-10">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="font-bold text-xs md:text-sm tracking-widest text-[#0e2a47] uppercase whitespace-nowrap group-hover:text-blue-600 transition-colors">
                                    DISCOVER MORE
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
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
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0e2a47] mb-6">Expert Infrastructure & <br />Security Solutions</h2>
                        <div className="w-[40px] h-[3px] bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {services.filter(s => ['itops', 'consulting-advisory', 'build-implementation', 'operations-bau'].includes(s.id)).map((service, idx) => (
                            <Link key={idx} to={`/services/${service.id}`} className="bg-white p-10 rounded-xl flex flex-col sm:flex-row gap-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition-all duration-300 group">
                                <div className="shrink-0 w-[60px] h-[60px] flex items-center justify-center text-blue-600 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#0e2a47] mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-[15px] leading-[26px] text-gray-500 line-clamp-2">
                                        {service.desc}
                                    </p>
                                </div>
                            </Link>
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
            <section className="py-12 bg-white">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div
                        className="relative overflow-hidden rounded-[10px] py-[80px] md:py-[100px] px-4 shadow-xl bg-fixed bg-center bg-cover"
                        style={{
                            backgroundImage: `url('https://wpriverthemes.com/tandaelem/wp-content/uploads/2023/01/16.jpg')`
                        }}
                    >
                        {/* Blue Overlay */}
                        <div className="absolute inset-0 bg-[#2d62c2]/85"></div>

                        {/* Service Catalog Header */}
                        <div className="relative z-10 text-center mb-16">
                            <h2 className="text-white text-[32px] md:text-[42px] font-bold">Infrastructure Ops – Service Catalog</h2>
                            <div className="w-[40px] h-[3px] bg-white mx-auto mt-6 rounded-full"></div>
                        </div>

                        {/* Service Catalog Grid */}
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20 px-4">
                            {serviceCatalogItems.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                    {/* Icon */}
                                    <div className="text-white mb-8 p-6 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    {/* Title Pill */}
                                    <div className="bg-[#0e2a47] text-white px-10 py-3 rounded-full font-bold text-sm tracking-widest mb-8 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] min-w-[200px] text-center uppercase group-hover:scale-105 transition-transform">
                                        {item.title}
                                    </div>
                                    {/* Description */}
                                    <p className="text-white/80 text-sm leading-relaxed text-center px-4 max-w-[280px]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Technology Logos */}
                        <div className="relative z-10 border-t border-white/10 pt-16 mt-20 px-4">
                            <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 gap-y-10 opacity-70 filter brightness-0 invert transition-opacity hover:opacity-100">
                                {technologyLogos.map((logo, i) => (
                                    <span key={i} className="text-white font-black text-xl md:text-2xl tracking-tighter hover:scale-110 transition-transform cursor-default whitespace-nowrap">
                                        {logo}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Excellence - Medallion Preview */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-[3px] text-sm uppercase block mb-4">SERVICE EXCELLENCE</span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0e2a47] mb-6">Our Medallion Service Models</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                            Flexible, AI-led managed service tiers designed to scale with your business complexity and security requirements.
                        </p>
                        <div className="w-[40px] h-[3px] bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { name: "Bronze", color: "from-orange-100 to-orange-200", iconPath: "m12 15 2 2 4-4", text: "Entry Level" },
                            { name: "Silver", color: "from-slate-100 to-slate-200", iconPath: "m12 15 2 2 4-4", text: "Standard" },
                            { name: "Gold", color: "from-yellow-100 to-yellow-200", iconPath: "m12 15 2 2 4-4", text: "Advanced" },
                            { name: "Platinum", color: "from-blue-100 to-blue-200", iconPath: "m12 15 2 2 4-4", text: "Elite" }
                        ].map((m, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl bg-gradient-to-br ${m.color} border border-white/50 shadow-sm hover:shadow-md transition-all text-center group`}>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="font-bold text-gray-800">{m.name[0]}</span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-800 mb-2">{m.name}</h4>
                                <p className="text-sm text-gray-600 mb-6">{m.text}</p>
                                <Link to="/services/itops" className="text-blue-600 text-xs font-bold uppercase tracking-wider hover:underline">View Scope</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="py-24 bg-[#f7faff]">
                <div className="max-w-[1170px] mx-auto px-6 text-center">
                    <span className="text-blue-600 font-bold tracking-[3px] text-xs uppercase block mb-4">TESTIMONIALS</span>
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#0e2a47] mb-16">What Our Clients Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: "Sanjay Kumar", role: "CTO, Regional Bank", img: "https://i.pravatar.cc/150?u=1" },
                            { name: "Laila Ibrahim", role: "IT Operations Manager", img: "https://i.pravatar.cc/150?u=2" }
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
                                        "GKR Tech transformed our reactive IT into an AI-led powerhouse. Their Medallion model gave us the flexibility to scale security exactly where we needed it."
                                    </p>
                                    <div className="flex text-yellow-400 mb-2">★★★★★</div>
                                    <h4 className="font-bold text-[#0e2a47]">{testi.name} <span className="font-normal text-gray-400 mx-2">/</span> <span className="text-sm font-medium text-gray-500">{testi.role}</span></h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular News / Blog Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1170px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-[3px] text-xs uppercase block mb-4">LATEST INSIGHTS</span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[#0e2a47] mb-6">Infrastructure & Security Blog</h2>
                        <div className="w-[40px] h-[3px] bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((post, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                                <Link to={`/blog`} className="overflow-hidden h-56 block">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-semibold">
                                        <span className="flex items-center gap-1.5 uppercase tracking-wider">
                                            <Calendar size={14} className="text-blue-600" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 uppercase tracking-wider">
                                            <User size={14} className="text-blue-600" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0e2a47] mb-4 hover:text-blue-600 cursor-pointer transition-colors leading-tight line-clamp-2">
                                        <Link to={`/blog`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.description}
                                    </p>
                                    <Link to={`/blog`} className="mt-auto text-xs font-bold tracking-widest text-[#0e2a47] uppercase hover:text-blue-600 transition-colors flex items-center gap-2 group-hover:gap-3">
                                        READ MORE
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
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