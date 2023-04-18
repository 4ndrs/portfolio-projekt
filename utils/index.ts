import type { Project } from "@/lib/projects";

const getAllTags = (projects: Project[]) => {
  const tagsMap: { [id: string]: number } = {};

  projects.forEach((project) => {
    project.tags.split(", ").forEach((tag) => {
      if (tag in tagsMap) {
        tagsMap[tag] += 1;
        return;
      }

      tagsMap[tag] = 0;
    });
  });

  const tags = Object.keys(tagsMap).sort((a, b) => tagsMap[b] - tagsMap[a]);

  return tags;
};

export { getAllTags };
