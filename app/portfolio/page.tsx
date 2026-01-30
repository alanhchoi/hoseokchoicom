import { Metadata } from "next";
import Link from "next/link";
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
    <div className="place-items-center grid bg-zinc-200 dark:bg-zinc-950 min-h-screen font-[family-name:var(--font-sans-serif)]">
      <main className="bg-white dark:bg-zinc-900 pb-20 max-w-screen-lg min-h-full">
        <div className="flex flex-col gap-8 p-8 sm:p-20 sm:pb-8">
          <h1 className="font-bold text-xl">
            <Link className="hover:underline hover:underline-offset-4" href="/">
              Hoseok Choi
            </Link>
          </h1>
          <h2 className="font-bold text-lg">Editorial Design</h2>
        </div>
        <div className="gap-px lg:gap-px grid grid-cols-1 sm:grid-cols-3 lg:px-20 border-y lg:border-y-0 dark:border-transparent w-full">
          <a
            href="/magazine.pdf"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={magazineThumb} alt="Magazine" />
          </a>
          <a
            href="/catalog.pdf"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={catalogThumb} alt="Catalog" />
          </a>
          <a
            href="/textbook.pdf"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={textbookThumb} alt="Textbook" />
          </a>
        </div>
        <div className="flex flex-col gap-8 p-8 sm:p-20 sm:pb-8">
          <h2 className="font-bold text-lg">Digital Illustrations</h2>
        </div>
        <div className="gap-px lg:gap-px grid grid-cols-1 sm:grid-cols-3 lg:px-20 border-y lg:border-y-0 dark:border-transparent w-full">
          <a
            href="/itaewon.png"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={itaewonThumbnail} alt="Itaewon, Seoul" />
          </a>
          <a
            href="/guam.jpg"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={guamThumbnail} alt="Guam" />
          </a>
          <a
            href="/taco.jpg"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={tacoThumbnail} alt="Taco" />
          </a>
          <a
            href="/seoul-night.png"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={seoulNightThumbnail} alt="Night in Seoul" />
          </a>
          <a
            href="/seoul-day.png"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <Image src={seoulDayThumbnail} alt="Day in Seoul" />
          </a>
        </div>
        <div className="flex flex-col gap-8 p-8 sm:p-20 sm:pb-8">
          <h2 className="font-bold text-lg">Motion Graphics</h2>
        </div>
        <div className="gap-px lg:gap-px grid grid-cols-1 sm:grid-cols-3 lg:px-20 border-y lg:border-y-0 dark:border-transparent w-full">
          <a
            href="https://www.youtube.com/watch?v=S9N1ABZ9Wl8"
            target="_blank"
            className="hover:brightness-75 filter"
          >
            <video
              preload="none"
              aria-label="Video player"
              className="w-full object-cover aspect-square"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/motion-thumb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Portfolio | Hoseok Choi",
};
