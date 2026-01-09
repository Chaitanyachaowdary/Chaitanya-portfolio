import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import HackerText from '../components/HackerText';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log("Form Submitted:", formData);
            alert("Message Sent! (This is a demo, no email was actually sent)");
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold mb-16 text-center font-display">
                        <HackerText text="Get In Touch" />
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <RevealOnScroll>
                        <h3 className="text-2xl font-bold mb-6">Let&apos;s build something amazing together.</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I&apos;m currently available for freelance work or full-time opportunities.
                            If you have a project that needs some creative touch, I&apos;d love to hear about it.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:ychaitanya2025@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail size={18} />
                                </div>
                                ychaitanya2025@gmail.com
                            </a>
                            <div className="flex gap-4 mt-8">
                                <a href="https://github.com/Chaitanyachaowdary" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:ychaitanya2025@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll className="h-full">
                        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400} className="contact-card">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                        <textarea
                                            rows="4"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </Tilt>
                    </RevealOnScroll>
                </div>
            </div >
        </section >
    );
};

export default Contact;
