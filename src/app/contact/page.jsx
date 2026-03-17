import styles from "./page.module.scss";
import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Контакты Стрельцова Виктора",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.content}>
        <div className={styles.infoCard}>
          <h2 className={styles.name}>Стрельцов Виктор</h2>
          <p className={styles.role}>Frontend Developer / Frontend‑разработчик</p>
          <div className={styles.infoRow}>
            <span className={styles.label}>Телефон / WhatsApp / Telegram</span>
            <a href="tel:+996557501017" className={styles.value}>
              +996&nbsp;557&nbsp;501&nbsp;017
            </a>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Email</span>
            <a href="mailto:viktor4strlsov@gmail.com" className={styles.value}>
              viktor4strlsov@gmail.com
            </a>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Город</span>
            <span className={styles.value}>Бишкек</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Формат работы</span>
            <span className={styles.value}>
              Удалённо, открыт к переезду и командировкам
            </span>
          </div>
        </div>

        <div className={styles.projectsCard}>
          <h2 className={styles.subtitle}>Ссылки на проекты</h2>
          <ul className={styles.projectsList}>
            <li>
              <a
                href="https://next-magazin.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                NEXT PIZZA — сервис заказа пиццы
              </a>
            </li>
            <li>
              <a
                href="https://magazin-r.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                STUFF — e‑commerce витрина
              </a>
            </li>
            <li>
              <a
                href="https://star-ashy.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Star Wars Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
