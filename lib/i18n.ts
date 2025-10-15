export const locales = ["id", "en"] as const
export type Locale = (typeof locales)[number]

type Dict = {
  meta: { title: string; description: string }
  nav: {
    home: string
    services: string
    book: string
    about: string
    contact: string
    login: string
    register: string
    dashboard: string
    logout: string
  }
  hero: { title: string; cta: string; subtitle: string }
  sections: { featured: string; about: string; testimonials: string }
  forms: { name: string; email: string; message: string; submit: string }
  services: { title: string }
  about: { title: string }
  contact: { title: string; address: string; phone: string; email: string; hours: string }
  booking: { title: string; step1: string; step2: string; step3: string; confirm: string }
  dashboard: { title: string; upcoming: string; past: string; profile: string; save: string }
  footer: { locationTitle: string; openInMaps: string }
}

const dicts: Record<Locale, Dict> = {
  id: {
    meta: {
      title: "Gang Sehat - Klinik Fisioterapi",
      description: "Kembalikan gerak, raih kualitas hidup terbaik Anda di Gang Sehat.",
    },
    nav: {
      home: "Beranda",
      services: "Layanan",
      book: "Buat Janji",
      about: "Tentang Kami",
      contact: "Kontak",
      login: "Masuk",
      register: "Daftar",
      dashboard: "Dashboard",
      logout: "Keluar",
    },
    hero: {
      title: "Kembalikan Gerak, Raih Kualitas Hidup Terbaik Anda",
      cta: "Buat Janji Temu",
      subtitle: "Perawatan fisioterapi profesional dengan pendekatan personal.",
    },
    sections: { featured: "Layanan Unggulan", about: "Tentang Kami", testimonials: "Testimoni" },
    forms: { name: "Nama", email: "Email", message: "Pesan", submit: "Kirim" },
    services: { title: "Layanan" },
    about: { title: "Tentang Kami" },
    contact: { title: "Kontak", address: "Alamat", phone: "Telepon", email: "Email", hours: "Jam Operasional" },
    booking: {
      title: "Buat Janji Temu",
      step1: "Pilih Layanan",
      step2: "Pilih Tanggal & Waktu",
      step3: "Data Pasien",
      confirm: "Konfirmasi",
    },
    dashboard: {
      title: "Dashboard Anggota",
      upcoming: "Janji Mendatang",
      past: "Riwayat Janji",
      profile: "Data Pribadi",
      save: "Simpan",
    },
    footer: { locationTitle: "Lokasi & Rute", openInMaps: "Buka di Google Maps" },
  },
  en: {
    meta: {
      title: "Gang Sehat - Physiotherapy Clinic",
      description: "Restore movement, achieve your best quality of life at Gang Sehat.",
    },
    nav: {
      home: "Home",
      services: "Services",
      book: "Book Now",
      about: "About",
      contact: "Contact",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
      logout: "Logout",
    },
    hero: {
      title: "Restore Movement, Achieve Your Best Quality of Life",
      cta: "Book Appointment",
      subtitle: "Professional physiotherapy with a personal approach.",
    },
    sections: { featured: "Featured Services", about: "About Us", testimonials: "Testimonials" },
    forms: { name: "Name", email: "Email", message: "Message", submit: "Send" },
    services: { title: "Services" },
    about: { title: "About Us" },
    contact: { title: "Contact", address: "Address", phone: "Phone", email: "Email", hours: "Opening Hours" },
    booking: {
      title: "Book Appointment",
      step1: "Select Service",
      step2: "Choose Date & Time",
      step3: "Patient Details",
      confirm: "Confirm",
    },
    dashboard: {
      title: "Member Dashboard",
      upcoming: "Upcoming Appointments",
      past: "Past Appointments",
      profile: "Personal Data",
      save: "Save",
    },
    footer: { locationTitle: "Location & Directions", openInMaps: "Open in Google Maps" },
  },
}

export function getDictionary(lang: Locale) {
  return dicts[locales.includes(lang) ? lang : "id"]
}
