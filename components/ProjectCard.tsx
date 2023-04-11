import Link from "next/link";

import PseudoImageSVG from "./PseudoImageSVG";
import GithubSVG from "./GithubSVG";
import VideoSVG from "./VideoSVG";
import SiteSVG from "./SiteSVG";

import type { Project } from "@/lib/projects";

import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  noImage?: boolean;
  featured?: boolean;
  layout?: "normal" | "sdraiato";
};

const ProjectCard = ({
  project,
  noImage = false,
  featured = false,
  layout = "normal",
}: Props) => (
  <article
    className={`${styles.container} ${
      featured ? styles.featuredContainer : ""
    } ${layout === "sdraiato" ? styles.sdraiato : ""}`}
  >
    {!noImage && (
      <PseudoImageSVG
        first={project.pseudoImageFirst}
        second={project.pseudoImageSecond}
        className={styles.image}
      />
    )}
    <ul className={styles.links}>
      <li>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={project.sourceCode}
        >
          <GithubSVG width={25} height={25} />
        </Link>
      </li>
      <li>
        <Link target="_blank" rel="noopener noreferrer" href={project.liveSite}>
          <SiteSVG width={25} height={25} />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={project.videoShowcase}
        >
          <VideoSVG width={25} height={25} />
        </Link>
      </li>
    </ul>
    <h1 className={`${styles.title} ${featured ? styles.featuredText : ""}`}>
      {project.title}
    </h1>
    <p
      className={`${styles.description} ${featured ? styles.featuredText : ""}`}
    >
      {project.description}
    </p>
    <ul className={styles.tags}>
      {project.tags.split(", ").map((tag) => (
        <li key={tag}>
          <Link className={styles.tag} href={`/projects?tag=${encodeURI(tag)}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </article>
);

export default ProjectCard;
