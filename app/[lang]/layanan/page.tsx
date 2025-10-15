import { getDictionary, type Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

// Assuming you have a ServiceCard component
function ServiceCard({ 
  title, 
  description, 
  ctaHref, 
  ctaLabel, 
  imageSrc 
}: { 
  title: string
  description: string
  ctaHref: string
  ctaLabel: string
  imageSrc: string
}) {
  return (
    <div className="rounded-lg border overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-card/70">
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          {ctaLabel}
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ lang: Locale }> 
}) {
  const { lang } = await params
  const dict = getDictionary(lang)
  
  return (
    <div className="mx-auto px-4">
      <section className="relative isolate overflow-hidden py-16 md:py-24 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {dict.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-col items-center gap-6">
            <a href={`/${lang}/buat-janji`}>
              <Button size="lg" className="group">
                {dict.hero.cta}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            {dict.services.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Cedera Olahraga"
              description="Pemulihan cedera olahraga untuk kembali bugar."
              ctaHref={`/${lang}/buat-janji`}
              ctaLabel={dict.hero.cta}
              imageSrc="/images/service-sports.jpg"
            />
            <ServiceCard
              title="Rehab Pasca Operasi"
              description="Pendekatan bertahap untuk pemulihan pasca operasi."
              ctaHref={`/${lang}/buat-janji`}
              ctaLabel={dict.hero.cta}
              imageSrc="/images/service-surgery.jpg"
            />
            <ServiceCard
              title="Rehab Neurologis"
              description="Terapi untuk meningkatkan fungsi neurologis."
              ctaHref={`/${lang}/buat-janji`}
              ctaLabel={dict.hero.cta}
              imageSrc="/images/service-neuro.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}