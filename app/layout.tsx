
import "./globals.css";
import { roboto } from '@/app/ui/fonts';
import ClientLayout from '../components/ClientLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Beejuterka',
    default: 'Beejuterka',
  },
  description: 'Official Solvina company site for jewelry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
//git start