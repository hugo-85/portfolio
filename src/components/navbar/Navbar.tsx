import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#experience" data-id="experience">
          Experience
        </a>
        <a href="#projects" data-id="projects">
          Projects
        </a>
        <a href="#about" data-id="about">
          About me
        </a>
        <a href="mailto:hugomargiotta@gmail.com">Contact</a>
      </nav>
    </header>
  );
}
