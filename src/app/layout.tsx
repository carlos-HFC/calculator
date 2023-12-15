import type { Metadata, Viewport } from 'next';

import { sharedMetadata } from "./shared-metadata";

import './globals.css';

export const metadata: Metadata = sharedMetadata;
export const viewport: Viewport = {
  themeColor: "#292e49",
  initialScale: 1,
  width: 'device-width',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
