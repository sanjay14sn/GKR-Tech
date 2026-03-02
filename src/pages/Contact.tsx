import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="pt-[80px]">
            <section className="py-20 bg-light-bg text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Get In Touch</span>
                    <h1 className="text-[56px] font-bold mt-4 mb-4 text-secondary">Contact Us</h1>
                    <p className="text-xl max-w-[600px] mx-auto text-gray-600">We're here to help you with any questions or project inquiries.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
                    <div className="flex-[1.5] animate-up bg-white p-12 rounded-[20px] shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold mb-8 text-secondary">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50" required />
                                <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50" required />
                            </div>
                            <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50" required />
                            <textarea placeholder="Your Message" rows={6} className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all bg-gray-50 resize-none" required></textarea>
                            <button type="submit" className="btn btn-primary w-full md:w-auto px-12 py-4">Send Message</button>
                        </form>
                    </div>

                    <aside className="flex-1 animate-up space-y-8" style={{ animationDelay: '0.2s' }}>
                        <div className="flex gap-6 p-8 bg-light-bg rounded-[20px] border border-gray-100 items-start">
                            <span className="text-4xl">📍</span>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2">Our Location</h4>
                                <p className="text-gray-600">123 Tech Avenue, Silicon Valley, CA</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-8 bg-light-bg rounded-[20px] border border-gray-100 items-start">
                            <span className="text-4xl">📞</span>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2">Phone Number</h4>
                                <p className="text-gray-600">+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-8 bg-light-bg rounded-[20px] border border-gray-100 items-start">
                            <span className="text-4xl">✉️</span>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-2">Email Address</h4>
                                <p className="text-gray-600">contact@tanda.com</p>
                            </div>
                        </div>
                        <div className="h-[250px] rounded-[20px] bg-gray-200 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold group-hover:scale-110 transition-transform">Google Map View</div>
                            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Contact;
