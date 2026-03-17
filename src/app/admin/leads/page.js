'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiTrash, HiClipboardList, HiPhone, HiMail } from 'react-icons/hi';

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {
        try {
            const res = await fetch('/api/admin/leads');
            const data = await res.json();
            setLeads(data.data || []);
        } catch (error) {
            console.error('Error fetching leads:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this lead?')) return;

        try {
            const res = await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setLeads(leads.filter((lead) => lead._id !== id));
            }
        } catch (error) {
            console.error('Error deleting lead:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin w-10 h-10 border-4 border-accent border-t-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Property Leads</h1>
                    <p className="text-gray-500 text-sm mt-1">{leads.length} total leads</p>
                </div>
            </div>

            {leads.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                    <HiClipboardList className="mx-auto mb-3 text-gray-300" size={48} />
                    <p className="text-gray-500">No property leads yet</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {leads.map((lead, index) => (
                        <motion.div
                            key={lead._id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-semibold text-primary text-lg">{lead.ownerName}</h3>
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                                            {lead.propertyType}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">{lead.propertyLocation}</p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1.5">
                                            <HiMail size={14} className="text-gray-400" />
                                            {lead.email}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <HiPhone size={14} className="text-gray-400" />
                                            {lead.phone}
                                        </span>
                                        {lead.expectedRent && (
                                            <span className="font-medium text-primary">₹{lead.expectedRent}/mo</span>
                                        )}
                                    </div>

                                    {lead.notes && (
                                        <p className="mt-3 text-gray-500 text-sm bg-gray-50 rounded-xl p-3">
                                            {lead.notes}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-gray-400">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(lead._id)}
                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                        aria-label="Delete lead"
                                    >
                                        <HiTrash size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
