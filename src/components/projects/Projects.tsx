import ProjectItem from "../project_item/ProjectItem";
import SectionHeader from "../section_header/SectionHeader";
import CodeIcon from "../svgs/CodeIcon";
import styles from "./Projects.module.css";
import { projectsConfigs } from "./projectsConfigs";

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader icon={<CodeIcon />} title="Projects" />
      <div className={styles.projectsList}>
        {projectsConfigs.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
