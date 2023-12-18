import type { Metadata, Viewport } from 'next';
import { PropsWithChildren } from "react";

import { sharedMetadata } from "./shared-metadata";
import { CalculatorProvider } from "@/contexts/Calculator";
import { Header } from "@/components/Header";

import './globals.css';

export const metadata: Metadata = sharedMetadata;
export const viewport: Viewport = {
  themeColor: "#292e49",
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden">
        <CalculatorProvider>
          <Header />
          {children}
        </CalculatorProvider>
      </body>
    </html>
  );
}
