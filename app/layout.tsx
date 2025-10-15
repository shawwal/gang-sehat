import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import '@/lib/fontawesome'

export const metadata: Metadata = {
  title: "Gang Sehat",
  description: "Klinik Fisioterapi - Gang Sehat",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Gang Sehat - Klinik Fisioterapi",
    description: "Layanan fisioterapi profesional untuk pemulihan dan kesehatan Anda.",
    url: "https://gang-sehat.vercel.app", // Replace with your actual domain
    siteName: "Gang Sehat",
    images: [
      {
        url: "/og-image.png", // Path to your OG image in the `public` folder
        width: 1200,
        height: 630,
        alt: "Logo Gang Sehat Klinik Fisioterapi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans", // reuse existing CSS var mapping in globals.css
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = document.cookie.match(/theme=([^;]+)/)?.[1] || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
        />
      </head>
      <body className={`font-sans ${inter.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}