'use client';

import { motion } from 'framer-motion';

export default function BenefitCard({ icon: Icon, title, index = 0 }) {
    return (
        <motion.div
            className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="text-accent" size={24} />
            </div>
            <div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
            </div>
        </motion.div>
    );
}
