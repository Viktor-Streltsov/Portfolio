import Button from "@/components/Button/Button";
import styles from "./page.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.png"
          fill={true}
          alt="Стрельцов Виктор"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Стрельцов Виктор</h1>
          <h2 className={styles.imgDesc}>
            Frontend Developer / Frontend‑разработчик
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Обо мне</h1>
          <p className={styles.desc}>
            Здравствуйте! Меня зовут Виктор Стрельцов, я Frontend Developer с
            коммерческим опытом разработки интерфейсов для продакшн‑проектов.
            Работаю с React, Next.js и TypeScript, уверенно чувствую
            React‑экосистему и быстро вникаю в существующий код.
            <br />
            <br />
            В проектах занимался разработкой и поддержкой клиентской части
            веб‑приложений, созданием интерфейсов и их интерактивных элементов,
            рефакторингом кода и реализацией функциональности по техническому
            заданию. Использую современные инструменты работы с состоянием:
            Redux Toolkit, Zustand, jotai, React Query / TanStack Query, а
            также SCSS, Git, Vite и Gulp.
            <br />
            <br />
            Проживаю в Бишкеке, гражданство — Россия. Открыт к удалённому
            формату, релокации и командировкам. Интересны проекты с
            продуманным процессом разработки, где можно приносить пользу
            бизнесу и развиваться как специалист.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>Как я работаю</h1>
          <p className={styles.desc}>
            Мне важны понятные требования, открытая коммуникация и аккуратный
            код. Люблю продумывать интерфейсы так, чтобы ими было удобно
            пользоваться на разных устройствах, а разработчикам было легко
            поддерживать и развивать продукт.
            <br />
            <br />
            В работе опираюсь на дизайн‑макеты, договариваюсь о приоритетах и
            стараюсь предлагать решения, которые одновременно выглядят хорошо и
            остаются реалистичными по срокам. Открыт к обратной связи и
            командной работе.
          </p>
          <Button url="/contact" text="Связаться со мной" />
        </div>
      </div>
    </div>
  );
};

export default About;
