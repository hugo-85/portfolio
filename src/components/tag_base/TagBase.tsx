import { FC } from "react";
import styles from "./TagBase.module.css";

interface TagProps {
  icon: JSX.Element;
  label: string;
  backgroundColor: string;
}

const TagBase: FC<TagProps> = ({ icon, label, backgroundColor }) => {
  return (
    <div
      className={styles.tag}
      style={{
        backgroundColor,
      }}
    >
      {icon}
      {label}
    </div>
  );
};

export default TagBase;
