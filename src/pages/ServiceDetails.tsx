import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/content';
import { CheckCircle2, Phone, Mail, ArrowLeft } from 'lucide-react';

const ServiceDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="pt-[120px] pb-24 text-center">
                <h2 className="text-3xl font-bold text-secondary mb-6">Service Not Found</h2>
                <Link to="/services" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft size={18} /> Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-[80px]">
            {/* Header / Banner */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                        <Link to="/services" className="hover:underline">Services</Link>
                        <span>/</span>
                        <span className="text-slate-400 capitalize">{service.id.replace('-', ' ')}</span>
                    </div>
                    <h1 className="text-4xl md:text-[56px] font-extrabold mt-4 mb-0 text-[#002d5b] leading-tight">
                        {service.title}
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
                    <div className="flex-[2] space-y-12">
                        {/* Service Image */}
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover aspect-video"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                <div className="p-3 bg-blue-600 rounded-lg inline-block mb-3">
                                    {service.icon}
                                </div>
                                <p className="text-sm font-semibold opacity-90">Expert Technology Solutions</p>
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-[#002d5b]">Service Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {service.details}
                            </p>

                            <h3 className="text-2xl font-bold mb-8 text-[#002d5b]">Key Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all group">
                                        <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#002d5b] mb-1">{benefit}</p>
                                            <p className="text-xs text-slate-500">Tailored for GCC enterprise excellence.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Scope */}
                        <div className="bg-[#002d5b] p-10 md:p-12 rounded-[40px] text-white">
                            <h3 className="text-2xl font-bold mb-8 text-white">Technical Scope & Focus</h3>
                            <div className="flex flex-wrap gap-4">
                                {service.features.map((feature, idx) => (
                                    <span key={idx} className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-[#002d5b] transition-all cursor-default">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="flex-1 space-y-8">
                        <div className="bg-slate-900 p-10 rounded-[32px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-colors"></div>

                            <h4 className="text-2xl font-bold mb-6 relative z-10 text-white">Get a Detailed Roadmap</h4>
                            <p className="text-slate-400 mb-10 relative z-10 leading-relaxed md:text-sm">
                                Ready to secure and scale your infrastructure? Our architects are ready to design a solution that fits your specific needs.
                            </p>

                            <div className="space-y-4 relative z-10 mb-10">
                                <a href="tel:+919840995018" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-slate-900 transition-all">
                                    <Phone className="text-blue-500" size={20} />
                                    <span className="font-bold">+91 98409 95018</span>
                                </a>
                                <a href="mailto:info@gkrtechsolutions.com" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-slate-900 transition-all">
                                    <Mail className="text-blue-500" size={20} />
                                    <span className="font-bold">info@gkrtechsolutions.com</span>
                                </a>
                            </div>

                            <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-all relative z-10">
                                Request Consultation
                            </button>
                        </div>

                        <div className="p-10 bg-slate-50 rounded-[32px] border border-slate-100">
                            <h4 className="text-xl font-bold text-[#002d5b] mb-6 border-b pb-4">Other Services</h4>
                            <nav className="space-y-2">
                                {services.filter(s => s.id !== id).map(s => (
                                    <Link
                                        key={s.id}
                                        to={`/services/${s.id}`}
                                        className="flex items-center justify-between p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all text-slate-600 hover:text-blue-600 font-semibold group"
                                    >
                                        <span className="text-sm">{s.title}</span>
                                        <ArrowLeft className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;
