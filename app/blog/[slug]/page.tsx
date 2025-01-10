import Link from 'next/link';
import fs from 'fs';
import { postsDirectory } from '../_lib/paths';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid place-items-center min-h-screen bg-zinc-200 dark:bg-zinc-950">
      <main className="max-w-screen-lg w-full bg-white dark:bg-zinc-900 min-h-full pb-20">
        <div className="p-8 sm:p-20 sm:pb-8 flex flex-row gap-2 text-xl">
          <h1 className="text-xl font-bold">
            <Link className="hover:underline hover:underline-offset-4" href="/">Hoseok Choi</Link>
          </h1>
          /
          <h2 className="font-semibold">
            <Link className="hover:underline hover:underline-offset-4" href="/blog">Blog</Link>
          </h2>
        </div>
        <div className="px-8 sm:px-20 sm:pb-8 flex flex-row gap-2 text-xl">
          {slug}
        </div>
      </main>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory)
 
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx?$/, '')
  }))
}
