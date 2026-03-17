'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, light = false, center = true }) {
    return (
        <motion.div
            className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
        >
            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? 'text-white' : 'text-primary'
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`text-base md:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''
                        } ${light ? 'text-gray-300' : 'text-gray-500'}`}
                >
                    {subtitle}
                </p>
            )}
            <div className={`mt-6 flex ${center ? 'justify-center' : ''}`}>
                <div className="w-20 h-1 bg-accent rounded-full" />
            </div>
        </motion.div>
    );
}
