import React from 'react';
import {
    ChevronRight,
    MoveRight,
    Server,
    Cloud
} from 'lucide-react';
import { services } from '../data/content';
import { Link } from 'react-router-dom';

const teamImg1 = 'https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/01/7.jpg';

const Services: React.FC = () => {
    const gccExpertise = [
        {
            id: "sovereign-cloud",
            title: "Sovereign Cloud",
            icon: <Cloud className="w-8 h-8 md:w-10 md:h-10" />,
            desc: "Landing zones, secure migrations, and compliance for NESA, NCA, and regional data residency requirements."
        },
        {
            id: "datacenter-lifecycle",
            title: "Datacenter Lifecycle",
            icon: <Server className="w-8 h-8 md:w-10 md:h-10" />,
            desc: "From greenfield design to decommission. Power, cooling, rack/stack, and hardware deployment with 24/7 monitoring."
        }
    ];

    return (
        <div className="pt-[80px] font-sans overflow-x-hidden">
            {/* --- Hero / Breadcrumb --- */}
            <section
                className="relative h-[500px] flex items-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${teamImg1})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
                    <h1 className="text-5xl font-bold text-white">Our Services</h1>

                    <nav className="bg-black/60 px-6 py-3 flex items-center gap-3 text-white rounded-sm">
                        <Link to="/" className="flex items-center gap-2 text-sm">
                            <i className="fas fa-home"></i> HOME
                        </Link>
                        <span className="text-white/50">○</span>
                        <span className="text-sm border-b border-white uppercase">Services</span>
                    </nav>
                </div>
            </section>


            {/* --- Core Services Grid --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#002d5b] mb-4">Security & Infrastructure</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group p-10 border border-gray-200 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white flex flex-col items-center">
                                <div className="mb-8 p-6 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-[#002d5b] mb-4 text-center">{service.title}</h4>
                                <p className="text-gray-500 leading-relaxed mb-6 text-center line-clamp-3">
                                    {service.desc}
                                </p>
                                <ul className="flex flex-wrap justify-center gap-2 mb-8">
                                    {service.features.map((f, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                                            {f}
                                        </span>
                                    ))}
                                </ul>
                                <Link to={`/services/${service.id}`} className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#002d5b] hover:bg-blue-600 hover:text-white transition-all shadow-inner group-hover:scale-110">
                                    <ChevronRight size={20} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GCC & Datacenter Excellence (The Overlap Section) --- */}
            <section className="relative pt-32 pb-48 bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="mb-12">
                        <span className="uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-4 block text-blue-400">Regional Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-8 !text-white">
                            GCC & Datacenter Excellence
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                            Mastering the complexities of sovereign cloud and critical infrastructure in the Gulf region.
                        </p>
                    </div>

                    {/* Feature Cards with defined overlap using relative positioning instead of huge negative margins */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-30 translate-y-32">
                        {gccExpertise.map((item, idx) => (
                            <div key={idx} className="bg-white text-gray-900 p-10 md:p-12 rounded-3xl shadow-2xl flex flex-col sm:flex-row gap-8 items-start text-left border-b-8 border-blue-600 transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-blue-600 bg-blue-50 p-5 rounded-2xl flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#002d5b]">{item.title}</h3>
                                    <p className="text-gray-500 mb-8 leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <Link to={`/services/${item.id}`} className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest group hover:text-[#002d5b] transition-colors">
                                        View Roadmap
                                        <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wave SVG positioned behind the cards */}
                <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] fill-white">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                    </svg>
                </div>
            </section>

            {/* --- Frameworks & Compliance (Adjusted Padding for Overlap) --- */}
            <section className="pt-48 pb-24 bg-white relative z-0">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Compliance Standards</span>
                        <h3 className="text-2xl font-bold text-[#002d5b] mt-2">Regulatory Frameworks We Support</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="p-8 border border-gray-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all">
                            <h5 className="font-bold text-blue-600 mb-3 border-b pb-2">UAE</h5>
                            <p className="text-sm text-gray-600 font-medium">NESA (IA), Dubai ISR, ADHICS</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all">
                            <h5 className="font-bold text-blue-600 mb-3 border-b pb-2">Saudi Arabia</h5>
                            <p className="text-sm text-gray-600 font-medium">NCA (ECC, CSCC), SAMA</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all">
                            <h5 className="font-bold text-blue-600 mb-3 border-b pb-2">Global & Qatar</h5>
                            <p className="text-sm text-gray-600 font-medium">Q-CERT, ISO 27001, GDPR</p>
                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-6 py-10">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 md:p-10 shadow-sm">

                            {/* Decorative Background Element */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>

                            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">

                                {/* Left Side: Headline */}
                                <div className="max-w-xs text-center lg:text-left">
                                    <h4 className="text-secondary font-bold text-xl leading-tight">
                                        Trusted by enterprises <br />
                                        <span className="text-[#086ad8]">across the region</span>
                                    </h4>
                                    <div className="h-1 w-12 bg-[#086ad8] mt-3 mx-auto lg:ml-0 rounded-full"></div>
                                </div>

                                {/* Right Side: Status Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">

                                    {/* ISO Card */}
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Certified</p>
                                            <p className="text-sm font-extrabold text-secondary">ISO 27001</p>
                                        </div>
                                    </div>

                                    {/* AWS Card */}
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-orange-50 p-2 rounded-lg text-orange-600 font-black text-xs">AWS</div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Official</p>
                                            <p className="text-sm font-extrabold text-secondary">Cloud Partner</p>
                                        </div>
                                    </div>

                                    {/* Microsoft Card */}
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="grid grid-cols-2 gap-0.5">
                                            <div className="w-2 h-2 bg-[#f25022]"></div>
                                            <div className="w-2 h-2 bg-[#7fba00]"></div>
                                            <div className="w-2 h-2 bg-[#00a4ef]"></div>
                                            <div className="w-2 h-2 bg-[#ffb900]"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Solution</p>
                                            <p className="text-sm font-extrabold text-secondary">Microsoft Partner</p>
                                        </div>
                                    </div>

                                    {/* NESA Card */}
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                            <div className="w-4 h-4 border-2 border-blue-600 rounded-sm rotate-45 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-blue-600"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Compliance</p>
                                            <p className="text-sm font-extrabold text-secondary">NESA Registered</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;