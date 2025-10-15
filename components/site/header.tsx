"use client"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"
import LangSwitcher from "./lang-switcher"
import LoginDialog from "@/components/auth/login-dialog"
import RegisterDialog from "@/components/auth/register-dialog"
import { useAuth } from "@/components/providers/auth-provider"
import { type Locale, getDictionary } from "@/lib/i18n"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, DrawerTrigger } from "@/components/ui/drawer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faHouse,
  faStethoscope,
  faCalendarDays,
  faCircleInfo,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"

export default function Header({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang)
  const { user, logout } = useAuth()
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href={`/${lang}`} className="font-semibold transition-colors hover:text-primary">
          Gang Sehat
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href={`/${lang}`} className="text-sm hover:text-foreground transition-colors">
            {dict.nav.home}
          </a>
          <a href={`/${lang}/layanan`} className="text-sm hover:text-foreground transition-colors">
            {dict.nav.services}
          </a>
          <a href={`/${lang}/buat-janji`} className="text-sm hover:text-foreground transition-colors">
            {dict.nav.book}
          </a>
          <a href={`/${lang}/tentang-kami`} className="text-sm hover:text-foreground transition-colors">
            {dict.nav.about}
          </a>
          <a href={`/${lang}/kontak`} className="text-sm hover:text-foreground transition-colors">
            {dict.nav.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitcher lang={lang} />
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            {!user ? (
              <>
                <LoginDialog label={dict.nav.login} />
                <RegisterDialog label={dict.nav.register} />
              </>
            ) : (
              <>
                <a href={`/${lang}/dashboard`}>
                  <Button variant="secondary" size="sm">
                    {dict.nav.dashboard}
                  </Button>
                </a>
                <Button variant="ghost" size="sm" onClick={logout}>
                  {dict.nav.logout}
                </Button>
              </>
            )}
          </div>
          {/* mobile drawer trigger */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button aria-label="Open navigation" size="icon" variant="ghost" className="md:hidden">
                <FontAwesomeIcon icon={faBars} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="pb-4">
              <DrawerHeader className="text-left">
                <DrawerTitle className="text-base">Menu</DrawerTitle>
              </DrawerHeader>
              <nav className="px-4">
                <ul className="space-y-2">
                  <li>
                    <DrawerClose asChild>
                      <a
                        href={`/${lang}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent/50"
                        aria-current={pathname === `/${lang}` ? "page" : undefined}
                      >
                        <FontAwesomeIcon className="text-primary" icon={faHouse} />
                        <span>{dict.nav.home}</span>
                      </a>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <a
                        href={`/${lang}/layanan`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent/50"
                      >
                        <FontAwesomeIcon className="text-primary" icon={faStethoscope} />
                        <span>{dict.nav.services}</span>
                      </a>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <a
                        href={`/${lang}/buat-janji`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent/50"
                      >
                        <FontAwesomeIcon className="text-primary" icon={faCalendarDays} />
                        <span>{dict.nav.book}</span>
                      </a>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <a
                        href={`/${lang}/tentang-kami`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent/50"
                      >
                        <FontAwesomeIcon className="text-primary" icon={faCircleInfo} />
                        <span>{dict.nav.about}</span>
                      </a>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <a
                        href={`/${lang}/kontak`}
                        className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-accent/50"
                      >
                        <FontAwesomeIcon className="text-primary" icon={faPhone} />
                        <span>{dict.nav.contact}</span>
                      </a>
                    </DrawerClose>
                  </li>
                </ul>
              </nav>
              <div className="px-4 pt-4">
                {!user ? (
                  <div className="flex gap-2">
                    <LoginDialog label={dict.nav.login} />
                    <RegisterDialog label={dict.nav.register} />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <a href={`/${lang}/dashboard`} className="flex-1">
                      <Button className="w-full" variant="secondary">
                        {dict.nav.dashboard}
                      </Button>
                    </a>
                    <Button variant="ghost" onClick={logout}>
                      {dict.nav.logout}
                    </Button>
                  </div>
                )}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
