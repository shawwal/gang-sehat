"use client"
import { usePathname, useRouter } from "next/navigation"
import { locales, type Locale } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function LangSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname()
  const router = useRouter()
  const rest = pathname?.split("/").slice(2).join("/") ?? ""
  const changeLang = (next: Locale) => {
    router.push(`/${next}${rest ? `/${rest}` : ""}`)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="min-w-[64px]">
          {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem key={l} onClick={() => changeLang(l)}>
            {l.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
