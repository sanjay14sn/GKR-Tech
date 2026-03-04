import React from 'react';
import { CheckCircle, ArrowRightCircle, ChevronRight, ChevronDown, Rocket, Target, Cpu } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            title: "Cybersecurity Solutions",
            img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/1.jpg",
        },
        {
            title: "Cloud Infrastructure",
            img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/2-2.jpg",
        },
        {
            title: "Managed IT Services",
            img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/3-1.jpg",
        }
    ];

    const faqs = [
        {
            q: "What services does GKR Technology Solutions provide?",
            a: "GKR Technology Solutions delivers end-to-end cybersecurity, cloud infrastructure, and IT services. We help businesses secure their systems, modernize infrastructure, and maintain reliable technology environments.",
            open: true
        },
        {
            q: "Do you provide cybersecurity protection for businesses?",
            a: "Yes. Our cybersecurity services include risk assessments, threat monitoring, vulnerability management, and compliance support to protect organizations from evolving cyber threats.",
            open: false
        },
        {
            q: "Do you offer ongoing IT support and monitoring?",
            a: "We provide continuous IT monitoring, infrastructure management, and support services to ensure systems remain secure, stable, and optimized for business performance.",
            open: false
        }
    ];

    return (
        <div className="pt-[80px]">

            {/* --- Hero / Breadcrumb --- */}
            <section
                className="relative h-[450px] flex items-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: 'url(https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/9.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-0 text-white text-center md:text-left">
                        Why Choose GKR Technology Solutions
                    </h1>

                    <nav className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 text-sm">
                        <a href="/" className="hover:text-blue-400 transition-colors">HOME</a>
                        <span className="text-white/30">•</span>
                        <span className="text-blue-400 border-b border-blue-400 font-semibold">PAGES</span>
                    </nav>
                </div>
            </section>


            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="w-8 h-0.5 bg-blue-600"></span>
                                <h5 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                                    Trusted Technology Partner
                                </h5>
                            </div>

                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#002d5b] leading-[1.15] mt-2">
                                Delivering Secure and Scalable Technology Solutions
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                GKR Technology Solutions helps organizations modernize their technology infrastructure with secure,
                                scalable, and reliable IT solutions. From cybersecurity protection and cloud infrastructure to
                                managed IT services, we support businesses at every stage of their digital journey.
                            </p>
                        </div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-square sm:aspect-[4/3]">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-blue-900/90 transition-all duration-500"></div>

                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-center transform translate-y-0 group-hover:-translate-y-2 transition-transform">
                                    <h4 className="flex-1 text-xl md:text-2xl font-bold text-white tracking-wide pr-4">{item.title}</h4>

                                    <div className="shrink-0 bg-white/20 backdrop-blur-md p-2.5 md:p-3 rounded-full text-white group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* --- Vision & Mission Section --- */}
            <section className="bg-[#0b132a] text-white">
                <div className="flex flex-col lg:flex-row">

                    <div
                        className="lg:w-1/2 min-h-[500px] bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/02/6.jpg)' }}
                    ></div>

                    <div className="lg:w-1/2 py-24 px-12 lg:px-24">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                            <div className="relative">
                                <span className="absolute -top-10 -left-6 text-7xl font-extrabold text-white/5 blur-[2px] pointer-events-none uppercase tracking-tighter">Vision</span>

                                <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                    <Target size={20} /> OUR VISION
                                </h4>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    To empower organizations with secure, reliable, and innovative technology solutions
                                    that enable digital transformation and long-term business growth.
                                </p>

                                <button className="group flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-widest">
                                    Know More <ArrowRightCircle size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>


                            <div className="relative lg:mt-12">
                                <span className="absolute -top-10 -left-6 text-7xl font-extrabold text-white/5 blur-[2px] pointer-events-none uppercase tracking-tighter">Mission</span>

                                <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                                    <Rocket size={20} /> OUR MISSION
                                </h4>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Our mission is to deliver end-to-end cybersecurity, cloud, and IT infrastructure
                                    solutions that help businesses operate efficiently, securely, and confidently
                                    in the digital age.
                                </p>

                                <button className="group flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-widest">
                                    Know More <ArrowRightCircle size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* --- FAQ Section --- */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">

                    <div className="flex flex-col lg:flex-row gap-16">

                        <div className="lg:w-1/3">

                            <h5 className="text-blue-600 font-bold uppercase tracking-widest mb-4">
                                FAQ
                            </h5>

                            <h2 className="text-4xl font-bold text-[#002d5b] leading-tight mb-8">
                                Common questions about our technology services
                            </h2>

                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-200 transition-all">
                                Contact Our Team
                            </button>

                        </div>


                        <div className="lg:w-2/3 space-y-4">

                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">

                                    <button className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors">
                                        <span className="text-lg font-bold text-[#002d5b]">{faq.q}</span>

                                        <div className={`text-blue-600 transition-transform duration-300 ${faq.open ? 'rotate-180' : ''}`}>
                                            <ChevronDown size={24} />
                                        </div>
                                    </button>

                                    {faq.open && (
                                        <div className="px-8 pb-8 text-gray-500 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default WhyChooseUs;