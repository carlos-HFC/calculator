import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Calculadora',
  description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
