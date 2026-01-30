import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 sm:p-20 pb-20 font-[family-name:var(--font-sans-serif)]">
      <main className="flex flex-col items-center sm:items-start gap-8 row-start-2">
        <h1 className="font-bold text-xl">Hoseok Choi</h1>
        <nav className="flex flex-col items-center sm:items-start gap-1">
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/portfolio"
            data-umami-event="Portfolio link"
          >
            Portfolio
          </Link>
          <Link
            className="hover:underline hover:underline-offset-4"
            href="/blog"
            data-umami-event="Blog link"
          >
            Blog
          </Link>
          <a
            className="hover:underline hover:underline-offset-4"
            target="_blank"
            href="https://forms.gle/E2YB31VZ3G7euwQX7"
            data-umami-event="Contact link"
          >
            Contact
          </a>
        </nav>

        <footer className="flex flex-wrap items-center gap-2">
          <a
            className="hover:underline hover:underline-offset-4"
            target="_blank"
            href="https://www.linkedin.com/in/hoseokchoi/"
            data-umami-event="LinkedIn link"
          >
            LinkedIn
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            target="_blank"
            href="https://www.instagram.com/hoseok.choi/"
            data-umami-event="Instagram link"
          >
            Instagram
          </a>
          <a
            className="hover:underline hover:underline-offset-4"
            target="_blank"
            href="https://www.youtube.com/@iamhoseokchoi"
            data-umami-event="YouTube link"
          >
            YouTube
          </a>
        </footer>
      </main>
    </div>
  );
}
