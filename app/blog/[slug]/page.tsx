import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Not found — Splito" };
  }

  return {
    title: `${post.title} — Splito`,
    description: post.description,
  };
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-white/60 hover:text-white"
      >
        ← Back to blog
      </Link>

      <article className="mt-10">
        <header className="mb-12">
          <time className="text-sm text-white/50">
            {formatDate(post.date)}
          </time>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
          {post.description ? (
            <p className="mt-4 text-lg text-white/70">{post.description}</p>
          ) : null}
        </header>

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-white prose-a:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
