'use client';

import { motion } from 'framer-motion';
import { HiCog, HiInformationCircle } from 'react-icons/hi';

export default function AdminSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-primary">Settings</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your admin preferences</p>
            </div>

            <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <HiInformationCircle className="text-accent flex-shrink-0 mt-0.5" size={24} />
                    <div>
                        <h3 className="font-semibold text-primary mb-1">Platform Settings</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Advanced settings such as notification preferences, team management,
                            integration configuration, and billing will be available in future
                            releases as the platform scales into a full SaaS solution.
                        </p>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <div>
                        <h3 className="font-semibold text-primary mb-4">General Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="font-medium text-sm text-primary">WhatsApp Number</p>
                                    <p className="text-gray-500 text-xs mt-0.5">Update in environment variables</p>
                                </div>
                                <span className="text-sm text-gray-400">+91 XXXXXXXXXX</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="font-medium text-sm text-primary">Admin Email</p>
                                    <p className="text-gray-500 text-xs mt-0.5">Update in environment variables</p>
                                </div>
                                <span className="text-sm text-gray-400">admin@rentit.com</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div>
                                    <p className="font-medium text-sm text-primary">Database</p>
                                    <p className="text-gray-500 text-xs mt-0.5">MongoDB connection status</p>
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                    Connected
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
