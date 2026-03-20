import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Clock, Facebook, Twitter, Linkedin, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/gkrtxt.png'; // ✅ Added logo import

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Paths where the two-layer navbar (top bar) should be hidden
    const hideTopBarPaths = ['/about', '/why-choose-us', '/services', '/contact', '/blog', '/team', '/projects'];
    const shouldHideTopBar = hideTopBarPaths.includes(location.pathname);
    const isContactPage = location.pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            items: [
                { name: 'About Company', path: '/about' },
                { name: 'Why Choose Us', path: '/why-choose-us' },
            ]
        },
        {
            name: 'Services',
            path: '/services',
            items: [
                { name: 'All Services', path: '/services' },
                { name: 'ITOps – Managed Services', path: '/services/itops' },
                { name: 'Consulting & Advisory', path: '/services/consulting-advisory' },
                { name: 'Build & Implementation', path: '/services/build-implementation' },
                { name: 'Operations & BAU', path: '/services/operations-bau' },
            ]
        },
        { name: 'Projects', path: '/projects' },
        {
            name: 'Pages',
            path: '#',
            items: [
                { name: 'Team', path: '/team' },
                { name: 'Blog', path: '/blog' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 flex flex-col ${isScrolled ? 'bg-white shadow-md text-secondary' : 'bg-white text-secondary'}`}>

            {/* --- LAYER 1: TOP BAR --- */}
            <div className={`w-full bg-[#2c5eb6] text-white text-[13px] border-b border-white/10 hidden md:block overflow-hidden transition-all duration-300 ${isScrolled || shouldHideTopBar ? 'max-h-0 opacity-0 border-none' : 'max-h-[45px] opacity-100'}`}>
                <div className="max-w-[1200px] mx-auto px-6 h-[45px] flex justify-between items-center text-white">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} fill="currentColor" className="opacity-90" />
                            <span>Chennai, TN</span>
                        </div>
                        <span className="opacity-50">|</span>
                        <div className="flex items-center gap-2">
                            <Mail size={14} fill="currentColor" className="opacity-90" />
                            <span>info@gkrtechsolutions.com</span>
                        </div>
                    </div>
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

            {/* --- LAYER 2: MAIN NAVIGATION --- */}
            <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">

                    {/* ✅ Logo Updated (Nothing Else Changed) */}
                    <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-secondary">
                        <div className="relative h-[60px] w-[180px] flex items-center overflow-hidden">
                            <img
                                src={logo}
                                alt="GKR Tech Logo"
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[300%] h-auto scale-[0.5] object-contain"
                            />
                        </div>
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group cursor-pointer">
                                {link.items ? (
                                    <>
                                        <span className="hover:text-[#086ad8] transition-colors flex items-center gap-1 py-2">
                                            {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                                        </span>
                                        <div className="absolute top-full left-0 bg-transparent min-w-[200px] hidden group-hover:flex flex-col pt-4 animate-fade-in shadow-2xl">
                                            <div className="bg-white rounded-lg border border-gray-100 py-3 flex flex-col text-gray-800 overflow-hidden">
                                                {link.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className="px-6 py-2.5 text-sm hover:bg-blue-50 hover:text-[#086ad8] transition-colors border-l-4 border-transparent hover:border-blue-600"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link to={link.path} className="hover:text-[#086ad8] transition-colors py-2">{link.name}</Link>
                                )}
                            </div>
                        ))}
                        <Link to="/contact" className="bg-[#086ad8] text-white px-8 py-3 rounded text-sm font-semibold ml-4 hover:bg-[#0654ab] transition-all hover:shadow-lg hover:shadow-blue-200">
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-secondary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Sidebar */}
            <div className={`fixed inset-0 bg-black/50 z-[1001] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                    className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 flex justify-between items-center border-b border-gray-100">
                        <span className="text-xl font-bold text-secondary">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
                    </div>
                    <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-4 text-gray-800 font-medium">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                {link.items ? (
                                    <>
                                        <div className="flex items-center justify-between py-2 text-lg border-b border-gray-50 mb-2">
                                            {link.name}
                                        </div>
                                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-blue-100">
                                            {link.items.map((item) => (
                                                <Link key={item.name} to={item.path} className="py-2 text-gray-600 hover:text-blue-600">{item.name}</Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link to={link.path} className="py-2 text-lg border-b border-gray-50">{link.name}</Link>
                                )}
                            </div>
                        ))}
                        <Link to="/contact" className="mt-4 bg-blue-600 text-white py-4 rounded-xl text-center font-bold">
                            Get Started
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;