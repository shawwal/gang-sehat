"use client"

import { type Locale, getDictionary } from "@/lib/i18n"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faFacebook, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

export default function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang)
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 pb-10 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/placeholder-logo.jpg" alt="Gang Sehat logo" width={32} height={32} className="rounded" />
              <span className="font-semibold">Gang Sehat</span>
            </div>
            <p className="text-sm text-muted-foreground">{dict.meta.description}</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/fisioterapigangsehat/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-accent/50"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-accent/50"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                aria-label="TikTok"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-accent/50"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/6281346111417"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:bg-accent/50"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <nav className="text-sm">
            <h3 className="mb-3 font-medium">{dict.sections.about}</h3>
            <ul className="space-y-2">
              <li>
                <a href={`/${lang}`} className="hover:text-foreground transition-colors">
                  {dict.nav.home}
                </a>
              </li>
              <li>
                <a href={`/${lang}/tentang-kami`} className="hover:text-foreground transition-colors">
                  {dict.nav.about}
                </a>
              </li>
              <li>
                <a href={`/${lang}/layanan`} className="hover:text-foreground transition-colors">
                  {dict.nav.services}
                </a>
              </li>
              <li>
                <a href={`/${lang}/buat-janji`} className="hover:text-foreground transition-colors">
                  {dict.nav.book}
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <h3 className="mb-3 font-medium">{dict.contact.title}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <FontAwesomeIcon className="mt-1.5 text-primary" icon={faLocationDot} />
                <span>
                  {dict.contact.address}: Gg. Remaja 2 No.26, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan
                  Barat 78115
                </span>
              </li>
              <li className="flex gap-2">
                <FontAwesomeIcon className="mt-1.5 text-primary" icon={faPhone} />
                <span>{dict.contact.phone}: 081346111417</span>
              </li>
              <li className="flex gap-2">
                <FontAwesomeIcon className="mt-1.5 text-primary" icon={faEnvelope} />
                <span>{dict.contact.email}: hello@gangsehat.id</span>
              </li>
              <li className="flex gap-2">
                <FontAwesomeIcon className="mt-1.5 text-primary" icon={faClock} />
                <span>{dict.contact.hours}: 08.00–20.00 WIB</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="mb-3 font-medium">{dict.footer.locationTitle}</h3>
            <div className="overflow-hidden rounded-md border">
              <a
                href="https://maps.app.goo.gl/CrZtEuumpsV9koXM6"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <img
                  src="/images/map-snapshot.jpg"
                  alt="Gang Sehat map snapshot"
                  className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="flex items-center justify-between px-3 py-2 text-xs text-muted-foreground border-t">
                  <span>{dict.footer.openInMaps}</span>
                  <FontAwesomeIcon
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                    icon={faArrowUpRightFromSquare}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {year} Gang Sehat. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={`/${lang}/legal/privacy`} className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href={`/${lang}/legal/terms`} className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href={`/${lang}/legal/cookies`} className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
