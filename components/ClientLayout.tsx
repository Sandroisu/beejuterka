'use client';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';

interface ClientLayoutProps {
    children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    return (
        <SessionProvider
            refetchOnWindowFocus={true}
            refetchInterval={60 * 5}>
            <Navbar />
            <main className="pt-20 max-w-7xl mx-auto p-4">
                {children}
            </main>
        </SessionProvider>
    );
};

export default ClientLayout;