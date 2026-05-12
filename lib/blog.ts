import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  keyword: string;
  author: string;
  draft: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  html: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureBlogDir(): void {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function readPost(filename: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  const title = asString(data.title);
  const date = asString(data.date);
  if (!title || !date) return null;

  const slug = filename.replace(/\.md$/, "");
  const html = marked.parse(parsed.content, { async: false }) as string;

  return {
    slug,
    title,
    description: asString(data.description),
    date,
    keyword: asString(data.keyword),
    author: asString(data.author, "Splito"),
    draft: data.draft === true,
    content: parsed.content,
    html,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map(readPost)
    .filter((p): p is BlogPost => p !== null && !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts.map(({ content: _content, html: _html, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir();
  const filename = `${slug}.md`;
  const filePath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  return readPost(filename);
}

export function getAllSlugs(): string[] {
  ensureBlogDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
