import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "@/components/ui/ProjectCard";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function readSection(section: Project["section"]): Project[] {
  const dir = path.join(CONTENT_ROOT, section);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        category: data.category ?? section,
        year: data.year ?? new Date().getFullYear(),
        section,
        span: data.span,
        tags: data.tags ?? [],
      } satisfies Project;
    })
    .sort((a, b) => b.year - a.year);
}

export function getProjects(
  section?: Project["section"]
): Project[] {
  if (section) return readSection(section);
  return [
    ...readSection("work"),
    ...readSection("projects"),
    ...readSection("experiments"),
  ].sort((a, b) => b.year - a.year);
}

export function getProject(
  section: Project["section"],
  slug: string
): { project: Project; content: string } | null {
  const dir = path.join(CONTENT_ROOT, section);
  const candidates = [`${slug}.md`, `${slug}.mdx`];

  for (const candidate of candidates) {
    const filepath = path.join(dir, candidate);
    if (fs.existsSync(filepath)) {
      const raw = fs.readFileSync(filepath, "utf-8");
      const { data, content } = matter(raw);
      return {
        project: {
          slug,
          title: data.title ?? "Untitled",
          description: data.description ?? "",
          category: data.category ?? section,
          year: data.year ?? new Date().getFullYear(),
          section,
          span: data.span,
          tags: data.tags ?? [],
        },
        content,
      };
    }
  }
  return null;
}
