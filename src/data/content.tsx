import React from 'react';
import { ShieldCheck, Settings, Activity, Cloud, Server } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    icon: React.ReactNode;
    desc: string;
    features: string[];
    details: string;
    benefits: string[];
    image: string;
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    author: string;
    category: string;
    description: string;
    content: string;
    img: string;
    tags: string[];
}

export const services: Service[] = [
    {
        id: "consulting-advisory",
        title: "Consulting & Advisory",
        icon: <ShieldCheck size={40} strokeWidth={1.5} />,
        desc: "Strategy first. Security always. We provide vCISO services, compliance readiness (ISO, NESA, SAMA), and deep-dive risk assessments.",
        features: ["vCISO", "Compliance", "Risk Assessment"],
        details: "In an era of increasing digital complexity, having a robust security strategy is not just an option—it's a necessity. GKR Technology Solutions offers comprehensive consulting and advisory services tailored to the unique regulatory landscape of the GCC region. Our experts work as your strategic partners, helping you navigate compliance requirements while building a resilient security posture that supports your business goals.",
        benefits: ["Reduced Regulatory Risk", "Strategic Security Roadmap", "Regional Compliance Expertise", "Independent Risk Assessment"],
        image: "/src/assets/consulting-work.png"
    },
    {
        id: "build-implementation",
        title: "Build & Implementation",
        icon: <Settings size={40} strokeWidth={1.5} />,
        desc: "Engineering resilience through secure, scalable infrastructure. From Zero Trust/SD-WAN to Datacenter cabling and IAM deployment.",
        features: ["Zero Trust", "IAM/PAM", "Firewall Hardening"],
        details: "Moving from strategy to execution requires deep technical expertise and a focus on long-term sustainability. We specialize in building secure-by-design infrastructures that scale with your business. Whether it's deploying Zero Trust architectures, implementing Identity and Access Management, or ensuring your datacenter's physical and logical security, our implementation team delivers excellence without compromise.",
        benefits: ["Secure-by-Design Infrastructure", "Scalable Technology Stack", "Optimized Network Performance", "Reduced Deployment Downtime"],
        image: "/src/assets/datacenter-work.png"
    },
    {
        id: "operations-bau",
        title: "Operations & BAU",
        icon: <Activity size={40} strokeWidth={1.5} />,
        desc: "24/7 Managed SOC, threat hunting, and infrastructure monitoring. We manage the complexity so you can focus on growth.",
        features: ["Managed SOC", "Incident Response", "Backup/DRaaS"],
        details: "Continuous vigilance is the backbone of modern business continuity. Our Operations and Business-As-Usual (BAU) services provide the 24/7 monitoring and management your infrastructure needs. From our regional SOC to on-site support, we ensure your systems remain secure, optimized, and available, allowing your internal teams to focus on core business innovation.",
        benefits: ["24/7 Security Vigilance", "Proactive Threat Hunting", "Rapid Incident Response", "Expert Managed Support"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "sovereign-cloud",
        title: "Sovereign Cloud",
        icon: <Cloud size={40} strokeWidth={1.5} />,
        desc: "Landing zones, secure migrations, and compliance for NESA, NCA, and regional data residency requirements.",
        features: ["Data Residency", "Cloud Security", "Multi-Cloud"],
        details: "Data sovereignty is a critical requirement for GCC enterprises. Our Sovereign Cloud services help you leverage the power of the cloud while maintaining strict adherence to regional data residency laws and security frameworks. We design and implement landing zones that are secure, compliant, and ready for your most sensitive workloads.",
        benefits: ["In-Region Data Compliance", "Enhanced Cloud Security", "Platform Agnostic Strategy", "Optimized Cloud Spends"],
        image: "/src/assets/cloud-work.png"
    },
    {
        id: "datacenter-lifecycle",
        title: "Datacenter Lifecycle",
        icon: <Server size={40} strokeWidth={1.5} />,
        desc: "From greenfield design to decommission. Power, cooling, rack/stack, and hardware deployment with 24/7 monitoring.",
        features: ["Facility Design", "Rack & Stack", "24/7 Monitoring"],
        details: "The physical foundation of your IT must be as resilient as the digital layer. GKR provides end-to-end datacenter lifecycle management. From initial facility design and environmental optimization to physical security and hardware decommissioning, we manage every stage to ensure your critical infrastructure operates with maximum efficiency and reliability.",
        benefits: ["Optimized PUE (Power Efficiency)", "Enhanced Physical Security", "Maximized Rack Density", "Seamless Decommissioning"],
        image: "/src/assets/datacenter-work.png"
    }
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'GCC Sovereign Cloud: Compliance vs. Innovation',
        date: 'March 01, 2026',
        author: 'Tech Strategy Team',
        category: 'Cloud',
        description: 'Navigating the delicate balance between regional data residency requirements and the rapid pace of global cloud innovation.',
        content: `The Gulf region is witnessing a monumental shift in how data is handled. With the introduction of NESA in the UAE and NCA frameworks in Saudi Arabia, the concept of a "Sovereign Cloud" has moved from a theoretical discussion to a boardroom priority.

Enterprises often find themselves stuck between two opposing forces: the desire to innovate using global cloud-native services and the absolute necessity to keep data within regional borders. This post explores the middle ground—Hybrid and Sovereign Cloud architectures that provide the best of both worlds.

Key takeaways include:
- Understanding the scope of NCA and NESA requirements.
- How Sovereign Cloud landing zones simplify compliance.
- Strategies for data classification that drive innovation without risking regulatory penalties.`,
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        tags: ['Cloud', 'Sovereignty', 'GCC', 'Compliance']
    },
    {
        id: 2,
        title: 'Zero Trust for Legacy Datacenters',
        date: 'Feb 25, 2026',
        author: 'Security Arch',
        category: 'Security',
        description: 'How to implement modern identity-based security perimeters around traditional on-premise infrastructure without a total rebuild.',
        content: `Most regional organizations still rely on legacy datacenters built with a "castle and moat" security mindset. However, in today's threat landscape, the perimeter is porous. Zero Trust is no longer a buzzword; it's the required standard for any modern enterprise.

But how do you apply Zero Trust principles—NEVER trust, ALWAYS verify—to systems that weren't designed for it? We look at practical implementation steps for identity-based segmentation and PAM (Privileged Access Management) for on-premise environments.

We discuss:
- Why traditional VPNs are becoming your biggest security risk.
- The 5 pillars of the Zero Trust Maturity Model.
- Micro-segmentation: Securing internal traffic (East-West traffic).`,
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        tags: ['Zero Trust', 'Security', 'Infrastructure', 'PAM']
    },
    {
        id: 3,
        title: 'The State of Ransomware in GCC 2024-2026',
        date: 'Feb 20, 2026',
        author: 'Cyber Analyst',
        category: 'Compliance',
        description: 'An in-depth analysis of evolving threat vectors targeting regional enterprises and the strategic shift toward proactive defense.',
        content: `Ransomware attacks are becoming more sophisticated, frequently bypassing traditional signature-based detection. Our analysts have observed a 40% increase in targeted attacks against the region's energy and finance sectors over the past two years.

This post breaks down the current threat landscape and explains why "Detection and Response" is superseding "Prevention" in modern security budgets. We also provide a checklist for incident response readiness based on regional best practices.

Inside this report:
- The rise of RaaS (Ransomware as a Service).
- Why immutable backups are your last line of defense.
- Compliance reporting requirements after a major security incident.`,
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        tags: ['Ransomware', 'Cybersecurity', 'Threat Intel', 'Regional']
    },
    {
        id: 4,
        title: 'Edge Computing: The Future of Smart Cities',
        date: 'Feb 12, 2026',
        author: 'IoT Specialist',
        category: 'Innovation',
        description: 'Reducing latency for critical infrastructure by moving compute power closer to the sensors.',
        content: `As cities like NEOM and Dubai Smart City evolve, the sheer volume of data generated by urban infrastructure is overwhelming traditional cloud models. Edge Computing solves this by processing data at the source.

From autonomous traffic management to real-time utilities monitoring, the "Edge" is where the most critical decisions are made. This article covers the architecture required to support thousands of edge nodes securely and efficiently.

Future trends explored:
- 5G integration with Edge Computing nodes.
- AI at the Edge: Real-time video analytics for safety.
- Securing the IoT supply chain for smart city projects.`,
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        tags: ['IoT', 'Edge Computing', 'Smart Cities', '5G']
    },
];
