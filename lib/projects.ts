import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

const Project = z.object({
  title: z.string(),
  tags: z.string(),
  description: z.string(),
  pseudoImageFirst: z.string(),
  pseudoImageSecond: z.string(),
  frontPage: z.number().optional(),
  sourceCode: z.string().optional(),
  liveSite: z.string().optional(),
  videoShowcase: z.string().optional(),
});

export type Project = z.infer<typeof Project>;

const getAllProjects = () => {
  const directory = path.join(process.cwd(), "projects");
  const fileNames = readdirSync(directory);

  const projects = fileNames.map((filename) => {
    const fullPath = path.join(directory, filename);
    const content = readFileSync(fullPath, "utf8");

    const metadata = matter(content).data;

    return Project.parse(metadata);
  });

  return projects;
};

export { getAllProjects };
