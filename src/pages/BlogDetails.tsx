import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import blogImg from '../assets/blog-1.png'; // Keeping this for consistency or fallback

const BlogDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Template post image URL
    const postImageUrl = "https://wpriverthemes.com/tandaelem/wp-content/uploads/2021/01/blog2-600x400.jpeg";

    return (
        <div className="pt-[80px] min-h-screen bg-white">
            {/* Breadcrumb Section - Matches "Breadcrumb" in template */}
            <section className="py-20 bg-[#0e1133] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://wpriverthemes.com/tandaelem/wp-content/themes/tanda/img/map.svg" alt="Shape" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 text-white">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Unsatiable entreaties may collecting</h2>
                        </div>
                        <nav className="text-sm font-medium">
                            <ul className="flex items-center gap-2">
                                <li><Link to="/" className="hover:text-primary transition-colors flex items-center gap-1"><span className="text-xs">🏠</span> Home</Link></li>
                                <li className="opacity-60">/</li>
                                <li className="text-primary">Blog Details</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content Area - Matches "Blog" section in template */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left Side: Blog Content */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="blog-item-box bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                                <div className="thumb overflow-hidden">
                                    <img
                                        src={postImageUrl}
                                        alt="Blog Post"
                                        className="w-full hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 md:p-12">
                                    <div className="meta flex items-center gap-6 text-sm text-gray-500 mb-6 font-semibold">
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary">📅</span> January 20, 2021
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary">👤</span> admin
                                        </div>
                                    </div>

                                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                                        <p>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>

                                        <p>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>

                                        <blockquote className="border-l-4 border-primary bg-gray-50 p-8 rounded-r-2xl italic text-secondary font-bold text-xl my-10 relative">
                                            <span className="absolute -top-4 -left-2 text-6xl text-primary/10 select-none">“</span>
                                            Aouses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity amiable pleased.
                                        </blockquote>

                                        <h4 className="text-2xl font-bold text-secondary mt-12 mb-6">Conduct replied off whether arrived adapted</h4>
                                        <ul className="space-y-3 list-none pl-0">
                                            {['Pretty merits waited six', 'General few civilly amiable pleased account carried.', 'Continue indulged speaking', 'Narrow formal length my highly', 'Occasional pianoforte alteration unaffected impossible'].map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
                                                Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.
                                            </div>
                                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
                                                Exelent to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited better.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Post Tags */}
                                    <div className="footer-entry flex items-center gap-4 mt-12 pt-8 border-t border-gray-100">
                                        <span className="font-bold text-secondary uppercase tracking-widest text-xs">Tags:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {['Artificial', 'Process', 'Store'].map(tag => (
                                                <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Post Pagination */}
                            <div className="flex flex-col md:flex-row justify-between gap-6 py-10 border-y border-gray-100">
                                <Link to="#" className="group max-w-[300px]">
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1 group-hover:-translate-x-1 transition-transform inline-block">← Previous Post</p>
                                    <h5 className="text-secondary font-bold group-hover:text-primary transition-colors">Discovery incommode earnestly no he comm</h5>
                                </Link>
                                <Link to="#" className="group max-w-[300px] md:text-right">
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform inline-block">Next Post →</p>
                                    <h5 className="text-secondary font-bold group-hover:text-primary transition-colors">Consulted admitting is power acuteness.</h5>
                                </Link>
                            </div>

                            {/* Blog Comments */}
                            <div className="space-y-10">
                                <h4 className="text-2xl font-bold text-secondary">2 Comments</h4>
                                <div className="space-y-8">
                                    {/* Main Comment */}
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                                            <img src="https://secure.gravatar.com/avatar/7f9b67468a54953e49e71880650945df?s=80&d=mm&r=g" alt="Avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-bold text-secondary text-lg">Jonathom Doe</h5>
                                                <span className="text-gray-400 text-sm">January 20, 2021</span>
                                            </div>
                                            <p className="text-gray-600 mb-4">Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.</p>
                                            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                <span>↩</span> Reply
                                            </button>
                                        </div>
                                    </div>
                                    {/* Nested Comment */}
                                    <div className="flex gap-6 pl-12 md:pl-24">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                                            <img src="https://secure.gravatar.com/avatar/52ee8ba3612cc157691f8f5f7915ac2b?s=80&d=mm&r=g" alt="Avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-bold text-secondary text-lg">Spart Lee</h5>
                                                <span className="text-gray-400 text-sm">January 20, 2021</span>
                                            </div>
                                            <p className="text-gray-600 mb-4">Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off.</p>
                                            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                <span>↩</span> Reply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comment Form */}
                            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12">
                                <h4 className="text-2xl font-bold text-secondary mb-10">Leave a Comment</h4>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <textarea
                                            placeholder="Your Comment"
                                            rows={6}
                                            className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 bg-white"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 bg-white"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 bg-white"
                                        />
                                    </div>
                                    <div className="md:col-span-2 mt-4">
                                        <button className="btn-primary w-full md:w-auto px-12 py-4">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Side: Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            {/* Search */}
                            <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                                <h4 className="text-xl font-bold text-secondary mb-6 relative">
                                    Search
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search Here..."
                                        className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 bg-white"
                                    />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold">🔍</button>
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="p-8 border border-gray-100 rounded-[32px]">
                                <h4 className="text-xl font-bold text-secondary mb-8 relative">
                                    Recent Posts
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h4>
                                <div className="space-y-6">
                                    {[
                                        'Consulted admitting is power acuteness.',
                                        'Unsatiable entreaties may collecting',
                                        'Discovery incommode earnestly no he comm'
                                    ].map((post, idx) => (
                                        <Link key={idx} to="#" className="group block">
                                            <h5 className="text-gray-600 font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                {post}
                                            </h5>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                                <h4 className="text-xl font-bold text-secondary mb-8 relative">
                                    Categories
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h4>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Analysis', count: 1 },
                                        { name: 'Firewall', count: 1 },
                                        { name: 'IT Solutions', count: 1 },
                                        { name: 'Security', count: 2 },
                                        { name: 'Technology', count: 1 }
                                    ].map((cat, idx) => (
                                        <Link key={idx} to="#" className="flex items-center justify-between group">
                                            <span className="text-gray-600 font-semibold group-hover:text-primary transition-colors">{cat.name}</span>
                                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                {cat.count}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="p-8 border border-gray-100 rounded-[32px]">
                                <h4 className="text-xl font-bold text-secondary mb-8 relative">
                                    Tags
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Analysis', 'Artificial', 'Data', 'Process', 'Software', 'Store'].map(tag => (
                                        <span key={tag} className="px-5 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-colors cursor-pointer border border-gray-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;

