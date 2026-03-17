'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-primary/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="container-max flex items-center justify-between py-4 px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all duration-300">
                        <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <span
                        className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'
                            }`}
                    >
                        Rent<span className="text-accent">It</span>Fit
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? 'text-accent bg-accent/10'
                                    : scrolled
                                        ? 'text-gray-600 hover:text-accent hover:bg-accent/5'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="ml-4 btn-primary text-sm !py-2.5 !px-6">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary' : 'text-white'
                        }`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === link.href
                                            ? 'text-accent bg-accent/10'
                                            : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block mt-3 btn-primary text-sm text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
