'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiClipboardList, HiMail, HiTrendingUp, HiClock } from 'react-icons/hi';

export default function AdminDashboard() {
    const [stats, setStats] = useState({ leads: 0, contacts: 0 });
    const [recentLeads, setRecentLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [leadsRes, contactsRes] = await Promise.all([
                    fetch('/api/admin/leads'),
                    fetch('/api/admin/contacts'),
                ]);

                const leadsData = await leadsRes.json();
                const contactsData = await contactsRes.json();

                setStats({
                    leads: leadsData.data?.length || 0,
                    contacts: contactsData.data?.length || 0,
                });

                setRecentLeads((leadsData.data || []).slice(0, 5));
            } catch (error) {
                console.error('Dashboard fetch error:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const statCards = [
        {
            title: 'Property Leads',
            value: stats.leads,
            icon: HiClipboardList,
            color: 'bg-blue-500',
            lightColor: 'bg-blue-50',
        },
        {
            title: 'Contact Messages',
            value: stats.contacts,
            icon: HiMail,
            color: 'bg-green-500',
            lightColor: 'bg-green-50',
        },
        {
            title: 'Conversion Rate',
            value: stats.leads > 0 ? Math.round((stats.leads / (stats.leads + stats.contacts)) * 100) + '%' : '0%',
            icon: HiTrendingUp,
            color: 'bg-purple-500',
            lightColor: 'bg-purple-50',
        },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin w-10 h-10 border-4 border-accent border-t-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 ${card.lightColor} rounded-xl flex items-center justify-center`}>
                                <card.icon className={`${card.color.replace('bg-', 'text-')}`} size={24} />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-primary">{card.value}</p>
                        <p className="text-gray-500 text-sm mt-1">{card.title}</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Leads */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-semibold text-primary text-lg">Recent Property Leads</h3>
                    <HiClock className="text-gray-400" size={20} />
                </div>

                {recentLeads.length === 0 ? (
                    <div className="p-12 text-center text-gray-400">
                        <HiClipboardList className="mx-auto mb-3" size={40} />
                        <p>No property leads yet</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Owner</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Location</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Type</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Expected Rent</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentLeads.map((lead) => (
                                    <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-primary text-sm">{lead.ownerName}</p>
                                            <p className="text-gray-400 text-xs">{lead.email}</p>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">{lead.propertyLocation}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                                                {lead.propertyType}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">₹{lead.expectedRent || 'N/A'}</td>
                                        <td className="px-6 py-4 text-gray-400 text-xs">
                                            {new Date(lead.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
