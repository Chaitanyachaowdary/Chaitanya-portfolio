import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black/20 backdrop-blur-md border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-8 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <h2 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-2">
                            Chaitanya Yelamasetty.
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Java Full Stack Software Engineer passionate about building scalable enterprise applications and responsive web interfaces.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-8 text-sm font-medium">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-400 hover:text-white hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6">
                        <a href="https://github.com/Chaitanyachaowdary" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:ychaitanya2025@gmail.com" className="text-gray-400 hover:text-white hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Chaitanya Yelamasetty. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
