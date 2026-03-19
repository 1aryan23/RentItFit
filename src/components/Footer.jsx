import Link from 'next/link';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

const services = [
    'Tenant Verification',
    'Rent Collection',
    'Assured Rental Guarantee',
    'Monthly Management',
    'Agreement & Documentation',
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="container-max section-padding !pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-400 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">R</span>
                            </div>
                            <span className="text-xl font-bold">
                                Rent<span className="text-accent">It</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Smart property management for stress-free rental income. We handle
                            tenants, rent, and maintenance so you don&apos;t have to.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-gray-400 hover:text-accent transition-colors text-sm"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <HiMail className="text-accent mt-0.5 flex-shrink-0" size={18} />
                                <span className="text-gray-400 text-sm">info@rentit.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiPhone className="text-accent mt-0.5 flex-shrink-0" size={18} />
                                <span className="text-gray-400 text-sm">+91 XXXXXXXXXX</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-accent mt-0.5 flex-shrink-0" size={18} />
                                <span className="text-gray-400 text-sm">
                                    Office Location, City, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-max px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} RentIt. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
