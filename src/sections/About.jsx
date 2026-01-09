import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import RevealOnScroll from '../components/RevealOnScroll';
import HackerText from '../components/HackerText';

const About = () => {
    return (
        <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
                <RevealOnScroll className="text-center md:text-left rounded-2xl p-8 backdrop-blur-sm">
                    <Tilt options={{ max: 5, scale: 1.01, speed: 400 }}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h2 className="text-4xl font-bold mb-6 font-display text-center">
                                <HackerText text="About Me" />
                            </h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed text-center">
                                I am a Java Full Stack Software Engineer with experience in developing enterprise applications for banking and financial services. I specialize in building scalable microservices with Spring Boot and responsive UIs with React.js.
                            </p>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed text-center">
                                I improve system stability through centralized logging and unit testing, and I&apos;m passionate about optimizing API performance—recently achieving a 35% reduction in response times through query optimization.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                <div className="flex gap-8 mt-6">
                                    <div className="text-center">
                                        <h4 className="text-3xl font-bold text-white mb-1">
                                            <HackerText text="2+" />
                                        </h4>
                                        <span className="text-sm text-gray-400">Years of Experience</span>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-3xl font-bold text-white mb-1">
                                            <HackerText text="5+" />
                                        </h4>
                                        <span className="text-sm text-gray-400">Major Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default About;
