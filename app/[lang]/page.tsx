import { getDictionary, type Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/site/service-card"
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export const dynamic = "force-static"

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang)
  return (
    <div className="mx-auto px-4">
      <section className="relative isolate overflow-hidden py-16 md:py-24 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
        {/* Background image full-bleed */}
        <img
          src="/physiotherapist-portrait.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 left-1/2 h-full w-screen -translate-x-1/2 object-cover"
        />
        {/* Dark/Light overlay for readability */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" aria-hidden="true" />

        {/* Content panel to keep text readable */}
        <div className="relative mx-auto max-w-3xl px-4">
          <div className="rounded-xl bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 p-6 md:p-10 shadow-sm">
            <h1 className="text-3xl md:text-5xl font-semibold text-balance">{dict.hero.title}</h1>
            <p className="mt-3 text-muted-foreground">{dict.hero.subtitle}</p>

            <div className="mt-6 flex flex-col items-center gap-6">
              <a href={`/${params.lang}/buat-janji`}>
                <Button size="lg" className="group">
                  {dict.hero.cta}
                  <FontAwesomeIcon
                    className="ml-2 transition-transform group-hover:translate-x-0.5"
                    icon={faArrowRight}
                  />
                </Button>
              </a>

              {/* Video placeholder below CTA */}
              <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-xl border shadow-lg animate-in fade-in slide-in-from-bottom-1 duration-500">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/bVNfEYoGGEo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-xl border shadow-lg animate-in fade-in slide-in-from-bottom-1 duration-500">
                <img src="/clinic-intro-video-placeholder.jpg" alt="Video placeholder" className="h-full w-full object-cover" />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute inset-0 grid place-items-center group"
                >
                  <span className="sr-only">Play video</span>
                  <span className="rounded-full bg-background/80 p-4 backdrop-blur transition-transform group-hover:scale-105">
                    <FontAwesomeIcon icon={faPlay} className="h-6 w-6" />
                  </span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{dict.sections.featured}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard
            title="Cedera Olahraga"
            description="Pemulihan cedera olahraga untuk kembali bugar."
            ctaHref={`/${params.lang}/buat-janji`}
            ctaLabel={dict.hero.cta}
            imageSrc="/images/service-sports.jpg"
          />
          <ServiceCard
            title="Rehab Pasca Operasi"
            description="Pendekatan bertahap untuk pemulihan pasca operasi."
            ctaHref={`/${params.lang}/buat-janji`}
            ctaLabel={dict.hero.cta}
            imageSrc="/images/service-surgery.jpg"
          />
          <ServiceCard
            title="Rehab Neurologis"
            description="Terapi untuk meningkatkan fungsi neurologis."
            ctaHref={`/${params.lang}/buat-janji`}
            ctaLabel={dict.hero.cta}
            imageSrc="/images/service-neuro.jpg"
          />
        </div>
      </section>

      <section className="py-8 max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{dict.sections.about}</h2>
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
          <CardContent className="pt-6 text-muted-foreground">
            Gang Sehat menghadirkan layanan fisioterapi modern dengan tim berpengalaman dan fasilitas nyaman.
          </CardContent>
        </Card>
      </section>

      <section className="py-8 max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{dict.sections.testimonials}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Budi Santoso", initials: "BS", rating: 5, text: "Sangat membantu!" },
            { name: "Siti Rahma", initials: "SR", rating: 4, text: "Pelayanan ramah." },
            { name: "Andi Pratama", initials: "AP", rating: 5, text: "Hasil terasa nyata." },
          ].map((t, i) => (
            <Card
              key={i}
              className="backdrop-blur supports-[backdrop-filter]:bg-card/70 animate-in fade-in duration-500"
            >
              <CardContent className="pt-6 text-sm">
                <div className="flex items-start gap-3">
                  <Avatar aria-hidden="true">
                    {/* You can replace with real images later */}
                    <AvatarImage src="/placeholder.svg" alt="" />
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{t.name}</p>
                      <div className="flex items-center gap-0.5" aria-label={`Rating ${t.rating} dari 5`}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <FontAwesomeIcon
                            key={idx}
                            icon={faStar}
                            className={idx < t.rating ? "opacity-100" : "opacity-30"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-muted-foreground">"{t.text}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
