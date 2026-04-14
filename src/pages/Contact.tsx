import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            {/* HERO SECTION - Modified to use Video Background */}
            <section className="relative h-[500px] flex items-center overflow-hidden">

                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://s7ap1.scene7.com/is/content/TCSCOMprod/who-we-are-home-AVS.m3u8" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay - Kept to ensure text readability */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-5xl font-bold text-white">Contact Us</h1>

                    <nav className="bg-black/60 px-6 py-3 flex items-center gap-3 text-white rounded-sm">
                        <span className="flex items-center gap-2 text-sm">
                            <i className="fas fa-home"></i> HOME
                        </span>
                        <span className="text-white/50">○</span>
                        <span className="text-sm border-b border-white uppercase">Contact</span>
                    </nav>
                </div>
            </section>

            {/* FORM SECTION */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Form */}
                    <div className="flex-[1.5] animate-up bg-white p-6 md:p-12 rounded-[20px] shadow-lg border border-gray-100">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary text-center md:text-left">
                            Send us a message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={6}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50 resize-none"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="btn btn-primary w-full md:w-auto px-12 py-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Info & Map */}
                    <aside
                        className="flex-1 animate-up space-y-8"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <div className="flex gap-6 p-8 bg-light-bg rounded-[20px] border border-gray-100 items-start">
                            <span className="text-4xl">📍</span>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2">
                                    Our Location
                                </h4>
                                <p className="text-gray-600">
                                    Awfis Omr, 111, Rajiv Gandhi Road, Old Mahabalipuram Road, OMR, Kottivakkam, Chennai, Tamil Nadu 600096
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-8 bg-light-bg rounded-[20px] border border-gray-100 items-start">
                            <span className="text-4xl">📞</span>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2">
                                    Phone Number
                                </h4>
                                <p className="text-gray-600">+91  9384447964</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-8 bg-light-bg rounded-[20px] border border-gray-100 items-start">
                            <span className="text-4xl">✉️</span>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2">
                                    Email Address
                                </h4>
                                <p className="text-gray-600">info@gkrtechsolutions.com</p>
                            </div>
                        </div>

                        <div className="h-[350px] rounded-[20px] overflow-hidden border border-gray-100 shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0691241061368!2d80.2478857!3d12.9674286!2m3!1f0!2f0!3f0!3m2!1i1024!2i7!68!4f13.1!3m3!1m2!1s0x3a525ddc3019c1db%3A0xe428dbc736b5b7dd!2sAwfis%20Omr!5e0!3m2!1sen!2sin!4v1776154188438!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GKR Tech Solutions Location"
                            ></iframe>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Contact;