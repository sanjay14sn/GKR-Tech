import React from 'react';

const Team: React.FC = () => {
    const members = [
        { id: 1, name: 'Alex Johnson', role: 'CEO & Founder', img: 'https://i.pravatar.cc/300?img=68' },
        { id: 2, name: 'Sarah Miller', role: 'Lead Developer', img: 'https://i.pravatar.cc/300?img=47' },
        { id: 3, name: 'David Smith', role: 'UX Designer', img: 'https://i.pravatar.cc/300?img=12' },
        { id: 4, name: 'Emma Wilson', role: 'Marketing Head', img: 'https://i.pravatar.cc/300?img=26' },
    ];

    return (
        <div className="pt-[80px]">
            <section className="py-20 bg-light-bg text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Expert Team</span>
                    <h1 className="text-4xl md:text-[56px] font-bold mt-4 mb-4 text-secondary">Meet Our Professionals</h1>
                    <p className="text-xl max-w-[600px] mx-auto text-gray-600">The talented people behind our success and your business growth.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map(member => (
                        <div key={member.id} className="group relative bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all animate-up">
                            <div className="relative overflow-hidden aspect-square">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-white transition-all flex items-center justify-center text-xs font-bold">FB</span>
                                    <span className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-white transition-all flex items-center justify-center text-xs font-bold">TW</span>
                                    <span className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-white transition-all flex items-center justify-center text-xs font-bold">LN</span>
                                </div>
                            </div>
                            <div className="p-8 text-center border border-gray-100 rounded-b-[20px]">
                                <h3 className="text-xl font-bold mb-2 text-secondary">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Team;
