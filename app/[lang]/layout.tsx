import type { Metadata } from "next"
import { cookies } from "next/headers"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { AuthProvider } from "@/components/providers/auth-provider"
import Header from "@/components/site/header"
import BottomTabs from "@/components/site/bottom-tabs"
import Footer from "@/components/site/footer"
import { getDictionary, type Locale } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    metadataBase: new URL("https://www.gangsehat.example"), // update when live
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  const theme = cookies().get("theme")?.value || "light"
  
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme={theme as "light" | "dark"}>
        <Header lang={params.lang} />
        <main className="min-h-[calc(100dvh-64px)]">{children}</main>
        <BottomTabs lang={params.lang} />
        <Footer lang={params.lang} />
      </ThemeProvider>
    </AuthProvider>
  )
}