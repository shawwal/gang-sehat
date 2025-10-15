export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10 text-foreground">
      <h1 className="text-pretty text-3xl font-semibold">Kebijakan Privasi</h1>
      <p className="mt-2 text-muted-foreground">
        Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.
      </p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Data yang Kami Kumpulkan</h2>
        <p>
          Kami mengumpulkan data identitas dasar (nama, email, nomor telepon) dan informasi janji yang Anda buat untuk
          keperluan layanan fisioterapi.
        </p>
      </section>

      <section className="mt-6 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Cara Kami Menggunakan Data</h2>
        <ul className="list-inside list-disc">
          <li>Menjadwalkan dan mengelola janji Anda</li>
          <li>Mengirimkan pengingat dan informasi layanan</li>
          <li>Meningkatkan kualitas layanan berdasarkan analitik</li>
        </ul>
      </section>

      <section className="mt-6 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Keamanan</h2>
        <p>
          Kami menerapkan kontrol keamanan standar industri untuk melindungi data Anda dan hanya menyimpannya selama
          diperlukan untuk tujuan layanan.
        </p>
      </section>
    </main>
  )
}
