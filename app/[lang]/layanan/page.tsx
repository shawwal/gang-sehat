"use client"
import { getDictionary, type Locale } from "@/lib/i18n"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonRunning, faUserDoctor, faBrain, faChild } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"

const SERVICES = [
  {
    key: "sports",
    title: "Cedera Olahraga",
    detail: "Evaluasi dan program pemulihan menyeluruh untuk atlet dan pecinta olahraga.",
  },
  {
    key: "post-surgery",
    title: "Rehab Pasca Operasi",
    detail: "Pendekatan progresif untuk mengembalikan fungsi dan kekuatan pasca operasi.",
  },
  {
    key: "neuro",
    title: "Rehab Neurologis",
    detail: "Terapi untuk pasien dengan kondisi neurologis seperti stroke atau cedera saraf.",
  },
  { key: "pediatric", title: "Fisioterapi Pediatrik", detail: "Dukungan perkembangan motorik anak." },
]

export default function ServicesPage({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang)
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">{dict.services.title}</h1>
      <Accordion type="single" collapsible className="w-full">
        {SERVICES.map((s) => (
          <AccordionItem
            key={s.key}
            value={s.key}
            className="backdrop-blur supports-[backdrop-filter]:bg-card/70 rounded-md border mb-2"
          >
            <AccordionTrigger className="px-4 flex items-center gap-2">
              {s.key === "sports" && <FontAwesomeIcon className="text-primary" icon={faPersonRunning} />}
              {s.key === "post-surgery" && <FontAwesomeIcon className="text-primary" icon={faUserDoctor} />}
              {s.key === "neuro" && <FontAwesomeIcon className="text-primary" icon={faBrain} />}
              {s.key === "pediatric" && <FontAwesomeIcon className="text-primary" icon={faChild} />}
              <span>{s.title}</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 text-muted-foreground">{s.detail}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 animate-in fade-in slide-in-from-bottom-2">
          <Image
            src="/images/service-sports.jpg"
            alt="Cedera Olahraga"
            width={800}
            height={480}
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <p className="font-medium">Cedera Olahraga</p>
            <p className="text-sm text-muted-foreground">Pemulihan kinerja dengan program bertahap.</p>
          </div>
        </div>
        <div className="rounded-lg border overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 animate-in fade-in slide-in-from-bottom-2 delay-100">
          <Image
            src="/images/service-surgery.jpg"
            alt="Rehab Pasca Operasi"
            width={800}
            height={480}
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <p className="font-medium">Rehab Pasca Operasi</p>
            <p className="text-sm text-muted-foreground">Fokus pada pemulihan fungsi dan kekuatan.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href={`/${params.lang}/buat-janji`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:opacity-90"
        >
          {dict.nav.book}
        </Link>
      </div>
    </div>
  )
}
