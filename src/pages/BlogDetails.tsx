import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/content';
import { Calendar, User, Tag, ArrowLeft, Search, ChevronRight } from 'lucide-react';

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === Number(id));

    if (!post) {
        return (
            <div className="pt-[120px] pb-24 text-center">
                <h2 className="text-3xl font-bold text-[#0e2a47] mb-6">Article Not Found</h2>
                <Link to="/blog" className="text-blue-600 font-bold hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft size={18} /> Back to Blog
                </Link>
            </div>
        );
    }

    const recentPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <div className="pt-[80px] min-h-screen bg-white">
            {/* Breadcrumb Section */}
            <section className="py-20 bg-[#0e2a47] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://wpriverthemes.com/tandaelem/wp-content/themes/tanda/img/map.svg" alt="Shape" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 text-white">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">
                                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                                <span className="text-white/40">/</span>
                                <span className="text-white/60">{post.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-0 leading-tight">{post.title}</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20">
                <div className="container px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Left Side: Blog Content */}
                        <div className="lg:col-span-8 space-y-12">
                            <article className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="flex flex-wrap items-center gap-6 text-[13px] text-slate-400 mb-10 font-bold uppercase tracking-wider pb-8 border-b border-slate-100">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-blue-600" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={16} className="text-blue-600" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Tag size={16} className="text-blue-600" />
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-8">
                                        {post.content.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}

                                        <blockquote className="border-l-4 border-blue-600 bg-blue-50 p-10 rounded-r-3xl italic text-[#0e2a47] font-bold text-xl my-12 relative">
                                            <span className="absolute -top-6 -left-2 text-8xl text-blue-600/10 select-none">“</span>
                                            Data sovereignty isn't about isolation; it's about control. In the GCC, mastery of regional compliance is the ultimate competitive advantage.
                                        </blockquote>

                                        <h4 className="text-2xl font-bold text-[#0e2a47] mt-12 mb-6">Strategic Implementation</h4>
                                        <p>Beyond the technical requirements, successful organizations are those that foster a culture of security awareness. Our ongoing analysis shows that technology alone captures only 60% of the risk—the remaining 40% is human and process-driven.</p>
                                    </div>

                                    {/* Post Tags */}
                                    <div className="mt-16 pt-8 border-t border-slate-100 flex items-center gap-4">
                                        <span className="font-bold text-[#0e2a47] uppercase tracking-widest text-[11px]">Tags:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer border border-slate-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Share & Navigator */}
                            <div className="flex flex-col md:flex-row justify-between gap-8 py-10 px-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <Link to="/blog" className="group">
                                    <p className="text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-1">← Back to Feed</p>
                                    <h5 className="text-[#0e2a47] font-bold group-hover:text-blue-600 transition-colors">See all publications</h5>
                                </Link>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:bg-blue-600 hover:text-white transition-all">FB</button>
                                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:bg-blue-600 hover:text-white transition-all">TW</button>
                                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 hover:bg-blue-600 hover:text-white transition-all">LN</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Search */}
                            <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 shadow-sm">
                                <h4 className="text-xl font-bold text-[#0e2a47] mb-6 relative">
                                    Search
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                                </h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Keywords..."
                                        className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-600/20 bg-white shadow-inner"
                                    />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600">
                                        <Search size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="p-8 border border-slate-100 rounded-[32px] bg-white shadow-xl shadow-slate-200/50">
                                <h4 className="text-xl font-bold text-[#0e2a47] mb-8 relative">
                                    Related Articles
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                                </h4>
                                <div className="space-y-8">
                                    {recentPosts.map((rp, idx) => (
                                        <Link key={idx} to={`/blog/${rp.id}`} className="group flex gap-4">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                                                <img src={rp.img} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{rp.category}</p>
                                                <h5 className="text-sm font-bold text-[#0e2a47] group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                    {rp.title}
                                                </h5>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <h4 className="text-2xl font-bold mb-6 relative z-10">Need Expert Advice?</h4>
                                <p className="text-white/80 mb-10 relative z-10 text-sm leading-relaxed">
                                    Speak with our technology consultants about your infrastructure and security needs.
                                </p>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-slate-100 transition-all shadow-lg text-sm">
                                    Contact Us <ChevronRight size={18} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;
