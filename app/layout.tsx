
import "./globals.css";
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

import ClientLayout from '../components/ClientLayout';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
//git start