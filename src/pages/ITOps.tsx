import React from 'react';
import {
    Cpu,
    ShieldCheck,
    Cloud,
    Database,
    Monitor,
    Network,
    Zap,
    CheckCircle2,
    Table,
    Layers,
    ArrowRight,
    TrendingDown,
    Users,
    Eye,
    LifeBuoy,
    Lock,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ITOps: React.FC = () => {
    const challenges = [
        {
            challenge: "Rising IT Costs",
            issue: "High Opex due to fragmented vendors and manual ops.",
            impact: "Unified delivery model with automation reduces costs."
        },
        {
            challenge: "Service Desk Overload",
            issue: "Overloaded queues, long MTTR, low CSAT.",
            impact: "GenAI-powered service desk improves responsiveness."
        },
        {
            challenge: "Operational Silos",
            issue: "Teams operate in isolation.",
            impact: "Integrated Ops with centralized visibility."
        },
        {
            challenge: "Cyber Risk",
            issue: "Credential sprawl, unpatched systems.",
            impact: "Cyber hygiene automation and zero-trust hardening."
        },
        {
            challenge: "Legacy Systems",
            issue: "Outdated platforms slowing transformation.",
            impact: "Legacy-aware ops maintain uptime during transitions."
        },
        {
            challenge: "Poor Observability",
            issue: "Reactive ops, late alerts.",
            impact: "AI observability and automated RCA workflows."
        },
        {
            challenge: "Inflexible Support Models",
            issue: "Static headcount, non-dynamic scaling.",
            impact: "Elastic delivery model scales by demand."
        },
        {
            challenge: "Cloud and FinOps Immaturity",
            issue: "Cloud spend sprawl, no tagging discipline.",
            impact: "FinOps observability and cost controls."
        },
        {
            challenge: "Automation Challenges",
            issue: "Engineers stuck on toil work, no orchestration framework.",
            impact: "Centralized automation library and auto-fulfillment."
        },
        {
            challenge: "Regulatory Compliance",
            issue: "Manual control checks, failed audits.",
            impact: "Automated compliance artifacts and real-time audit readiness."
        }
    ];

    const infraCatalog = [
        { title: "Service Desk", desc: "Support ensuring client staff stays productive through issue resolution and IT operations.", icon: <LifeBuoy className="text-blue-500" /> },
        { title: "End User Compute", desc: "Consistent, secure user experiences across all employee devices and locations.", icon: <Monitor className="text-blue-500" /> },
        { title: "Network & NOC", desc: "Proactive monitoring and support to keep systems always connected with high uptime.", icon: <Network className="text-blue-500" /> },
        { title: "Database", desc: "Optimizing interoperability, performance, availability, and data integrity.", icon: <Database className="text-blue-500" /> },
        { title: "Cybersecurity", desc: "Layered security to prevent attacks, minimize risk, and maintain business trust.", icon: <Lock className="text-blue-500" /> },
        { title: "Cloud", desc: "Migration and management across public, private, and hybrid environments.", icon: <Cloud className="text-blue-500" /> },
        { title: "Products & Apps Support", desc: "Ensuring apps run fast, secure, and reliable—from app to infrastructure.", icon: <Cpu className="text-blue-500" /> }
    ];

    const comparison = [
        { label: "Ownership", traditional: "Siloed Working Towers", aiLed: "End-to-End ownership" },
        { label: "Approach", traditional: "Reactive / No Preventive Maintenance", aiLed: "Low capital outlay & TCO" },
        { label: "Discovery", traditional: "3rd party tools (Avg 80% accuracy)", aiLed: "Unified view of operations" },
        { label: "Costs/SLA", traditional: "People dependent / Higher Opex", aiLed: "Centralized SLAs / Process Standards" },
        { label: "Incidents", traditional: "Delayed RCA", aiLed: "Self-service / AI Automation reduction" }
    ];

    const medallionModels = [
        {
            level: "Bronze",
            scope: "Catch & Dispatch only",
            sizing: "No L1 / Minimal L1",
            platform: "Automation Platform",
            color: "bg-orange-100 text-orange-800 border-orange-200"
        },
        {
            level: "Silver",
            scope: "Bronze + SOP driven Automation",
            sizing: "L1 + L2 (Shared Model)",
            platform: "Automation Platform",
            color: "bg-slate-200 text-slate-800 border-slate-300"
        },
        {
            level: "Gold",
            scope: "Complete AI Led Managed Services",
            sizing: "L1 + L2 (Shared Model)",
            platform: "AI Platform",
            color: "bg-yellow-100 text-yellow-800 border-yellow-300"
        },
        {
            level: "Platinum",
            scope: "Complete Dedicated AI Led Managed Services",
            sizing: "L1 + L2 (Dedicated Model)",
            platform: "AI Platform",
            color: "bg-blue-100 text-blue-800 border-blue-300"
        }
    ];

    return (
        <div className="pt-[80px] font-sans overflow-x-hidden">
            {/* Header / Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-[#002d5b] to-[#004a99] text-white">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in">
                        Empowering Modern Enterprises
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        Why <span className="text-blue-400">ITOPS?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-12">
                        Transform your IT operations from a cost center into a strategic engine of growth with AI-led managed services.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                            <TrendingDown className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Reduced Costs</h3>
                            <p className="text-white text-sm">Unified delivery model with automation significantly lowers high Opex.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                            <Zap className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">GenAI Service Desk</h3>
                            <p className="text-white text-sm">Improve responsiveness, MTTR, and CSAT with AI-powered support queues.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                            <Eye className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Centralized Visibility</h3>
                            <p className="text-white text-sm">Eliminate operational silos with integrated ops and real-time observability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Challenges Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#002d5b] mb-4">Top Business Challenges</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We address the most critical pain points in modern IT management.</p>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
                    </div>

                    <div className="overflow-x-auto rounded-[32px] shadow-xl border border-gray-100 bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#002d5b] text-white">
                                    <th className="px-8 py-6 font-bold text-sm uppercase tracking-wider">Challenge</th>
                                    <th className="px-8 py-6 font-bold text-sm uppercase tracking-wider">Issue</th>
                                    <th className="px-8 py-6 font-bold text-sm uppercase tracking-wider">Impact of ITOps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {challenges.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                        <td className="px-8 py-6 font-bold text-[#002d5b]">{item.challenge}</td>
                                        <td className="px-8 py-6 text-gray-500 text-sm">{item.issue}</td>
                                        <td className="px-8 py-6 text-blue-600 font-medium text-sm flex items-center gap-2">
                                            <CheckCircle2 size={16} /> {item.impact}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Service Catalog Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[100px]"></div>
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">What We Deliver</span>
                        <h2 className="text-4xl font-extrabold text-[#002d5b] mt-4 mb-8">ITOPS – Service Catalog</h2>
                        <p className="text-gray-500 max-w-2xl text-lg">Our comprehensive portfolio designed to modernize and secure your global infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {infraCatalog.map((item, idx) => (
                                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                                    <div className="mb-4">{item.icon}</div>
                                    <h4 className="text-lg font-bold text-[#002d5b] mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-12">
                            <div className="bg-[#002d5b] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-600/40 transition-colors"></div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                    <ShieldCheck className="text-blue-400" /> Security Ops Selection
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-100/80 text-[10px] leading-tight font-medium">
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-white border-b border-white/10 pb-1">Security Strategy</h4>
                                        <ul className="space-y-1.5 list-disc pl-4">
                                            <li>Datacentre & Network Security</li>
                                            <li>Data Protection & Privacy Framework</li>
                                            <li>Data Classification & Flow Assessment</li>
                                            <li>DLP Incident Analytics</li>
                                            <li>Enterprise Security Architecture</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-white border-b border-white/10 pb-1">GRC & Risk</h4>
                                        <ul className="space-y-1.5 list-disc pl-4">
                                            <li>Software Composition Analysis</li>
                                            <li>ISO / PCI / SAMA / GDPR</li>
                                            <li>IT Risk Management & Mitigation</li>
                                            <li>Third Party Risk Assessment</li>
                                            <li>User Training & Awareness</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold text-white border-b border-white/10 pb-1">Threat & Operations</h4>
                                        <ul className="space-y-1.5 list-disc pl-4">
                                            <li>SOC Consulting & 24/7 Operations</li>
                                            <li>Alert Tuning & SIEM Health Check</li>
                                            <li>Threat Intelligence & Hunting</li>
                                            <li>Vulnerability Assessment (VA/PT)</li>
                                            <li>IAM & Privileged Access (PAM)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-100 p-10 rounded-[40px] border border-gray-200 shadow-sm">
                                <h3 className="text-2xl font-bold text-[#002d5b] mb-8 flex items-center gap-4">
                                    <Globe className="text-blue-600" /> Global Capability Center
                                </h3>
                                <div className="flex gap-4">
                                    <span className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold text-sm">BOT Model</span>
                                    <span className="px-6 py-2 bg-white text-[#002d5b] border border-gray-300 rounded-full font-bold text-sm">GCC Staffing</span>
                                </div>
                                <p className="mt-8 text-gray-500 leading-relaxed text-sm">
                                    End-to-end support for establishing and staffing your Global Capability Center, ensuring seamless integration with your core business.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-[40px] text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
                                    <Cloud className="text-blue-200" /> Cloud Ops Excellence
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                        <p className="font-bold mb-1">Migration & Modernization</p>
                                        <p className="text-white">AI-driven discovery and blueprints.</p>
                                    </div>
                                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                        <p className="font-bold mb-1">Predictive Disaster Recovery</p>
                                        <p className="text-white">AI-powered risk anticipation.</p>
                                    </div>
                                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                        <p className="font-bold mb-1">Intelligent SaaS Solutions</p>
                                        <p className="text-white">Context-aware and scalable.</p>
                                    </div>
                                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                                        <p className="font-bold mb-1">AI-Enhanced DevOps/FinOps</p>
                                        <p className="text-white">Automated CI/CD and cost controls.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Different Section */}
            <section className="py-24 bg-slate-900 text-white rounded-[100px] my-24 container mx-auto px-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3b82f6 75%), linear-gradient(-45deg, transparent 75%, #3b82f6 75%)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 0 20px, 20px 20px, 20px 0' }}></div>
                </div>

                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4 text-white">Traditional vs AI-Led</h2>
                        <p className="text-blue-200/60 max-w-2xl mx-auto">See how AI-led managed services outperform traditional models.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/10 overflow-hidden">
                        <div className="grid grid-cols-3 bg-white/10 p-6 font-bold uppercase tracking-tighter text-xs text-blue-300">
                            <div>Feature</div>
                            <div>Traditional Managed</div>
                            <div>AI-Led Managed</div>
                        </div>
                        {comparison.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors">
                                <div className="font-bold text-sm">{item.label}</div>
                                <div className="text-blue-100/50 text-sm italic">{item.traditional}</div>
                                <div className="text-blue-400 font-bold text-sm">{item.aiLed}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medallion Model Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#002d5b] mb-4">Medallion Models</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Choose the service level that perfectly matches your organizational needs.</p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {medallionModels.map((item, idx) => (
                        <div key={idx} className={`p-8 rounded-[40px] border-2 shadow-sm flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl ${item.color}`}>
                            <Layers className="w-12 h-12 mb-6" />
                            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{item.level}</h3>
                            <div className="space-y-6 w-full">
                                <div className="pb-4 border-b border-black/5">
                                    <p className="text-[10px] uppercase font-bold opacity-50 mb-1">Scope</p>
                                    <p className="text-sm font-bold">{item.scope}</p>
                                </div>
                                <div className="pb-4 border-b border-black/5">
                                    <p className="text-[10px] uppercase font-bold opacity-50 mb-1">Sizing</p>
                                    <p className="text-sm font-bold">{item.sizing}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold opacity-50 mb-1">Platform</p>
                                    <p className="text-sm font-bold flex items-center justify-center gap-2">
                                        <Zap size={14} /> {item.platform}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 text-white mt-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold mb-8">Ready to Transition to AI-Led Ops?</h2>
                    <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
                        Join the leading enterprises that have reduced high Opex and achieved unified visibility.
                    </p>
                    <Link to="/contact" className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3 w-fit mx-auto">
                        Get Started Today <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ITOps;
