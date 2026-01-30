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
    <div className="place-items-center grid bg-zinc-200 dark:bg-zinc-950 min-h-screen font-[family-name:var(--font-sans-serif)]">
      <main className="bg-white dark:bg-zinc-900 pb-20 w-full max-w-screen-lg min-h-full">
        <nav className="flex flex-row gap-2 p-8 sm:p-20 sm:pb-16 text-xl">
          <div className="font-bold text-xl">
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
        <div className="flex flex-col gap-2 px-8 sm:px-20 sm:pb-8 text-xl">
          <div className="flex lg:flex-row flex-col lg:items-baseline gap-2 lg:gap-16 mb-8 sm:mb-16 font-[family-name:var(--font-serif)]">
            <h1
              className={`text-3xl lg:text-5xl font-semibold flex-1 ${postData.language === "ko" ? "lg:leading-tight break-keep" : ""}`}
            >
              {postData.tag === "book" && (
                <>
                  <span role="img" aria-label="Book review">
                    📖
                  </span>
                  &nbsp;
                </>
              )}
              {postData.title}
            </h1>
            <time
              className="self-end font-normal text-xl lg:text-3xl"
              dateTime={postData.date}
            >
              {new Date(postData.date).toLocaleDateString()}
            </time>
          </div>
          <div
            className={`prose prose-stone lg:prose-xl dark:prose-invert prose-a:underline-offset-4 prose-h2:font-semibold ${postData.language === "ko" ? "prose-p:text-justify prose-blockquote:not-italic prose-blockquote:font-[family-name:var(--font-hahmlet)] prose-blockquote:font-normal prose-blockquote:text-[97%]" : "prose-p:text-justify break-words hyphens-auto prose-h2:font-medium"}`}
          >
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
