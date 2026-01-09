import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import HackerText from '../components/HackerText';

const Projects = () => {
    const projects = [
        {
            title: "WhatsApp Clone",
            desc: "Real-time chat app with one-to-one messaging, delivery status, and WebSocket communication.",
            tech: ["React", "WebSocket", "Node.js"],
            color: "from-green-500 to-emerald-500",
            link: "https://github.com/Chaitanyachaowdary/whatsappclone",
            liveDemo: "https://whatsappclone-jet.vercel.app/",
            image: "/projects/whatsapp.png"
        },
        {
            title: "Omnify Technical Blog",
            desc: "Banking Loan Management System technical blog covering architecture, REST APIs, and Security.",
            tech: ["Spring Boot", "Microservices", "JWT"],
            color: "from-blue-600 to-indigo-600",
            link: "https://github.com/Chaitanyachaowdary/omnify-blog-fullstack",
            liveDemo: "#",
            image: "/projects/blog.png"
        },
        {
            title: "Easy Shop E-Commerce",
            desc: "Full-stack shopping app with cart, filtering, authentication, and secure checkout flow.",
            tech: ["React", "Spring Boot", "MySQL"],
            color: "from-orange-500 to-red-500",
            link: "https://github.com/Chaitanyachaowdary/easy_shop-main",
            liveDemo: "https://easy-shop-main.vercel.app/",
            image: "/projects/ecommerce.png"
        },
        {
            title: "ChatGPT Clone",
            desc: "AI-powered chat application with multi-session history and efficient state management.",
            tech: ["React", "OpenAI API", "Tailwind"],
            color: "from-purple-500 to-pink-500",
            link: "https://github.com/Chaitanyachaowdary/ChatWIthAI",
            liveDemo: "https://drive.google.com/file/d/14ihb6-vbyO-imzH3KekO_e4xChCEclSG/view?usp=sharing",
            image: "/projects/chatgpt.png"
        },
        {
            title: "Healthcare Dashboard",
            desc: "Responsive UI dashboard for patient info, appointments, and health metrics monitoring.",
            tech: ["React", "Material UI", "Charts"],
            color: "from-cyan-500 to-blue-500",
            link: "https://github.com/Chaitanyachaowdary/healthcare",
            liveDemo: "https://healthcare-psi-sepia.vercel.app/",
            image: "/projects/healthcare.png"
        },
        {
            title: "AI Grammar Correction",
            desc: "Spring Boot backend for grammar correction using OpenAI API with fallback logic.",
            tech: ["Java", "Spring Boot", "OpenAI"],
            color: "from-rose-500 to-red-500",
            link: "https://github.com/Chaitanyachaowdary/ai-grammar-service",
            liveDemo: "#",
            image: "/projects/ai-grammar.png"
        },
        {
            title: "Travel Explorer",
            desc: "Tourism website featuring various destinations like Paris and New York with modern UI.",
            tech: ["HTML", "CSS", "JavaScript"],
            color: "from-sky-500 to-blue-500",
            link: "https://github.com/Chaitanyachaowdary/travel",
            liveDemo: "https://travel-dun-five.vercel.app/",
            image: "/projects/travel.png"
        },
        {
            title: "Workforce Management",
            desc: "Employee management system backend dashboard built with Java, Spring Boot and Gradle.",
            tech: ["Java", "Spring Boot", "Gradle"],
            color: "from-indigo-500 to-purple-500",
            link: "https://github.com/Chaitanyachaowdary/workforce-mgmt",
            liveDemo: "https://workforce-mgmt.vercel.app/",
            image: "/projects/workforce.png"
        }
    ];

    return (
        <section id="projects" className="py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center font-display text-white relative z-10">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <RevealOnScroll
                            key={i}
                            delay={i * 0.1}
                            className="h-full"
                        >
                            <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors h-full">
                                    {/* Image */}
                                    <div className="h-48 w-full relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity`} />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>

                                        <div className="flex flex-wrap gap-2 mb-6 main">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                                                <Github size={16} /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
