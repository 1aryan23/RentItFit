'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
    return (
        <motion.div
            className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover cursor-default"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Icon
                    className="text-accent group-hover:text-white transition-colors duration-300"
                    size={28}
                />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}
