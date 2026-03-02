import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Changed items-center to flex-col to stack the two layers
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 flex flex-col ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>

            {/* --- LAYER 1: TOP BAR (Added based on Screenshot) --- */}
            {/* We hide this on scroll (optional) or mobile to prevent clutter */}
            <div className={`w-full bg-[#2c5eb6] text-white text-[13px] border-b border-white/10 ${isScrolled ? 'hidden' : 'block'}`}>
                <div className="max-w-[1200px] mx-auto px-6 h-[45px] flex justify-between items-center">

                    {/* Left Side: Address & Email */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} fill="currentColor" className="opacity-90" />
                            <span>Chennai, TN</span>
                        </div>
                        <span className="opacity-50">|</span>
                        <div className="flex items-center gap-2">
                            <Mail size={14} fill="currentColor" className="opacity-90" />
                            <span>Info@gmail.com</span>
                        </div>
                    </div>

                    {/* Right Side: Office Hours & Socials */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="opacity-90" />
                            <span>Office Hours: 8:00 AM – 7:45 PM</span>
                        </div>

                        <div className="flex items-center gap-4 ml-4">
                            <a href="#" className="hover:text-gray-200 transition-colors"><Facebook size={15} fill="currentColor" /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><Twitter size={15} fill="currentColor" /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><Linkedin size={15} fill="currentColor" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- LAYER 2: MAIN NAVIGATION (Your Existing Code) --- */}
            <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-secondary">
                        <span className="bg-primary bg-gradient-to-br from-[#086ad8] to-[#054a96] text-white w-[35px] h-[35px] flex items-center justify-center rounded-lg text-lg">G</span>
                        <span className={`logo-text ${isScrolled ? 'text-gray-800' : 'text-secondary'}`}>GKR Tech</span>
                    </Link>

                    <nav className="flex items-center gap-8 font-medium">
                        {/* Added dynamic text color based on scroll state if needed */}
                        <Link to="/" className="hover:text-[#086ad8] transition-colors">Home</Link>

                        {/* --- About Dropdown --- */}
                        <div className="relative group cursor-pointer">
                            <span className="hover:text-[#086ad8] transition-colors flex items-center gap-1">
                                About <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </span>
                            <div className="absolute top-full left-0 bg-transparent min-w-[200px] hidden group-hover:flex flex-col pt-4 animate-fade-in">
                                <div className="bg-white shadow-xl rounded-lg border border-gray-100 py-2 flex flex-col text-gray-800">
                                    <Link to="/about" className="px-6 py-2 text-sm hover:bg-gray-50 hover:text-[#086ad8] transition-colors">About Company</Link>
                                    <Link to="/why-choose-us" className="px-6 py-2 text-sm hover:bg-gray-50 hover:text-[#086ad8] transition-colors">Why Choose Us</Link>
                                </div>
                            </div>
                        </div>

                        <Link to="/services" className="hover:text-[#086ad8] transition-colors">Services</Link>
                        <Link to="/projects" className="hover:text-[#086ad8] transition-colors">Projects</Link>

                        <div className="relative group cursor-pointer">
                            <span className="hover:text-[#086ad8] transition-colors flex items-center gap-1">
                                Pages <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </span>
                            <div className="absolute top-full left-0 bg-transparent min-w-[180px] hidden group-hover:flex flex-col pt-4 animate-fade-in">
                                <div className="bg-white shadow-xl rounded-lg border border-gray-100 py-2 flex flex-col text-gray-800">
                                    <Link to="/team" className="px-6 py-2 text-sm hover:bg-gray-50 hover:text-[#086ad8] transition-colors">Team</Link>
                                    <Link to="/blog" className="px-6 py-2 text-sm hover:bg-gray-50 hover:text-[#086ad8] transition-colors">Blog</Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/contact" className="hover:text-[#086ad8] transition-colors">Contact</Link>
                        <Link to="/contact" className="bg-[#086ad8] text-white px-8 py-3 rounded text-sm font-semibold ml-4 hover:bg-[#0654ab] transition-colors">Get Started</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;