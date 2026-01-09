import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 pointer-events-none">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-auto"
            >
                <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                    Chaitanya.
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="pointer-events-auto bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-6"
            >
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white hover:text-primary transition-colors text-sm font-medium">
                        {item}
                    </a>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-auto flex items-center gap-4"
            >
                <a href="https://github.com/Chaitanyachaowdary" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:ychaitanya2025@gmail.com" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-all border border-white/5">
                    Let&apos;s Talk
                </a>
            </motion.div>
        </nav>
    );
};

export default Navbar;
