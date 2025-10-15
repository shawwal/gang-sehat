"use client"
import { type Locale, getDictionary } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faStethoscope, faCalendarDays, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function BottomTabs({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang)
  const pathname = usePathname()
  const items = [
    { href: `/${lang}`, label: dict.nav.home, icon: faHouse },
    { href: `/${lang}/layanan`, label: dict.nav.services, icon: faStethoscope },
    { href: `/${lang}/buat-janji`, label: dict.nav.book, icon: faCalendarDays },
    { href: `/${lang}/kontak`, label: dict.nav.contact, icon: faPhone },
  ]
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <ul className="grid grid-cols-4">
        {items.map((it) => {
          const active = pathname === it.href
          return (
            <li key={it.href}>
              <a
                href={it.href}
                className={cn(
                  "flex flex-col items-center justify-center py-2 gap-1 transition-colors",
                  "hover:bg-accent/50",
                )}
              >
                <FontAwesomeIcon
                  icon={it.icon}
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    active ? "text-primary scale-110" : "text-muted-foreground",
                  )}
                />
                <span className={cn("text-xs", active ? "text-foreground" : "text-muted-foreground")}>{it.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
