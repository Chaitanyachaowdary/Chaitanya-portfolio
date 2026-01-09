import React from 'react';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";
import { Briefcase } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import HackerText from '../components/HackerText';

const Experience = () => {
    const experiences = [
        {
            role: "Software Engineer",
            company: "Capgemini",
            period: "Jan 2024 - Present",
            desc: "Developing enterprise Java Full Stack applications for banking clients. Maintained microservices using Spring Boot & Hibernate. Optimized SQL queries in PostgreSQL reducing API response times by 35%. Built responsive React modules for loan origination workflows."
        },
        {
            role: "B.Tech (ECE)",
            company: "Jawaharlal Nehru Technological University Anantapur",
            period: "Dec 2021 - Mar 2025",
            desc: "Graduated with 8.68 CGPA. Focused on Electronics and Communication Engineering with a strong foundation in programming and systems."
        }
    ];

    return (
        <section id="experience" className="py-20 px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center font-display text-white relative z-10">
                    Experience & Education
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <RevealOnScroll
                            key={index}
                            delay={index * 0.2}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-gray-400 group-hover:text-primary group-hover:border-primary/50 transition-colors">
                                <Briefcase size={18} />
                            </div>

                            {/* Content */}
                            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={400} className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-xl h-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{exp.period}</span>
                                    </div>
                                    <div className="text-sm font-medium text-gray-400 mb-4">{exp.company}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </Tilt>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
