import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
      } satisfies Post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): { post: Post; content: string } | null {
  const candidates = [`${slug}.md`, `${slug}.mdx`];
  for (const candidate of candidates) {
    const filepath = path.join(BLOG_DIR, candidate);
    if (fs.existsSync(filepath)) {
      const raw = fs.readFileSync(filepath, "utf-8");
      const { data, content } = matter(raw);
      return {
        post: {
          slug,
          title: data.title ?? "Untitled",
          description: data.description ?? "",
          date: data.date ?? "",
          tags: data.tags ?? [],
        },
        content,
      };
    }
  }
  return null;
}
