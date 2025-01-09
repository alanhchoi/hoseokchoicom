export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Hoseok Choi</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <a className="hover:underline hover:underline-offset-4" target="_blank" href="https://www.linkedin.com/in/hoseokchoi/">LinkedIn</a>
          <a className="hover:underline hover:underline-offset-4" target="_blank" href="https://www.instagram.com/hoseok.choi/">Instagram</a>
          <a className="hover:underline hover:underline-offset-4" target="_blank" href="https://www.youtube.com/@iamhoseokchoi">YouTube</a>
        </div>
      </main>
    </div>
  );
}
