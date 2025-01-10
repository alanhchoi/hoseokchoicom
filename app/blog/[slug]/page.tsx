import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";
import { postsDirectory } from "../_lib/paths";
import { PostMetaData } from "../_lib/types";

async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    id,
    ...(matterResult.data as PostMetaData),
    markdown: matterResult.content,
  };
}

type Params = { slug: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid place-items-center min-h-screen bg-zinc-200 dark:bg-zinc-950">
      <main className="max-w-screen-lg w-full bg-white dark:bg-zinc-900 min-h-full pb-20">
        <nav className="p-8 sm:p-20 sm:pb-16 flex flex-row gap-2 text-xl">
          <div className="text-xl font-bold">
            <Link className="hover:underline hover:underline-offset-4" href="/">
              Hoseok Choi
            </Link>
          </div>
          /
          <div className="font-semibold">
            <Link
              className="hover:underline hover:underline-offset-4"
              href="/blog"
              aria-label="Back to the list"
            >
              Blog
            </Link>
          </div>
        </nav>
        <div className="px-8 sm:px-20 sm:pb-8 flex flex-col gap-2 text-xl">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 mb-8 sm:mb-16 lg:items-baseline">
            <h1 className="text-3xl lg:text-5xl font-bold flex-1">
              {postData.title}
            </h1>
            <time
              className="text-xl lg:text-3xl font-light self-end"
              dateTime={postData.date}
            >
              {new Date(postData.date).toLocaleDateString()}
            </time>
          </div>
          <div className="prose prose-zinc lg:prose-xl dark:prose-invert prose-a:underline-offset-4 prose-h2:font-semibold">
            <Markdown>{postData.markdown}</Markdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const fileNames = await fs.readdir(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return {
    title: `${postData.title} | Blog | Hoseok Choi`,
  };
}
