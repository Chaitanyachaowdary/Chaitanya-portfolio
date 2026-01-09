import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
