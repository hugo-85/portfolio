import { FC } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps {
  icon: JSX.Element;
  label: string;
  url: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, label, url }) => {
  return (
    <a
      href={url}
      className={styles.iconButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {label}
    </a>
  );
};

export default IconButton;
