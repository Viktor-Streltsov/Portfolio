import Image from "next/image";
import styles from "./page.module.scss";
import nextPizzaImg from "./img/next-pizza.png";
import stuffShopImg from "./img/stuff-shop.png";
import starWarsImg from "./img/star-wars-dashboard.png";

const projects = [
  {
    id: 1,
    title: "NEXT PIZZA — сервис заказа пиццы",
    role: "Frontend разработка под Next.js",
    desc:
      "Аналог сервиса доставки пиццы: каталог, фильтрация, сортировка, корзина, адаптивная вёрстка.",
    stack: "Next.js, React, TypeScript, Zustand, SCSS",
    image: nextPizzaImg,
    link: "https://next-magazin.vercel.app",
  },
  {
    id: 2,
    title: "STUFF — e‑commerce витрина",
    role: "Разработка интерфейса интернет‑магазина",
    desc:
      "Главная страница магазина с категориями, промо‑баннером и блоком трендовых товаров.",
    stack: "React, TypeScript, Redux Toolkit, SCSS",
    image: stuffShopImg,
    link: "https://magazin-r.vercel.app",
  },
  {
    id: 3,
    title: "Star Wars Dashboard",
    role: "SPA с каталогом персонажей",
    desc:
      "Приложение по вселенной Star Wars с навигацией, поиском и тематическим оформлением.",
    stack: "React, JavaScript, REST API, CSS",
    image: starWarsImg,
    link: "https://star-ashy.vercel.app",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Мои проекты</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <div className={styles.thumb}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.thumbImg}
              />
            </div>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.role}>{project.role}</p>
            <p className={styles.desc}>{project.desc}</p>
            <p className={styles.stack}>{project.stack}</p>
            <span className={styles.linkHint}>Открыть проект →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
