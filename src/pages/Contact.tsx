import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="relative pt-[100px]">
            {/* 1. FIXED VIDEO BACKGROUND - Stays in place while content scrolls */}
            <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-105" // Slight scale to prevent edge flickering
                >
                    <source src="https://s7ap1.scene7.com/is/content/TCSCOMprod/who-we-are-home-AVS.m3u8" />
                    Your browser does not support the video tag.
                </video>
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-secondary/80"></div>
            </div>

            {/* 2. SCROLLABLE CONTENT LAYER */}
            <main className="relative z-10">

                {/* HERO SECTION - Transparent background to show video */}
                <section className="h-[70vh] flex items-center">
                    <div className="max-w-[1170px] mx-auto px-6 w-full">
                        <div className="max-w-2xl">

                            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                                Let's build the <span className="text-primary">future</span>.
                            </h1>
                            <p className="text-xl text-white/70 leading-relaxed">
                                We're here to help you build secure and scalable technology solutions.
                                Reach out to our team today.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FORM & INFO SECTION - This part scrolls up over the video */}
                <section className="bg-white/95 backdrop-blur-sm py-24 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
                    <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">

                        {/* Left Side: Modern Form */}
                        <div className="flex-[1.5]">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">
                                Send us a message
                            </h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-500 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-500 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-gray-500 ml-1">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full p-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="md:col-span-2 bg-secondary text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-primary hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Contact Info */}
                        <aside className="flex-1 space-y-6">
                            <div className="p-8 rounded-[32px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-6 items-center">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-secondary">Our Location</h4>
                                        <p className="text-gray-500">123 Tech Avenue, Silicon Valley</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[32px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-6 items-center">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-secondary">Phone Number</h4>
                                        <p className="text-gray-500">+1 234 567 890</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[32px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-6 items-center">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-secondary">Email Address</h4>
                                        <p className="text-gray-500">contact@tanda.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-[200px] rounded-[32px] overflow-hidden relative border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290622367!2d-122.0837468!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbba27a958df9%3A0x7fa5a22e83e6a98!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1634567890123"
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;