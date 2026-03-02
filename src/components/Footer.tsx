import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="py-24 bg-secondary text-white">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white">
                        <span className="bg-primary bg-gradient-to-br from-[#086ad8] to-[#054a96] text-white w-[35px] h-[35px] flex items-center justify-center rounded-lg text-lg">T</span>
                        <span className="logo-text">GKR Tech</span>
                    </Link>
                    <p className="text-gray-400 leading-relaxed text-base">
                        A premium SaaS IT solutions company. We provide state-of-the-art technological solutions for businesses.
                    </p>
                    <div className="flex gap-4">
                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all text-xs font-bold">FB</span>
                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all text-xs font-bold">TW</span>
                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all text-xs font-bold">IG</span>
                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-all text-xs font-bold">LN</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold mb-4 text-white">Company</h4>
                    <Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">About Us</Link>
                    <Link to="/team" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Our Team</Link>
                    <Link to="/projects" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Projects</Link>
                    <Link to="/blog" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Blog</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-bold mb-4 text-white">Services</h4>
                    <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">IT Management</Link>
                    <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Cyber Security</Link>
                    <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">Cloud Services</Link>
                    <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all">App Dev</Link>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xl font-bold mb-4 text-white">Newsletter</h4>
                    <p className="text-gray-400">Subscribe to get the latest updates.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Your Email" className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-primary transition-all flex-1 text-white" />
                        <button className="bg-primary hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-bold transition-all">Go</button>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-6 border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2026 Tanda. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
