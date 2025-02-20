
import "./globals.css";
import { playfairDisplay } from '@/app/ui/fonts';
import ClientLayout from '../components/ClientLayout';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
//git start