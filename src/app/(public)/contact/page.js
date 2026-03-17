'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import SectionHeading from '@/components/SectionHeading';

const contactInfo = [
    {
        icon: HiMail,
        title: 'Email Us',
        value: 'info@rentitfit.com',
        link: 'mailto:info@rentitfit.com',
    },
    {
        icon: HiPhone,
        title: 'Call Us',
        value: '+91 XXXXXXXXXX',
        link: 'tel:+91XXXXXXXXXX',
    },
    {
        icon: HiLocationMarker,
        title: 'Visit Us',
        value: 'Office Location, City, India',
        link: null,
    },
    {
        icon: HiClock,
        title: 'Working Hours',
        value: 'Mon - Sat, 9:00 AM - 6:00 PM',
        link: null,
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                </div>
                <div className="container-max px-4 md:px-8 relative">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Get in <span className="text-accent">Touch</span>
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Have questions about our property management services? We&apos;re here
                            to help. Reach out and we&apos;ll get back to you promptly.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none">
                        <path d="M0 60L1440 60L1440 20C1440 20 1140 0 720 0C300 0 0 20 0 20L0 60Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-primary mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-500 mb-8">
                                Fill out the form and our team will reach out within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                                {success && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                                        ✅ Message sent successfully! We&apos;ll get back to you soon.
                                    </div>
                                )}

                                {error && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                        {error}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="form-label">
                                            Name *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="form-label">
                                            Email *
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="form-label">
                                        Phone *
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="form-label">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-input resize-none"
                                        placeholder="Tell us about your property management needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info Sidebar */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-primary mb-2">
                                Contact Information
                            </h2>
                            <p className="text-gray-500 mb-8">
                                Reach out through any of the channels below.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div
                                        key={info.title}
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-secondary border border-gray-100"
                                    >
                                        <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon className="text-accent" size={20} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary text-sm">
                                                {info.title}
                                            </p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-gray-500 text-sm hover:text-accent transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-500 text-sm">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div className="mt-8 rounded-2xl overflow-hidden bg-secondary border border-gray-100 h-48 flex items-center justify-center">
                                <div className="text-center">
                                    <HiLocationMarker className="text-accent mx-auto mb-2" size={32} />
                                    <p className="text-gray-500 text-sm">Map coming soon</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
