import { Metadata } from "next";

export const sharedMetadata: Metadata = {
  title: 'Calculadora',
  description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora',
    description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
    images: '/favicon/favicon-512x512.png'
  },
  openGraph: {
    type: 'website',
    siteName: 'Calculadora',
    title: 'Calculadora',
    description: 'Acesse nossa calculadora e simplifique seus cálculos matemáticos',
    images: '/favicon/favicon-512x512.png',
    locale: 'pt_BR'
  },
  manifest: '/favicon/site.webmanifest',
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    {
      rel: "shortcut icon",
      url: "/favicon/favicon.ico"
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    },
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
      color: "#292e49"
    },
  ],
  creator: "Carlos Faustino",
  keywords: ["Calculadora", "React", "Typescript", "Next.js"],
  authors: [
    {
      name: "Carlos Faustino",
      url: "https://github.com/carlos-hfc"
    }
  ],
  category: 'technology',
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL))
};