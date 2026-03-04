import React from 'react';
import {
    ChevronRight,
    Play,
    Phone,
    Monitor,
    ShieldCheck,
    RefreshCw,
    Lock,
    Users,
    Box,
    MoveRight
} from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            title: "IT Design",
            icon: <Monitor size={40} strokeWidth={1.5} />,
            desc: "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
        },
        {
            title: "Data Security",
            icon: <ShieldCheck size={40} strokeWidth={1.5} />,
            desc: "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
        },
        {
            title: "Business Reform",
            icon: <RefreshCw size={40} strokeWidth={1.5} />,
            desc: "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
        },
        {
            title: "Firewall Advance",
            icon: <Lock size={40} strokeWidth={1.5} />,
            desc: "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
        },
        {
            title: "IT Management",
            icon: <Users size={40} strokeWidth={1.5} />,
            desc: "Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
        }
    ];

    const clients = [
        "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/1.png",
        "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/2.png",
        "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/3.png",
        "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/5.png",
        "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/5-1.png",
        "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/6.png"
    ];

    return (
        <div className="pt-[80px] font-sans">
            {/* --- Hero / Breadcrumb --- */}
            <section
                className="relative h-[450px] flex items-center bg-fixed bg-center bg-cover text-white"
                style={{ backgroundImage: 'url(https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/6.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 !text-white leading-tight">Services Version One</h1>
                    <nav className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 text-sm">
                        <a href="/" className="hover:text-blue-400 transition-colors">HOME</a>
                        <span className="text-white/30">•</span>
                        <span className="text-blue-400 border-b border-blue-400 font-semibold tracking-wider">PAGES</span>
                    </nav>
                </div>
            </section>

            {/* --- Services Grid --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group p-8 md:p-12 border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white text-center flex flex-col items-center">
                                <div className="mb-8 p-6 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-[#002d5b] mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                                <p className="text-gray-500 leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-[#002d5b] hover:bg-blue-600 hover:text-white transition-all shadow-inner group-hover:scale-110">
                                    <ChevronRight size={20} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us (Refined Version) --- */}
            <section className="relative pt-32 pb-64 bg-cover bg-center bg-no-repeat text-white"
                style={{ backgroundImage: 'url(https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/2-1.jpg)' }}>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Header Content */}
                    <div className="mb-12">
                        <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block !text-white">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-8 !text-white">
                            We Provide Outsourced IT Services For your business
                        </h2>

                        {/* Play Button */}
                        <div className="flex justify-center">
                            <button className="relative group w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl">
                                <span className="absolute inset-0 bg-white rounded-full animate-ping opacity-25"></span>
                                <Play fill="currentColor" size={28} className="ml-1 relative z-10 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Feature Cards Container (Negative Margin for Overlap) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto -mb-80 relative z-20">

                        {/* 24/7 Customer Support Card */}
                        <div className="bg-white text-gray-900 p-10 md:p-12 rounded-3xl shadow-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-[#002d5b]">24/7 Customer support</h3>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw.
                                </p>
                            </div>
                            <div className="flex items-center gap-4 bg-blue-50/50 p-4 rounded-xl w-fit">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Helpline</p>
                                    <p className="text-lg font-bold text-[#002d5b]">+123 456 7890</p>
                                </div>
                            </div>
                        </div>

                        {/* Smart Solutions Card */}
                        <div className="bg-white text-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col sm:flex-row gap-6 items-start border-t-4 border-blue-600">
                            <div className="text-blue-600 mt-1 bg-blue-50 p-4 rounded-full">
                                <Box className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-[#002d5b]">Smart solutions</h3>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection.
                                </p>
                                <button className="flex items-center gap-2 text-blue-600 font-bold uppercase text-sm tracking-wider group hover:text-[#002d5b] transition-colors">
                                    Start Now
                                    <span className="border-b-2 border-blue-600 pb-0.5 group-hover:border-[#002d5b] transition-colors">
                                        <MoveRight size={18} />
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* The Bottom Wave Shape */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
                    <svg className="relative block w-full h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FFFFFF" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#FFFFFF" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- Clients Carousel (With Dynamic Padding to accommodate overlap) --- */}
            <section className="pt-96 pb-24 bg-white relative z-0">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
                        {clients.map((logo, idx) => (
                            <div key={idx} className="flex justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                                <img src={logo} alt={`Client ${idx + 1}`} className="h-10 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;