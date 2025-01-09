import Image from "next/image";
import magazine from "../../public/magazine.png";
import catalog from "../../public/catalog.png";
import textbook from "../../public/textbook.png";

export default function Portfolio() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid place-items-center min-h-screen bg-zinc-200">
      <main className="max-w-screen-lg bg-white min-h-full pb-20">
        <div className="p-8 sm:p-20 sm:pb-8 flex flex-col gap-8">
          <h1 className="text-xl font-bold">
            <a className="hover:underline hover:underline-offset-4" href="/">Hoseok Choi</a>
          </h1>
          <h2 className="text-lg font-bold">Editorial Design</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-px border-y lg:px-20 lg:border-y-0 lg:gap-px">
          <a href="/magazine.pdf" target="_blank" className="filter hover:brightness-75"><Image src={magazine} alt="Magazine" /></a>
          <a href="/catalog.pdf" target="_blank" className="filter hover:brightness-75"><Image src={catalog} alt="Catalog" /></a>
          <a href="/textbook.pdf" target="_blank" className="filter hover:brightness-75"><Image src={textbook} alt="Textbook" /></a>
        </div>
      </main>
    </div>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return (
    <body
        className="bg-zinc-100"
      >{page}</body>
  )
}