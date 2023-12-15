import { Metadata } from "next";

export const sharedMetadata: Metadata = {
  title: 'Calculadora',
  description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora',
    description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
    images: {
      url: '/favicon/favicon-512x512.png',
      alt: 'Calculator Logo',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Calculadora',
    title: 'Calculadora',
    description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
    images: {
      url: '/favicon/favicon-512x512.png',
      alt: 'Calculator Logo',
    },
    locale: 'pt_BR',
    url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL))
  },
  manifest: '/favicon/site.webmanifest',
  icons: {
    shortcut: '/shortcut-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg'
    }
  },
  creator: "Carlos Faustino",
  keywords: ["Calculadora", "React", "Typescript", "Next.js"],
  authors: [
    {
      name: "Carlos Faustino",
      url: "https://github.com/carlos-hfc"
    }
  ],
  category: 'technology',
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
  alternates: {
    canonical: String(process.env.NEXT_PUBLIC_BASE_URL)
  }
};