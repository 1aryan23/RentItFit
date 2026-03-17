'use client';

import { motion } from 'framer-motion';
import {
    HiEye,
    HiLightBulb,
    HiShieldCheck,
    HiCurrencyDollar,
    HiDocumentText,
    HiChat,
    HiUserGroup,
    HiCheckCircle,
} from 'react-icons/hi';
import SectionHeading from '@/components/SectionHeading';

export default function AboutPage() {
    const trustReasons = [
        {
            icon: HiShieldCheck,
            title: 'Verified Tenant Screening',
            description:
                'Thorough background checks and identity verification for every tenant.',
        },
        {
            icon: HiCurrencyDollar,
            title: 'Professional Rent Management',
            description:
                'Automated rent collection with transparent tracking and timely owner payouts.',
        },
        {
            icon: HiDocumentText,
            title: 'Legal Documentation',
            description:
                'Professional rental agreements and compliance documentation handled for you.',
        },
        {
            icon: HiChat,
            title: 'Transparent Communication',
            description:
                'Regular updates, monthly reports, and direct access to your property manager.',
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                </div>
                <div className="container-max px-4 md:px-8 relative">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-accent">RentItFit</span>
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We&apos;re on a mission to make property ownership truly passive —
                            professional management, maximum returns, zero stress.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none">
                        <path d="M0 60L1440 60L1440 20C1440 20 1140 0 720 0C300 0 0 20 0 20L0 60Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-10 border border-accent/10"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                <HiEye className="text-accent" size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                RentItFit aims to simplify property ownership through professional
                                rental management. We envision a world where owning rental
                                property is as simple as owning a mutual fund — you invest, and we
                                handle everything else to deliver consistent, optimized returns.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-10 border border-primary/10"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <HiLightBulb className="text-primary" size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To help property owners maximize rental income while completely
                                removing the stress of day-to-day management. From tenant
                                screening to maintenance, from rent collection to legal
                                compliance — we handle it all so you enjoy truly passive income.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Trust Us */}
            <section className="section-padding bg-secondary">
                <div className="container-max">
                    <SectionHeading
                        title="Why Property Owners Trust Us"
                        subtitle="We earn trust through transparency, professionalism, and consistent results."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {trustReasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                                    <reason.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Values */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="max-w-4xl mx-auto text-center">
                        <SectionHeading
                            title="Our Core Values"
                            subtitle="Every decision we make is guided by these principles."
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { title: 'Transparency', desc: 'Complete visibility into every aspect of your property management.' },
                                { title: 'Reliability', desc: 'Consistent, on-time performance you can count on every month.' },
                                { title: 'Excellence', desc: 'We go above and beyond to maximize your property\'s potential.' },
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    className="p-6 rounded-2xl bg-secondary"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <HiCheckCircle className="text-accent mx-auto mb-3" size={32} />
                                    <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                                    <p className="text-gray-500 text-sm">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
