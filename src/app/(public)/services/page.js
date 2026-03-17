'use client';

import { motion } from 'framer-motion';
import {
    HiShieldCheck,
    HiCurrencyDollar,
    HiCash,
    HiHome,
    HiDocumentText,
    HiTrendingUp,
    HiLockClosed,
} from 'react-icons/hi';
import SectionHeading from '@/components/SectionHeading';

const services = [
    {
        icon: HiShieldCheck,
        title: 'Tenant Verification',
        description:
            'Our rigorous tenant screening process ensures only reliable, verified tenants occupy your property.',
        features: [
            'Identity verification & background checks',
            'Employment and income verification',
            'Rental history analysis',
            'Reference checks from previous landlords',
            'Credit score assessment',
        ],
    },
    {
        icon: HiCurrencyDollar,
        title: 'Rent Collection',
        description:
            'Hassle-free rent collection with automated reminders and transparent tracking for property owners.',
        features: [
            'Automated monthly rent collection',
            'Payment reminders to tenants',
            'Late payment follow-ups',
            'Transparent payment tracking dashboard',
            'Timely owner payout processing',
        ],
    },
    {
        icon: HiCash,
        title: 'Assured Rental Guarantee',
        description:
            'Enjoy stable, predictable rental income with our assured rental guarantee program.',
        features: [
            'Guaranteed monthly rental income',
            'Protection against vacancies',
            'Fixed income regardless of occupancy status',
            'Risk-free property ownership',
            'Stable cash flow planning',
        ],
    },
    {
        icon: HiHome,
        title: 'Monthly Property Management',
        description:
            'End-to-end property management covering everything from tenant communication to maintenance.',
        features: [
            'Regular property inspections',
            'Tenant communication management',
            'Maintenance coordination',
            'Vendor management for repairs',
            'Monthly status reports to owners',
        ],
    },
    {
        icon: HiDocumentText,
        title: 'Agreement & Documentation',
        description:
            'Professional legal documentation and rental agreements that protect your interests.',
        features: [
            'Rental agreement drafting',
            'Police verification documentation',
            'Society NOC coordination',
            'Stamp duty and registration support',
            'Legal compliance documentation',
        ],
    },
    {
        icon: HiTrendingUp,
        title: 'Rental Income Optimization',
        description:
            'Data-driven rent analysis to ensure your property generates maximum possible returns.',
        features: [
            'Market rent analysis',
            'Competitive pricing strategy',
            'Property upgrade recommendations',
            'Tenant retention strategies',
            'Periodic rent revision guidance',
        ],
    },
    {
        icon: HiLockClosed,
        title: 'Security Management',
        description:
            'Comprehensive security measures to keep your property and tenants safe.',
        features: [
            'Thorough tenant screening process',
            'Property safety assessments',
            'Emergency response coordination',
            'Security deposit management',
            'Move-in and move-out inspections',
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                </div>
                <div className="container-max px-4 md:px-8 relative">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our <span className="text-accent">Services</span>
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Comprehensive property management solutions designed to maximize
                            your rental income while minimizing your involvement.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none">
                        <path d="M0 60L1440 60L1440 20C1440 20 1140 0 720 0C300 0 0 20 0 20L0 60Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } gap-10 items-center`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Icon / Visual side */}
                                <div className="w-full lg:w-2/5">
                                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-10 flex items-center justify-center border border-accent/10">
                                        <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center">
                                            <service.icon className="text-accent" size={48} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="w-full lg:w-3/5">
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-gray-600 text-sm"
                                            >
                                                <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 bg-accent rounded-full" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
