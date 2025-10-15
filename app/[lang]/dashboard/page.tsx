"use client"
import { useAuth } from "@/components/providers/auth-provider"
import { getDictionary, type Locale } from "@/lib/i18n"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar,
  faCrown,
  faCalendarCheck,
  faGift,
  faBolt,
  faUser,
  faClock,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function DashboardPage({ params }: { params: { lang: Locale } }) {
  const { user } = useAuth()
  const dict = getDictionary(params.lang)
  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [gender, setGender] = useState<"male" | "female" | "other">("male")
  const [birthdate, setBirthdate] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [address, setAddress] = useState<string>("")

  const [apptOpen, setApptOpen] = useState(false)
  const [serviceType, setServiceType] = useState<string>("sports")
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(undefined)
  const [appointmentTime, setAppointmentTime] = useState<string>("16:00")
  const [symptoms, setSymptoms] = useState<string>("")

  if (!user) {
    return (
      <div className="mx-auto max-w-xl px-4 py-10">
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
          <CardContent className="pt-6">
            <p className="text-muted-foreground">Silakan masuk untuk melihat dashboard.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 grid gap-8">
      <h1 className="text-2xl font-semibold">{dict.dashboard.title}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Membership Summary */}
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <FontAwesomeIcon className="text-primary" icon={faCrown} />
              Keanggotaan
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 grid gap-3">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Poin</p>
                <p className="text-3xl font-semibold tracking-tight">320</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                Silver
              </Badge>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>Menuju Gold</span>
                <span>180 poin lagi</span>
              </div>
              <Progress value={64} />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm" variant="default" className="gap-2">
              <FontAwesomeIcon icon={faGift} /> Tukarkan
            </Button>
            <Button size="sm" variant="secondary" className="gap-2">
              <FontAwesomeIcon icon={faStar} /> Lihat Benefit
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Actions */}
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <FontAwesomeIcon className="text-primary" icon={faBolt} />
              Aksi Cepat
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 grid gap-3">
            <div className="flex flex-wrap gap-2">
              <Dialog open={apptOpen} onOpenChange={setApptOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="gap-2">
                    <FontAwesomeIcon icon={faCalendarCheck} /> Buat Janji
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <FontAwesomeIcon className="text-primary" icon={faCalendarCheck} />
                      Buat Janji
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Layanan</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih layanan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sports">Cedera Olahraga</SelectItem>
                          <SelectItem value="post-surgery">Rehab Pasca Operasi</SelectItem>
                          <SelectItem value="neuro">Rehab Neurologis</SelectItem>
                          <SelectItem value="pediatric">Fisioterapi Pediatrik</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label>Tanggal</Label>
                      <Calendar mode="single" selected={appointmentDate} onSelect={setAppointmentDate} />
                    </div>

                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faClock} /> Jam
                      </Label>
                      <Select value={appointmentTime} onValueChange={setAppointmentTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jam" />
                        </SelectTrigger>
                        <SelectContent>
                          {["09:00", "10:00", "11:00", "13:00", "14:00", "16:00", "17:00"].map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUser} /> Data Pasien
                      </Label>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="font-medium">
                            {(name || "U").slice(0, 1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-2 w-full">
                          <Input placeholder="Nama lengkap" value={name} onChange={(e) => setName(e.target.value)} />
                          <Input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Input placeholder="No. Telepon" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label>Jenis Kelamin</Label>
                        <RadioGroup value={gender} onValueChange={(v) => setGender(v as any)} className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem id="g-m" value="male" />
                            <Label htmlFor="g-m">Laki-laki</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem id="g-f" value="female" />
                            <Label htmlFor="g-f">Perempuan</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem id="g-o" value="other" />
                            <Label htmlFor="g-o">Lainnya</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="grid gap-2">
                        <Label>Tanggal Lahir</Label>
                        <Input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                      </div>
                      <div className="grid gap-2">
                        <Label>Alamat</Label>
                        <Textarea rows={3} value={address} onChange={(e) => setAddress(e.target.value)} />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faNotesMedical} /> Keluhan / Gejala
                      </Label>
                      <Textarea
                        placeholder="Ceritakan singkat keluhan yang Anda rasakan..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter className="mt-4">
                    <Button variant="outline" onClick={() => setApptOpen(false)}>
                      Batal
                    </Button>
                    <Button onClick={() => setApptOpen(false)}>Kirim Permintaan</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button size="sm" variant="outline">
                Riwayat
              </Button>
              <Button size="sm" variant="outline">
                Profil
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile */}
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
          <CardHeader className="pb-2">
            <CardTitle>{dict.dashboard.profile}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 grid gap-3">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="font-medium">{(name || "U").slice(0, 1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="grid gap-2 w-full">
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama lengkap" />
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Jenis Kelamin</Label>
              <RadioGroup value={gender} onValueChange={(v) => setGender(v as any)} className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="pg-m" value="male" />
                  <Label htmlFor="pg-m">Laki-laki</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="pg-f" value="female" />
                  <Label htmlFor="pg-f">Perempuan</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="pg-o" value="other" />
                  <Label htmlFor="pg-o">Lainnya</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Tanggal Lahir</Label>
                <Input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label>No. Telepon</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08xxxxxxxxxx" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Alamat</Label>
              <Textarea rows={3} value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <Button className="w-fit">{dict.dashboard.save}</Button>
          </CardContent>
        </Card>

        {/* Upcoming */}
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <FontAwesomeIcon className="text-primary" icon={faCalendarCheck} />
              Kunjungan Mendatang
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <p className="font-medium">Fisioterapi Olahraga</p>
                  <p className="text-muted-foreground">Rabu, 23 Okt 2025 • 16.00</p>
                </div>
                <Badge variant="outline">Dijadwalkan</Badge>
              </li>
              <li className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <p className="font-medium">Rehabilitasi Pasca Operasi</p>
                  <p className="text-muted-foreground">Jum’at, 25 Okt 2025 • 10.00</p>
                </div>
                <Badge variant="outline">Menunggu</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Past with details dialog */}
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70 md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>{dict.dashboard.past}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <p className="font-medium">Evaluasi Postur</p>
                  <p className="text-muted-foreground">Sabtu, 12 Okt 2025 • 14.30</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Selesai</Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        Detail
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Detail Kunjungan</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-2 text-sm">
                        <p>
                          <span className="text-muted-foreground">Layanan:</span> Evaluasi Postur
                        </p>
                        <p>
                          <span className="text-muted-foreground">Terapis:</span> dr. Fisio A
                        </p>
                        <p>
                          <span className="text-muted-foreground">Catatan:</span> Latihan core 3x/minggu
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </li>
              <li className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <p className="font-medium">Terapi Punggung Bawah</p>
                  <p className="text-muted-foreground">Senin, 7 Okt 2025 • 09.00</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Selesai</Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        Detail
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Detail Kunjungan</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-2 text-sm">
                        <p>
                          <span className="text-muted-foreground">Layanan:</span> Terapi Punggung Bawah
                        </p>
                        <p>
                          <span className="text-muted-foreground">Terapis:</span> dr. Fisio B
                        </p>
                        <p>
                          <span className="text-muted-foreground">Catatan:</span> Fokus pada peregangan
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
