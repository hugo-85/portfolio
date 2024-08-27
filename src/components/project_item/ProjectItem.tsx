import { FC } from "react";
import styles from "../projects/Projects.module.css";
import { TagType } from "../../types/tag";
import NextjsTag from "../tags/NextjsTag";
import MaterialUITag from "../tags/MaterialUITag";
import TypeScriptTag from "../tags/TypeScriptTag";
import ZustandTag from "../tags/ZustandTag";
import JestTag from "../tags/JestTag";
import MongoDbTag from "../tags/MongoDbTag";
import IconButton from "../icon_button/IconButton";
import GithubIcon from "../svgs/GithubIcon";
import ReactTag from "../tags/ReactTag";
import ExternalLinkIcon from "../svgs/ExternalLinkIcon";
import MswTag from "../tags/MswTag";
import MySQLTag from "../tags/MySQLTag";
import SWRTag from "../tags/SWRTag";
import AxiosTag from "../tags/AxiosTag";
import FirebaseTag from "../tags/FirebaseTag";
import ReduxTag from "../tags/ReduxTag";
import StyledComponentsTag from "../tags/StyledComponentsTag";
import GraphQLTag from "../tags/GraphQLTag";
import ApolloClientTag from "../tags/ApolloClientTag";
import StripeTag from "../tags/StripeTag";
import FramerTag from "../tags/FramerTag";
import ReactSpringTag from "../tags/ReactSpringTag";
import DownshiftTag from "../tags/DownshiftTag";
import TailwindTag from "../tags/TailwindTag";
import ZodTag from "../tags/ZodTag";

const tagsIcons = {
  react: (key: string) => <ReactTag key={key} />,
  nextjs: (key: string) => <NextjsTag key={key} />,
  materialui: (key: string) => <MaterialUITag key={key} />,
  typescript: (key: string) => <TypeScriptTag key={key} />,
  zustand: (key: string) => <ZustandTag key={key} />,
  jest: (key: string) => <JestTag key={key} />,
  mongodb: (key: string) => <MongoDbTag key={key} />,
  msw: (key: string) => <MswTag key={key} />,
  mysql: (key: string) => <MySQLTag key={key} />,
  swr: (key: string) => <SWRTag key={key} />,
  axios: (key: string) => <AxiosTag key={key} />,
  firebase: (key: string) => <FirebaseTag key={key} />,
  redux: (key: string) => <ReduxTag key={key} />,
  styled: (key: string) => <StyledComponentsTag key={key} />,
  graphQL: (key: string) => <GraphQLTag key={key} />,
  apollo: (key: string) => <ApolloClientTag key={key} />,
  stripe: (key: string) => <StripeTag key={key} />,
  framer: (key: string) => <FramerTag key={key} />,
  spring: (key: string) => <ReactSpringTag key={key} />,
  downshift: (key: string) => <DownshiftTag key={key} />,
  tailwind: (key: string) => <TailwindTag key={key} />,
  zod: (key: string) => <ZodTag key={key} />,
};

interface ProjectItemProps {
  title: string;
  tags: TagType[];
  description: string;
  image: string;
  projectUrl?: string;
  previewUrl?: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  tags,
  description,
  image,
  projectUrl,
  previewUrl,
}) => {
  return (
    <article className={styles.projectItem}>
      <div className={styles.projectItemImage}>
        <img src={`/imgs/${image}`} />
      </div>
      <div className={styles.projectItemInfo}>
        <h3>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => tagsIcons[tag](`${title}-${tag}`))}
        </div>
        <p className={styles.projectDescription}>{description}</p>
        <footer className={styles.projectItemActions}>
          {projectUrl && (
            <IconButton icon={<GithubIcon />} label="Code" url={projectUrl} />
          )}
          {previewUrl && (
            <IconButton
              icon={<ExternalLinkIcon />}
              label="Preview"
              url={previewUrl}
            />
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProjectItem;
