import ExperienceItem from "../experience_item/ExperienceItem";
import styles from "../personal_info/PersonalInfo.module.css";
import SectionHeader from "../section_header/SectionHeader";
import ExpIcon from "../svgs/ExpIcon";

export default function Experience() {
  return (
    <section id="experience">
      {/* <header className={styles.expHeader}>
        <ExpIcon width={"26px"} height={"26px"} />
        <h2>Experience</h2>
      </header> */}
      <SectionHeader icon={<ExpIcon />} title="Experience" />
      <div className="container">
        <div className={styles.experience}>
          <ExperienceItem
            company="Frubana"
            location="Latam"
            rol="Frontend Developer"
            range="Oct 2021 - Mar 2024"
            description="I worked as a web developer helping to build, maintain and support complex dashboards, which not only helped organize sales forces but also managed e-commerce products and users.
            I also developed new features for the e-commerce app and helped to maintain it."
          />

          <ExperienceItem
            company="Xinnux"
            location="Latam"
            rol="Frontend Developer"
            range="Apr 2020 - Dec 2020"
            description="Worked in a project called WOW, where I not only developed an interactive and responsive application for the user, but also advised and supported the technologies used. Requirement analysis and model design."
          />

          <ExperienceItem
            company="Intervan"
            location="Argentina"
            rol="Fullstack developer"
            range="Jan 2014 - Oct 2021"
            description="I was the main developer in three different systems, all of them web apps. I provide support not only in the backend but also in production.
            Helped to develop and maintain a brand new React app to help the user to administrate and pay his own public taxes, make consults, download his bills, start and follow tasks."
          />
        </div>
      </div>
    </section>
  );
}
