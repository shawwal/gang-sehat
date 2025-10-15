import { getDictionary, type Locale } from "@/lib/i18n"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const dynamic = "force-static"

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang)
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-semibold mb-4">{dict.contact.title}</h1>
        <form className="grid gap-4">
          <Input placeholder={dict.forms.name} required />
          <Input type="email" placeholder={dict.forms.email} required />
          <Textarea placeholder={dict.forms.message} rows={5} required />
          <Button type="submit" className="w-fit">
            {dict.forms.submit}
          </Button>
        </form>
        <div className="mt-8 grid gap-2 text-sm text-muted-foreground">
          <div>
            <span className="font-medium text-foreground">{dict.contact.address}:</span> Gg. Remaja 2 No.26, Akcaya,
            Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78115
          </div>
          <div>
            <span className="font-medium text-foreground">{dict.contact.phone}:</span> 081346111417
          </div>
          <div>
            <span className="font-medium text-foreground">{dict.contact.email}:</span> halo@gangsehat.id
          </div>
          <div>
            <span className="font-medium text-foreground">{dict.contact.hours}:</span> Senin–Sabtu, 08:00–18:00
          </div>
        </div>
      </div>
      <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
        <CardContent className="p-2">
          <iframe
            title="Lokasi Gang Sehat"
            src="https://www.google.com/maps?q=Gg.+Remaja+2+No.26,+Akcaya,+Kec.+Pontianak+Sel.,+Kota+Pontianak,+Kalimantan+Barat+78115&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </CardContent>
      </Card>
    </div>
  )
}
