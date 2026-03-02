import React from 'react';
import itImg from '../assets/service-it.png';
import securityImg from '../assets/service-security.png';
import cloudImg from '../assets/service-cloud.png';

const Services: React.FC = () => {
    const allServices = [
        { id: 1, title: 'IT Management', desc: 'Secure and manage your IT infrastructure.', img: itImg },
        { id: 2, title: 'Cyber Security', desc: 'Advanced protection for your digital assets.', img: securityImg },
        { id: 3, title: 'Cloud Solutions', desc: 'Scalable cloud computing and storage.', img: cloudImg },
        { id: 4, title: 'Software Dev', desc: 'Custom software tailored to your needs.', img: itImg },
        { id: 5, title: 'UI/UX Designs', desc: 'Beautiful and functional user interfaces.', img: cloudImg },
        { id: 6, title: 'App Development', desc: 'Mobile apps for iOS and Android.', img: securityImg },
    ];

    return (
        <div className="pt-[80px]">
            <section className="py-20 bg-light-bg text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <span className="badge">Our Services</span>
                    <h1 className="text-[56px] font-bold mt-4 mb-4 text-secondary">Quality IT Solutions</h1>
                    <p className="text-xl max-w-[600px] mx-auto text-gray-600">We provide a wide range of services to help your business thrive.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map(service => (
                        <div key={service.id} className="bg-white p-10 rounded-[20px] shadow-md hover:-translate-y-2 transition-transform hover:shadow-xl border border-gray-100 flex flex-col items-center text-center animate-up">
                            <div className="w-20 h-20 mb-8 flex items-center justify-center">
                                <img src={service.img} alt={service.title} className="max-w-full max-h-full object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.desc}</p>
                            <a href={`/services/${service.id}`} className="text-primary font-bold hover:underline transition-all">View Details →</a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-[40px] font-bold mb-6 text-white">Need a custom solution?</h2>
                    <p className="text-xl mb-10 opacity-90 text-white">Our experts are ready to build exactly what you need.</p>
                    <button className="btn bg-white text-primary hover:bg-light-bg hover:scale-105 transition-all">Get a Free Quote</button>
                </div>
            </section>
        </div>
    );
};

export default Services;
