import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'py-4 bg-white shadow-md' : 'py-6 bg-transparent'}`}>
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-secondary">
                    <span className="bg-primary bg-gradient-to-br from-[#086ad8] to-[#054a96] text-white w-[35px] h-[35px] flex items-center justify-center rounded-lg text-lg">G</span>
                    <span className="logo-text">GKR Tech</span>
                </Link>
                <nav className="flex items-center gap-8 font-medium">
                    <Link to="/" className="text-secondary hover:text-primary transition-colors">Home</Link>
                    <Link to="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
                    <Link to="/services" className="text-secondary hover:text-primary transition-colors">Services</Link>
                    <Link to="/projects" className="text-secondary hover:text-primary transition-colors">Projects</Link>
                    <div className="relative group cursor-pointer text-secondary">
                        <span className="hover:text-primary transition-colors">Pages</span>
                        <div className="absolute top-full left-0 bg-white min-w-[180px] shadow-xl hidden group-hover:flex flex-col py-2 rounded-lg mt-4 border border-gray-100 animate-fadeIn">
                            <Link to="/team" className="px-6 py-2 text-sm hover:bg-light-bg hover:text-primary transition-colors">Team</Link>
                            <Link to="/blog" className="px-6 py-2 text-sm hover:bg-light-bg hover:text-primary transition-colors">Blog</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
                    <Link to="/contact" className="btn btn-primary !px-8 !py-3 !text-sm ml-4">Get Started</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
