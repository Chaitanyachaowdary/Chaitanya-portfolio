import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import RevealOnScroll from '../components/RevealOnScroll';
import HackerText from '../components/HackerText';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto z-10 relative">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold mb-16 text-center font-display">
                        <HackerText text="My Skills" />
                    </h2>
                </RevealOnScroll>

                <div className="space-y-16">
                    {/* Languages */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-blue-500">Programming Languages</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-purple-500">Frontend Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                                { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
                                { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
                                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                                { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
                                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-green-500">Backend Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                                { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                                { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
                                { name: "JDBC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }, // JDBC uses Java icon as fallback
                                { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
                                { name: "RESTful APIs", icon: "https://cdn-icons-png.flaticon.com/512/8297/8297338.png" },
                                { name: "Microservices", icon: "https://cdn-icons-png.flaticon.com/512/8297/8297338.png" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* Database */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-yellow-500">Database</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* Cloud */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-orange-500">Cloud Platforms</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "AWS (EC2, S3)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                                { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* DevOps & CI/CD */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-red-500">DevOps & CI/CD</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                                { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
                                { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                                { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className={`w-10 h-10 object-contain ${skill.name === "GitHub" || skill.name === "GitHub Actions" ? "brightness-0 invert" : ""
                                                    }`}
                                            />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* Methodologies */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-teal-500">Methodologies</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }, // Using Jira as proxy for Agile/Process
                                { name: "Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
                                { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-primary pl-4 border-l-4 border-pink-500">Tools & Platforms</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                                { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
                                { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
                                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                                { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
                                { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
                                { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
                            ].map((skill, index) => (
                                <Tilt key={index} options={{ max: 25, scale: 1.05, speed: 400 }} className="h-full">
                                    <RevealOnScroll
                                        delay={index * 0.05}
                                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors h-full group"
                                    >
                                        <div className="w-16 h-16 relative flex items-center justify-center bg-dark/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className={`w-10 h-10 object-contain ${skill.name === "GitHub" || skill.name === "GitHub Actions" ? "brightness-0 invert" : ""
                                                    }`}
                                            />
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm">
                                            {skill.name}
                                        </span>
                                    </RevealOnScroll>
                                </Tilt>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
