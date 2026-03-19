'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    HiShieldCheck,
    HiCurrencyDollar,
    HiClipboardCheck,
    HiHome,
    HiDocumentText,
    HiTrendingUp,
    HiLockClosed,
    HiUserGroup,
    HiChartBar,
    HiCog,
    HiBadgeCheck,
    HiCash,
} from 'react-icons/hi';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import BenefitCard from '@/components/BenefitCard';
import PropertyFormModal from '@/components/PropertyFormModal';

const services = [
    {
        icon: HiShieldCheck,
        title: 'Tenant Verification',
        description:
            'Background checks, identity verification, rental history analysis to ensure reliable tenants.',
    },
    {
        icon: HiCurrencyDollar,
        title: 'Rent Collection',
        description:
            'Monthly rent collection, automated reminders, and transparent payment tracking.',
    },
    {
        icon: HiCash,
        title: 'Assured Rental Guarantee',
        description:
            'Stable rental income guaranteed for property owners regardless of occupancy.',
    },
    {
        icon: HiHome,
        title: 'Monthly Property Management',
        description:
            'Tenant communication and property maintenance coordination handled professionally.',
    },
    {
        icon: HiDocumentText,
        title: 'Agreement & Documentation',
        description:
            'Rental agreement preparation, legal paperwork, and compliance documentation.',
    },
    {
        icon: HiTrendingUp,
        title: 'Rental Income Optimization',
        description:
            'Market rent analysis and pricing strategy to maximize your returns.',
    },
    {
        icon: HiLockClosed,
        title: 'Security Management',
        description:
            'Comprehensive tenant screening and property safety coordination.',
    },
];

const steps = [
    {
        step: '01',
        title: 'Owner Registers Property',
        description: 'Submit your property details through our simple online form.',
    },
    {
        step: '02',
        title: 'Tenant Screening Process',
        description:
            'We thoroughly verify and screen potential tenants for your property.',
    },
    {
        step: '03',
        title: 'Rent Management Setup',
        description:
            'Automated rent collection, tracking, and owner payout systems are activated.',
    },
    {
        step: '04',
        title: 'Maintenance & Tenant Support',
        description:
            'Ongoing property maintenance and responsive tenant support throughout.',
    },
    {
        step: '05',
        title: 'Monthly Owner Reports',
        description:
            'Transparent monthly reports on income, expenses, and property status.',
    },
];

const benefits = [
    { icon: HiCog, title: 'Stress-Free Property Management' },
    { icon: HiTrendingUp, title: 'Higher Rental Income Potential' },
    { icon: HiUserGroup, title: 'Reliable Verified Tenants' },
    { icon: HiDocumentText, title: 'Professional Legal Documentation' },
    { icon: HiChartBar, title: 'Secure Rent Collection' },
];

export default function HomePage() {
    const [showPropertyModal, setShowPropertyModal] = useState(false);

    return (
        <>
            {/* ─── HERO SECTION ─── */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative container-max w-full px-4 md:px-8 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
                                <HiBadgeCheck className="text-accent" size={18} />
                                <span className="text-accent text-sm font-medium">
                                    Trusted Property Management
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Smart Property Management for{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                                    Stress-Free
                                </span>{' '}
                                Rental Income
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
                                RentIt manages tenants, rent collection, agreements and
                                property maintenance so property owners earn stable rental
                                income without hassle.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-primary text-base">
                                    Get Your Property Managed
                                </Link>
                                <button
                                    onClick={() => setShowPropertyModal(true)}
                                    className="btn-outline text-base"
                                >
                                    List Your Property
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 mt-14">
                                {[
                                    { value: '500+', label: 'Properties Managed' },
                                    { value: '98%', label: 'Owner Satisfaction' },
                                    { value: '₹2Cr+', label: 'Rent Collected' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                                        <p className="text-gray-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hero Visual */}
                        <motion.div
                            className="hidden lg:flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="relative w-full max-w-md">
                                {/* Main Card */}
                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                                            <HiHome className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Property Dashboard</p>
                                            <p className="text-gray-400 text-sm">Overview</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-white/10 rounded-2xl p-4">
                                            <p className="text-gray-400 text-xs mb-1">Monthly Income</p>
                                            <p className="text-2xl font-bold text-white">₹1,25,000</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                <HiTrendingUp className="text-green-400" size={14} />
                                                <span className="text-green-400 text-xs">+12% this month</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-white/10 rounded-xl p-3">
                                                <p className="text-gray-400 text-xs">Properties</p>
                                                <p className="text-xl font-bold text-white">12</p>
                                            </div>
                                            <div className="bg-white/10 rounded-xl p-3">
                                                <p className="text-gray-400 text-xs">Tenants</p>
                                                <p className="text-xl font-bold text-white">18</p>
                                            </div>
                                        </div>

                                        <div className="bg-white/10 rounded-xl p-3">
                                            <p className="text-gray-400 text-xs mb-2">Rent Collection</p>
                                            <div className="w-full bg-white/10 rounded-full h-2">
                                                <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }} />
                                            </div>
                                            <p className="text-right text-accent text-xs mt-1">92%</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg shadow-green-500/30 text-sm font-semibold"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                >
                                    ✓ Verified
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Curved bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 80L1440 80L1440 30C1440 30 1140 0 720 0C300 0 0 30 0 30L0 80Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ─── SERVICES SECTION ─── */}
            <section className="section-padding bg-white" id="services">
                <div className="container-max">
                    <SectionHeading
                        title="Our Services"
                        subtitle="Comprehensive property management solutions tailored for property owners who want hassle-free rental income."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section className="section-padding bg-secondary" id="how-it-works">
                <div className="container-max">
                    <SectionHeading
                        title="How It Works"
                        subtitle="A simple, streamlined process to get your property managed professionally."
                    />

                    <div className="max-w-3xl mx-auto">
                        {steps.map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="relative flex gap-6 pb-12 last:pb-0"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                {/* Timeline connector */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-accent/40 to-transparent" />
                                )}

                                {/* Step number */}
                                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/25 relative z-10">
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>

                                {/* Content */}
                                <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100 card-hover">
                                    <h3 className="text-lg font-semibold text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── BENEFITS ─── */}
            <section className="section-padding bg-primary" id="benefits">
                <div className="container-max">
                    <SectionHeading
                        title="Why Choose RentIt"
                        subtitle="Benefits that make property ownership truly passive."
                        light
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={benefit.title} {...benefit} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA SECTION ─── */}
            <section className="section-padding bg-gradient-to-br from-accent to-primary relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                </div>

                <div className="container-max relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Let RentIt Manage Your Property
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Join hundreds of satisfied property owners who enjoy hassle-free
                            rental income with our professional management services.
                        </p>
                        <button
                            onClick={() => setShowPropertyModal(true)}
                            className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
                        >
                            List Your Property
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Property Form Modal */}
            <PropertyFormModal
                isOpen={showPropertyModal}
                onClose={() => setShowPropertyModal(false)}
            />
        </>
    );
}
