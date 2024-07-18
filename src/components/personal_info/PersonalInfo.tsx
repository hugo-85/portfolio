import Pill from "../pill/Pill";
import LinkedInIcon from "../svgs/LinkedinIcon";
import MailToIcon from "../svgs/MailTo";
import styles from "./PersonalInfo.module.css";

export default function PersonalInfo() {
  return (
    <section className={styles.section}>
      <div>
        <img
          src="/imgs/profile.webp"
          alt="Picture of Hugo Margiotta"
          className={styles.avatar}
        />
      </div>
      <h1>Hugo Margiotta</h1>
      <p className={styles.myInfo}>
        Professional with more than <strong>12 years of experience</strong>. I'm
        from Patagonia in Argentina 🇦🇷. Graduate in{" "}
        <strong>Computer Science</strong>, specialized in creating fully
        interactive web applications.
      </p>
      <nav className={styles.navPills}>
        <Pill
          label="Contact me"
          url="mailto:hugomargiotta@gmail.com"
          icon={<MailToIcon width={"1rem"} height={"1rem"} />}
        />
        <Pill
          label="Linkedin"
          url="https://www.linkedin.com/in/hugo-margiotta-464595219/"
          icon={<LinkedInIcon width={"1rem"} height={"1rem"} />}
        />
      </nav>
    </section>
  );
}
