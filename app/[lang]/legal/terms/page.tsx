export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10 text-foreground">
      <h1 className="text-pretty text-3xl font-semibold">Syarat & Ketentuan</h1>
      <p className="mt-2 text-muted-foreground">
        Dengan menggunakan layanan kami, Anda setuju dengan syarat dan ketentuan berikut.
      </p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Penggunaan Layanan</h2>
        <p>
          Anda setuju untuk memberikan informasi yang akurat saat membuat janji dan mematuhi kebijakan pembatalan kami.
        </p>
      </section>

      <section className="mt-6 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Kebijakan Pembatalan</h2>
        <p>
          Pembatalan dapat dilakukan maksimal 24 jam sebelum jadwal. Pembatalan di bawah 24 jam dapat dikenakan biaya.
        </p>
      </section>

      <section className="mt-6 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Batasan Tanggung Jawab</h2>
        <p>Kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan layanan.</p>
      </section>
    </main>
  )
}
