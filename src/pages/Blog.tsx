import React from 'react';
import { blogPosts } from '../data/content';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
    return (
        <div className="pt-[80px] bg-slate-50 min-h-screen">
            {/* Header Section */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50 text-center border-b border-slate-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold tracking-wider text-xs uppercase mb-6 border border-blue-100">
                        Insights & Perspectives
                    </span>
                    <h1 className="text-4xl md:text-[52px] font-extrabold mt-4 mb-6 text-[#0e2a47] tracking-tight">
                        The Enterprise <span className="text-blue-600">Tech Journal</span>
                    </h1>
                    <p className="text-lg max-w-[700px] mx-auto text-slate-500 leading-relaxed">
                        Expert analysis on digital transformation, cybersecurity, and cloud architecture specifically tailored for the regional landscape.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <article key={post.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 group">
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-[12px] font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        {post.date}
                                    </span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-[#0e2a47] group-hover:text-blue-600 transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold group-hover:gap-3 transition-all">
                                        Continue Reading
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;