import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogImg from '../assets/blog-1.png';

const BlogDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="pt-[80px] min-h-screen bg-gray-50/30">
            {/* Blog Header */}
            <section className="py-24 bg-light-bg relative overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-48 -mt-48" />
                <div className="container relative z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-primary font-semibold mb-10 hover:gap-3 transition-all group"
                    >
                        <span className="text-xl">←</span> Back to Blog
                    </button>

                    <div className="max-w-4xl">
                        <span className="badge">Technology & AI</span>
                        <h1 className="text-4xl md:text-[64px] font-extrabold text-secondary mt-6 mb-8 leading-tight tracking-tight">
                            The Future of AI in Business
                        </h1>

                        <div className="flex flex-wrap items-center gap-y-4 gap-x-12 text-gray-500 font-semibold border-t border-gray-200/60 pt-8">
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">📅</span>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 leading-none mb-1">Published</p>
                                    <p className="text-secondary">March 1, 2026</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">👤</span>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 leading-none mb-1">Author</p>
                                    <p className="text-secondary">John Doe</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">📁</span>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 leading-none mb-1">Category</p>
                                    <p className="text-secondary">Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-24">
                <div className="container">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="animate-up">
                            <img
                                src={blogImg}
                                alt="Blog Detail"
                                className="w-full rounded-[40px] mb-20 shadow-2xl object-cover aspect-video hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500"
                            />
                        </div>

                        <div className="max-w-[800px] mx-auto animate-up">
                            <div className="prose prose-xl prose-gray">
                                <p className="text-xl md:text-2xl leading-[1.8] text-gray-600 mb-10 font-medium opacity-90">
                                    Artificial Intelligence is no longer just a buzzword; it's a
                                    foundational shift in how businesses operate. From automated
                                    customer service to deep predictive analytics, AI is driving
                                    efficiency across all sectors.
                                </p>

                                <blockquote className="relative p-12 my-16 bg-white rounded-[40px] shadow-xl shadow-primary/5 border border-gray-100 italic">
                                    <span className="absolute top-8 left-8 text-8xl text-primary/10 leading-none font-serif">“</span>
                                    <p className="relative z-10 text-2xl md:text-3xl font-bold text-secondary leading-relaxed">
                                        AI will be the biggest technological transformation in human history, reshaping how we create, communicate, and solve problems.
                                    </p>
                                    <footer className="mt-6 text-primary font-bold">— Tech Vision 2026</footer>
                                </blockquote>

                                <div className="space-y-8">
                                    <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                                        In this article, we deep dive into the specific ways AI is being
                                        integrated into SaaS platforms to provide more value to users. The integration is seamless,
                                        often working behind the scenes to optimize performance and security.
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-16 mb-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                                        <span className="w-2 h-8 bg-primary rounded-full" />
                                        The Role of Machine Learning
                                    </h2>

                                    <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                                        Machine Learning models are being used to predict user behavior,
                                        optimize resource allocation, and detect fraud in real-time. This proactive approach
                                        reduces operational costs and significantly enhances the end-user experience.
                                    </p>

                                    <div className="p-10 bg-secondary rounded-[32px] text-white mt-16">
                                        <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
                                        <ul className="space-y-4">
                                            {[
                                                'Automation increases operational efficiency by 40%',
                                                'Predictive analytics enables proactive decision making',
                                                'Enhanced security through AI-powered anomaly detection',
                                                'Personalized user experiences drive engagement'
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-4">
                                                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">✓</span>
                                                    <span className="text-gray-300 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;
