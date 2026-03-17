'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const propertyTypes = ['Apartment', 'Villa', 'Independent House', 'Commercial', 'Plot', 'Other'];

export default function PropertyFormModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        ownerName: '',
        phone: '',
        email: '',
        propertyLocation: '',
        propertyType: '',
        expectedRent: '',
        notes: '',
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
            const res = await fetch('/api/property', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setSuccess(true);
            setFormData({
                ownerName: '',
                phone: '',
                email: '',
                propertyLocation: '',
                propertyType: '',
                expectedRent: '',
                notes: '',
            });

            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 2500);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 30 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white rounded-t-3xl px-8 pt-8 pb-4 border-b border-gray-100 flex items-center justify-between z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-primary">
                                    List Your Property
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Fill in your property details below
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                                aria-label="Close modal"
                            >
                                <HiX size={20} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-5">
                            {success && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                                    ✅ Property submitted successfully! We&apos;ll contact you soon.
                                </div>
                            )}

                            {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="ownerName" className="form-label">Owner Name *</label>
                                <input
                                    id="ownerName"
                                    type="text"
                                    name="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="phone" className="form-label">Phone *</label>
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
                                    <label htmlFor="email" className="form-label">Email *</label>
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
                                <label htmlFor="propertyLocation" className="form-label">Property Location *</label>
                                <input
                                    id="propertyLocation"
                                    type="text"
                                    name="propertyLocation"
                                    value={formData.propertyLocation}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Area, City"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="propertyType" className="form-label">Property Type *</label>
                                    <select
                                        id="propertyType"
                                        name="propertyType"
                                        value={formData.propertyType}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    >
                                        <option value="">Select Type</option>
                                        {propertyTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="expectedRent" className="form-label">Expected Rent (₹)</label>
                                    <input
                                        id="expectedRent"
                                        type="text"
                                        name="expectedRent"
                                        value={formData.expectedRent}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="e.g. 25000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="notes" className="form-label">Additional Notes</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows={3}
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="form-input resize-none"
                                    placeholder="Any additional details about your property..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    'Submit Property'
                                )}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
