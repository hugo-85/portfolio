import { FC } from "react";
import styles from "../personal_info/PersonalInfo.module.css";

interface ExperienceItemProps {
  company: string;
  location: string;
  rol: string;
  range: string;
  description: string;
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  company,
  location,
  rol,
  range,
  description,
}) => {
  return (
    <div className={styles.item}>
      <h5 className={styles.companyName}>{company}</h5>
      <div className={styles.location}>{location}</div>
      <div className={styles.jobInfo}>
        <div className={styles.title}>{rol}</div>
        <div>{range}</div>
      </div>
      <div className={styles.itemDescription}>{description}</div>
    </div>
  );
};

export default ExperienceItem;
