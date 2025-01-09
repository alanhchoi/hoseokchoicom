import Link from 'next/link'
import Image from "next/image";
import magazineThumb from "../../public/magazine-thumb.png";
import catalogThumb from "../../public/catalog-thumb.png";
import textbookThumb from "../../public/textbook-thumb.png";
import guamThumbnail from "../../public/guam-thumb.png";
import itaewonThumbnail from "../../public/itaewon-thumb.png";
import seoulDayThumbnail from "../../public/seoul-day-thumb.png";
import seoulNightThumbnail from "../../public/seoul-night-thumb.png";
import tacoThumbnail from "../../public/taco-thumb.png";

export default function Portfolio() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid place-items-center min-h-screen bg-zinc-200 dark:bg-zinc-950">
      <main className="max-w-screen-lg bg-white dark:bg-zinc-900 min-h-full pb-20">
        <div className="p-8 sm:p-20 sm:pb-8 flex flex-col gap-8">
          <h1 className="text-xl font-bold">
            <Link className="hover:underline hover:underline-offset-4" href="/">Hoseok Choi</Link>
          </h1>
          <h2 className="text-lg font-bold">Editorial Design</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-px border-y lg:px-20 lg:border-y-0 dark:border-transparent lg:gap-px">
          <a href="/magazine.pdf" target="_blank" className="filter hover:brightness-75"><Image src={magazineThumb} alt="Magazine" /></a>
          <a href="/catalog.pdf" target="_blank" className="filter hover:brightness-75"><Image src={catalogThumb} alt="Catalog" /></a>
          <a href="/textbook.pdf" target="_blank" className="filter hover:brightness-75"><Image src={textbookThumb} alt="Textbook" /></a>
        </div>
        <div className="p-8 sm:p-20 sm:pb-8 flex flex-col gap-8">
          <h2 className="text-lg font-bold">Digital Illustrations</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-px border-y lg:px-20 lg:border-y-0 dark:border-transparent lg:gap-px">
          <a href="/itaewon.png" target="_blank" className="filter hover:brightness-75"><Image src={itaewonThumbnail} alt="Itaewon, Seoul" /></a>
          <a href="/guam.jpg" target="_blank" className="filter hover:brightness-75"><Image src={guamThumbnail} alt="Guam" /></a>
          <a href="/taco.jpg" target="_blank" className="filter hover:brightness-75"><Image src={tacoThumbnail} alt="Taco" /></a>
          <a href="/seoul-night.png" target="_blank" className="filter hover:brightness-75"><Image src={seoulNightThumbnail} alt="Night in Seoul" /></a>
          <a href="/seoul-day.png" target="_blank" className="filter hover:brightness-75"><Image src={seoulDayThumbnail} alt="Day in Seoul" /></a>
        </div>
        <div className="p-8 sm:p-20 sm:pb-8 flex flex-col gap-8">
          <h2 className="text-lg font-bold">Motion Graphics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-px border-y lg:px-20 lg:border-y-0 dark:border-transparent lg:gap-px">
          <a href="https://www.youtube.com/watch?v=S9N1ABZ9Wl8" target="_blank" className="filter hover:brightness-75">
            <video preload="none" aria-label="Video player" className="w-full aspect-square object-cover" autoPlay muted loop>
              <source src="/motion-thumb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
        
      </main>
    </div>
  );
}
