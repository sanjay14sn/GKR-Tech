import React from 'react';
// Assuming these are your asset paths
const teamImg1 = 'https://wpriverthemes.com/tandaelem/wp-content/uploads/2022/01/7.jpg';
import teamImg2 from '../assets/about-team.png';
import statsImg from '../assets/stats-team.png';

const About: React.FC = () => {

    const processSteps = [

        {

            id: "01",

            title: "Choose a Service",

            desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",

            icon: (

                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

            )

        },

        {

            id: "02",

            title: "Request a Meeting",

            desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",

            icon: (

                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>

            )

        },

        {

            id: "03",

            title: "Receive Custom Plan",

            desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",

            icon: (

                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>

            )

        },

        {

            id: "04",

            title: "Let's Make it Happen",

            desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",

            icon: (

                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>

            )

        }

    ];


    return (
        <div className="pt-[80px]">
            {/* --- Section 1: Hero Breadcrumb (Screenshot 1) --- */}
            <section
                className="relative h-[500px] flex items-center bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: `url(${teamImg1})`
                }}
            >
                {/* Dark Overlay - Adjusted to match the new background method */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
                    <h1 className="text-5xl font-bold text-white">About Us</h1>

                    <nav className="bg-black/60 px-6 py-3 flex items-center gap-3 text-white rounded-sm">
                        <span className="flex items-center gap-2 text-sm">
                            <i className="fas fa-home"></i> HOME
                        </span>
                        <span className="text-white/50">○</span>
                        <span className="text-sm border-b border-white">PAGES</span>
                    </nav>
                </div>
            </section>

            {/* --- Section 2: Scale Engineering & FAQ (Screenshot 2) --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Overlapping Images */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 w-[80%]">
                            <img src={teamImg1} alt="Team work" className="rounded-xl shadow-xl" />
                        </div>
                        <div className="absolute -bottom-10 right-0 w-[60%] z-20">
                            <img src={teamImg2} alt="Meeting" className="rounded-xl shadow-2xl border-8 border-white" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-30 bg-white p-8 shadow-2xl rounded-xl text-center min-w-[200px]">
                            <h3 className="text-4xl font-bold text-[#002d5b]">20 Years Of</h3>
                            <p className="text-xl font-bold text-[#002d5b]">Experience</p>
                        </div>
                        {/* Decorative Wave (Simplified) */}
                        <div className="absolute -left-10 top-1/2 -z-10 opacity-20">
                            <div className="w-64 h-64 border-[20px] border-blue-500 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Right: Content & Accordion */}
                    <div className="flex-1">
                        <h2 className="text-[42px] font-bold text-[#002d5b] leading-tight mb-6">
                            We Help IT Companies Scale Engineering Capacity
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.
                        </p>

                        <div className="space-y-4">
                            {["Do I need a business plan?", "How long should a business plan be?"].map((q, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer">
                                    <span className="font-bold text-[#002d5b]">{q}</span>
                                    <span className="text-gray-400">›</span>
                                </div>
                            ))}
                            <div className="py-4">
                                <div className="flex justify-between items-center mb-4 cursor-pointer">
                                    <span className="font-bold text-[#002d5b]">Where do I start?</span>
                                    <span className="text-gray-400">⌄</span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            {/* --- Section 4: Process (NEW ADDITION) --- */}

            <section className="py-24 bg-white">

                <div className="container mx-auto px-6">

                    {/* Header */}

                    <div className="text-center mb-16">

                        <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">PROCESS</h4>

                        <h2 className="text-[42px] font-bold text-[#002d5b] mb-4">How we works</h2>

                        <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>

                    </div>



                    {/* Steps Grid */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {processSteps.map((step, index) => (

                            <div

                                key={index}

                                className="group p-8 border border-gray-100 hover:border-blue-600 rounded-[10px] relative transition-all duration-300 bg-white"

                            >

                                {/* Large Background Number */}

                                <div className="absolute top-2 right-4 text-[80px] font-bold text-gray-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none z-0">

                                    {step.id}

                                </div>



                                {/* Content */}

                                <div className="relative z-10">

                                    <div className="mb-6 bg-white inline-block">

                                        {step.icon}

                                    </div>

                                    <h3 className="text-xl font-bold text-[#002d5b] mb-4">

                                        {step.title}

                                    </h3>

                                    <p className="text-gray-500 text-[15px] leading-relaxed">

                                        {step.desc}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* --- Section 3: Trusted & Stats (Screenshot 3) --- */}

        </div>
    );
};

export default About;