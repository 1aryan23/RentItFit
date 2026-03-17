'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiTrash, HiMail, HiPhone } from 'react-icons/hi';

export default function AdminContactsPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        try {
            const res = await fetch('/api/admin/contacts');
            const data = await res.json();
            setContacts(data.data || []);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            const res = await fetch(`/api/admin/contacts?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setContacts(contacts.filter((c) => c._id !== id));
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
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
            <div>
                <h1 className="text-2xl font-bold text-primary">Contact Messages</h1>
                <p className="text-gray-500 text-sm mt-1">{contacts.length} total messages</p>
            </div>

            {contacts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                    <HiMail className="mx-auto mb-3 text-gray-300" size={48} />
                    <p className="text-gray-500">No contact messages yet</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={contact._id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-primary text-lg mb-2">{contact.name}</h3>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <HiMail size={14} className="text-gray-400" />
                                            {contact.email}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <HiPhone size={14} className="text-gray-400" />
                                            {contact.phone}
                                        </span>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <p className="text-gray-600 text-sm leading-relaxed">{contact.message}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-xs text-gray-400">
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(contact._id)}
                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                        aria-label="Delete message"
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
