import Image from 'next/image'
import styles from './page.module.scss'
import Button from '@/components/Button/Button'
import Hero from "../../public/hero.png";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Стрельцов Виктор — Frontend Developer
        </h1>
        <p className={styles.desc}>
          Разрабатываю продакшн‑интерфейсы на React и Next.js, работаю с
          TypeScript, Redux Toolkit, Zustand и современным frontend‑стеком.
          Ищу интересные задачи в удобной и прозрачной команде.
        </p>
        <Button url="/portfolio" text="Смотреть проекты" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='main photo' className={styles.img}/>
      </div>
    </main>
  )
}
