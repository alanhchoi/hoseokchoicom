import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Hoseok Choi</h1>
        <nav className="flex flex-col gap-1 items-center sm:items-start">
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
        </nav>

        <footer className="flex items-center gap-2 flex-wrap">
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
