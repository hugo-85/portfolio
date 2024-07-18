import SectionHeader from "../section_header/SectionHeader";
import UserCodeIcon from "../svgs/UserCodeIcon";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <SectionHeader
        icon={<UserCodeIcon width={"26px"} height={"26px"} />}
        title="About me"
      />
      <div className={styles.aboutBody}>
        <div>
          <p>
            Hey there, I'm Hugo Margiotta born in Argentina, I finished my
            studies at UNLP (Universidad Nacional de La Plata) and graduate as
            Computer Science Degree.
          </p>
          <p>
            I have been working with web apps for more than 12 year, always
            trying to keep up date with the more usable languages and
            technologies. In my beginners days started with php and now develop
            apps with React. I'm an avid learner and agile software developer.
            I'm collaborative and like to work in group. Of course, i worked
            alone in projects with dead lines, so if is needed i can do both.{" "}
          </p>
          <p>
            Developed all kind of apps, from simple static pages with animations
            to web apps with much user interaction and high load data, also
            payment services integration, integration and use of relational
            databases and nonSQL ones.
          </p>
          <p>
            Always trying to develop good responsive apps with a nice look and
            feel, friendly for the user. Really like to use animations in my
            apps to make a more fluid experience.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <img src="/imgs/me.webp" alt="Just me" />
        </div>
      </div>
    </section>
  );
}
