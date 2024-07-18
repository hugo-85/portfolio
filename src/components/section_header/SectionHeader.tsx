import { FC } from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  icon: JSX.Element;
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ icon, title }) => {
  return (
    <header className={styles.sectionHeader}>
      {icon}
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
