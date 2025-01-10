import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { postsDirectory } from './_lib/paths';
import { PostMetaData } from './_lib/types';

async function getSortedPostsData() {
  const fileNames = await fs.readdir(postsDirectory);
  const getPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx?$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);

    return fs.readFile(fullPath, 'utf8').then((fileContents) => {
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
  
      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      } as { id: string } & PostMetaData;
    });
  });

  const allPostsData = await Promise.all(getPostData);
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default async function Page() {
  const allPostsData = await getSortedPostsData();

  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid place-items-center min-h-screen bg-zinc-200 dark:bg-zinc-950">
      <main className="max-w-screen-lg w-full bg-white dark:bg-zinc-900 min-h-full pb-20">
        <div className="p-8 sm:p-20 sm:pb-8 flex flex-row gap-2 text-xl">
          <h1 className="text-xl font-bold">
            <Link className="hover:underline hover:underline-offset-4" href="/">Hoseok Choi</Link>
          </h1>
          /
          <h2 className="font-semibold">Blog</h2>
        </div>
        <ul className="flex flex-col items-start px-8 sm:px-20">
          {allPostsData.map(({ id, date, title }) => (  
            <li key={id} className="mb-8">
              <Link className="flex flex-col gap-1 hover:underline hover:underline-offset-4" href={`/blog/${id}`}>
                <div className="text-2xl font-medium">{title}</div>
                <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
              </Link>
            </li>
          ))}
        </ul>
        
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Blog | Hoseok Choi'
}