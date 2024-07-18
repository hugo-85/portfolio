import styles from "../personal_info/PersonalInfo.module.css";

type PillProps = {
  label: string;
  url: string;
  icon: JSX.Element;
};

export default function Pill({ label, icon, url }: PillProps) {
  return (
    <a
      href={url}
      className={styles.pill}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
