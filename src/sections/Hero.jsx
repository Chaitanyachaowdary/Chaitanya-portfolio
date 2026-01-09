import React from 'react';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";
import { ArrowRight, Github, Linkedin, Mail, ArrowDown, Eye } from 'lucide-react';
import HackerText from '../components/HackerText';
import RevealOnScroll from '../components/RevealOnScroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
            {/* Background Composition */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-left order-2 lg:order-1"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Hi, I&apos;m</h3>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                            <HackerText text="Chaitanya Yelamasetty" />
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                        <HackerText text="Java Full Stack Software Engineer" />
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                        Passionate about building scalable enterprise applications and responsive web interfaces.
                        Specialized in Spring Boot microservices and React.js modern frontends.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a href="#projects" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
                            View My Work
                            <ArrowRight size={18} />
                        </a>
                        <a href="/resume.html" target="_blank" className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-8 py-3.5 rounded-lg font-bold transition-all flex items-center gap-2 hover:-translate-y-1">
                            View CV
                            <Eye size={18} />
                        </a>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/Chaitanyachaowdary" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={32} />
                        </a>
                        <a href="mailto:ychaitanya2025@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={32} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400} className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* 3D Background Animation Elements */}
                        <div className="absolute -inset-6 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '10s' }} />
                        <div className="absolute -inset-2 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

                        <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-primary/20 transition-transform duration-500 hover:scale-105" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                            <img
                                src="/profile.jpg"
                                alt="Chaitanya"
                                className="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 hover:scale-110"
                                style={{ transform: 'translateZ(50px)' }}
                            />
                        </div>
                    </Tilt>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 transform -translate-x-1/2 left-1/2 text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
