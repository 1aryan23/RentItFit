'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { SessionProvider } from 'next-auth/react';
import {
    HiHome,
    HiClipboardList,
    HiMail,
    HiCog,
    HiLogout,
} from 'react-icons/hi';

const sidebarItems = [
    { name: 'Overview', href: '/admin', icon: HiHome },
    { name: 'Property Leads', href: '/admin/leads', icon: HiClipboardList },
    { name: 'Contact Messages', href: '/admin/contacts', icon: HiMail },
    { name: 'Settings', href: '/admin/settings', icon: HiCog },
];

function AdminLayoutInner({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === 'unauthenticated' && pathname !== '/admin/login') {
            router.push('/admin/login');
        }
    }, [status, router, pathname]);

    // Show login page without admin layout
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    if (status === 'loading') {
        return (
            <div className="min-h-screen bg-secondary flex items-center justify-center">
                <div className="animate-spin w-10 h-10 border-4 border-accent border-t-transparent rounded-full" />
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className="min-h-screen bg-secondary flex">
            {/* Sidebar */}
            <aside className="w-64 bg-primary text-white flex-shrink-0 hidden lg:flex flex-col fixed inset-y-0 left-0 z-40">
                <div className="p-6 border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-gradient-to-br from-accent to-blue-400 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold">R</span>
                        </div>
                        <span className="font-bold text-lg">
                            Rent<span className="text-accent">It</span>Fit
                        </span>
                    </Link>
                    <p className="text-gray-500 text-xs mt-2">Admin Dashboard</p>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === item.href
                                    ? 'bg-accent text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={18} />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => signOut({ callbackUrl: '/admin/login' })}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all w-full"
                    >
                        <HiLogout size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main content area */}
            <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                    <h2 className="text-lg font-semibold text-primary">
                        {sidebarItems.find((item) => item.href === pathname)?.name || 'Dashboard'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{session.user?.email}</span>
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            A
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }) {
    return (
        <SessionProvider>
            <AdminLayoutInner>{children}</AdminLayoutInner>
        </SessionProvider>
    );
}
