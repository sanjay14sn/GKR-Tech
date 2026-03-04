import React from 'react';
import blogImg from '../assets/blog-1.png';

const Blog: React.FC = () => {
    const posts = [
        { id: 1, title: 'Unsatiable entreaties may collecting', date: 'January 20, 2021', author: 'admin', img: "https://wpriverthemes.com/tandaelem/wp-content/uploads/2021/01/blog2-600x400.jpeg" },
        { id: 2, title: 'Consulted admitting is power acuteness.', date: 'Feb 25, 2026', author: 'admin', img: blogImg },
        { id: 3, title: 'Discovery incommode earnestly no he comm', date: 'Feb 20, 2026', author: 'admin', img: blogImg },
    ];

    return (
        <div className="pt-[100px]">
            <section className="py-20 bg-light-bg text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Our Blog</span>
                    <h1 className="text-4xl md:text-[56px] font-bold mt-4 mb-4 text-secondary">Latest Tech Insights</h1>
                    <p className="text-xl max-w-[600px] mx-auto text-gray-600">Stay updated with the latest trends and architectural patterns in the tech world.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map(post => (
                        <article key={post.id} className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-100 group animate-up">
                            <div className="relative overflow-hidden aspect-video">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <div className="flex gap-6 text-sm text-gray-500 mb-4 items-center">
                                    <span className="flex items-center gap-1.5 font-medium">📅 {post.date}</span>
                                    <span className="flex items-center gap-1.5 font-medium">👤 {post.author}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-secondary line-clamp-2 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-2">
                                    Exploring the transformative power of artificial intelligence
                                    in modern business operations and strategy...
                                </p>
                                <a href={`/blog/${post.id}`} className="text-primary font-bold hover:underline transition-all">Read Article →</a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
