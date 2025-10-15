import { getDictionary, type Locale } from "@/lib/i18n"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartPulse, faHandsHolding, faMedal, faLocationDot } from "@fortawesome/free-solid-svg-icons"

const TEAM = [
  { name: "dr. Fisio A", spec: "Cedera Olahraga", img: "/dr-1.png" },
  { name: "dr. Fisio B", spec: "Neurologis", img: "/dr-2.png" },
  { name: "dr. Fisio C", spec: "Ortopedi", img: "/dr-3.png" },
]

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang)
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">{dict.about.title}</h1>
      <p className="text-muted-foreground max-w-3xl">
        Kami berkomitmen menghadirkan perawatan berbasis bukti dengan sentuhan manusiawi untuk membantu Anda kembali
        aktif.
      </p>
      <div className="grid gap-6 md:grid-cols-3 mt-8">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="rounded-lg border backdrop-blur supports-[backdrop-filter]:bg-card/70 p-4 text-center"
          >
            <img src={m.img || "/placeholder.svg"} alt={m.name} className="mx-auto rounded-md" />
            <h3 className="mt-3 font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.spec}</p>
          </div>
        ))}
      </div>

      {/* Mission/values */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4 backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-2 text-primary font-medium">
            <FontAwesomeIcon icon={faHeartPulse} />
            <span>Misi</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Memberikan perawatan fisioterapi berbasis bukti dengan pendekatan personal dan empatik.
          </p>
        </div>
        <div className="rounded-lg border p-4 backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-2 delay-100">
          <div className="flex items-center gap-2 text-primary font-medium">
            <FontAwesomeIcon icon={faHandsHolding} />
            <span>Nilai</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Human-centered, aman, efektif, serta kolaboratif antara terapis dan pasien.
          </p>
        </div>
        <div className="rounded-lg border p-4 backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-2 delay-200">
          <div className="flex items-center gap-2 text-primary font-medium">
            <FontAwesomeIcon icon={faMedal} />
            <span>Standar</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Protokol modern, alat yang higienis, dan edukasi berkelanjutan untuk hasil optimal.
          </p>
        </div>
      </section>

      {/* Clinic address */}
      <section aria-labelledby="clinic-address" className="mt-10">
        <h2 id="clinic-address" className="text-xl font-semibold mb-3">
          Alamat Klinik
        </h2>
        <div className="rounded-lg border p-4 backdrop-blur supports-[backdrop-filter]:bg-card/70 flex items-start gap-3 transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-2">
          <FontAwesomeIcon className="mt-1 text-primary" icon={faLocationDot} />
          <div>
            <p className="text-pretty">
              Gg. Remaja 2 No.26, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78115
            </p>
            <a
              href="https://maps.app.goo.gl/CrZtEuumpsV9koXM6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
