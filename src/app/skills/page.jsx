import styles from "./page.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>

      <div className={styles.skillsGrid}>
        <div className={styles.item}>
          <h2 className={styles.category}>Frontend</h2>
          <ul className={styles.list}>
            <li>HTML / CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2 className={styles.category}>Backend</h2>
          <ul className={styles.list}>
            <li>Node.js</li>
            <li>REST API</li>
            <li>Databases</li>
          </ul>
        </div>

        <div className={styles.item}>
          <h2 className={styles.category}>Tools</h2>
          <ul className={styles.list}>
            <li>Git</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
