export default function CookiesPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10 text-foreground">
      <h1 className="text-pretty text-3xl font-semibold">Kebijakan Cookie</h1>
      <p className="mt-2 text-muted-foreground">
        Halaman ini menjelaskan penggunaan cookie untuk meningkatkan pengalaman Anda.
      </p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Apa itu Cookie?</h2>
        <p>
          Cookie adalah file kecil yang disimpan pada perangkat Anda untuk membantu situs berfungsi dan mengingat
          preferensi Anda.
        </p>
      </section>

      <section className="mt-6 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Bagaimana Kami Menggunakan Cookie</h2>
        <ul className="list-inside list-disc">
          <li>Menjaga sesi dan preferensi bahasa</li>
          <li>Mengumpulkan analitik kunjungan</li>
          <li>Meningkatkan performa dan keamanan</li>
        </ul>
      </section>

      <section className="mt-6 space-y-4 leading-relaxed">
        <h2 className="text-xl font-medium">Mengelola Cookie</h2>
        <p>
          Anda dapat menonaktifkan cookie melalui pengaturan browser; namun beberapa fitur mungkin tidak bekerja
          optimal.
        </p>
      </section>
    </main>
  )
}
