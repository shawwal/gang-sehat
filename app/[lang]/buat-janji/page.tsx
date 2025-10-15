"use client"
import { use } from "react"
import { getDictionary, type Locale } from "@/lib/i18n"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faClock, faStethoscope } from "@fortawesome/free-solid-svg-icons"

const SERVICES = ["Cedera Olahraga", "Rehab Pasca Operasi", "Rehab Neurologis"]
const TIMES = ["09:00", "10:00", "11:00", "13:00", "15:00", "17:00"]

export default function BookPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params)
  const dict = getDictionary(lang)
  const [step, setStep] = useState(1)
  const [service, setService] = useState(SERVICES[0])
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">{dict.booking.title}</h1>

      {step === 1 && (
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70 animate-in fade-in duration-300">
          <CardContent className="pt-6">
            <h2 className="font-medium mb-3 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <FontAwesomeIcon className="text-primary w-full h-full" icon={faStethoscope} fixedWidth />
              </div>
              {dict.booking.step1}
            </h2>
            <RadioGroup value={service} onValueChange={setService} className="grid gap-3">
              {SERVICES.map((s) => (
                <Label
                  key={s}
                  className="flex items-center gap-3 border rounded-md p-3 cursor-pointer hover:bg-accent/40 transition-colors"
                >
                  <RadioGroupItem value={s} />
                  <span>{s}</span>
                </Label>
              ))}
            </RadioGroup>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setStep(2)}>{dict.booking.step2}</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70 animate-in fade-in duration-300">
          <CardContent className="pt-6 grid gap-6">
            <div>
              <h2 className="font-medium mb-3 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon className="text-primary w-full h-full" icon={faCalendarDays} fixedWidth />
                </div>
                {dict.booking.step2}
              </h2>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-fit" />
            </div>
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon className="text-primary w-full h-full" icon={faClock} fixedWidth />
                </div>
                Waktu Tersedia
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`text-sm rounded-md border px-3 py-2 transition-colors ${time === t ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Kembali
              </Button>
              <Button onClick={() => setStep(3)} disabled={!date || !time}>
                {dict.booking.step3}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70 animate-in fade-in duration-300">
          <CardContent className="pt-6 grid gap-4">
            <h2 className="font-medium mb-2">{dict.booking.step3}</h2>
            <Input placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Textarea
              placeholder="Catatan (opsional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
            <div className="flex justify-between mt-2">
              <Button variant="outline" onClick={() => setStep(2)}>
                Kembali
              </Button>
              <Button
                onClick={() => {
                  alert(`Terima kasih, ${name}! Janji untuk ${service} pada ${date?.toDateString()} ${time}.`)
                }}
                disabled={!name || !email}
              >
                {dict.booking.confirm}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}