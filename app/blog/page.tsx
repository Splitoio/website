import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Splito",
  description:
    "Notes from the founder on splitting expenses, traveling with friends, and settling money across borders.",
};

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="mb-16">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Splito
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Splito blog
        </h1>
        <p className="mt-3 text-white/70">
          Notes on splitting expenses, traveling with friends, and settling
          money across borders.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-white/60">No posts yet.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-sm text-white/50">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-2xl font-medium group-hover:text-white/90">
                  {post.title}
                </h2>
                {post.description ? (
                  <p className="mt-2 text-white/70">{post.description}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
