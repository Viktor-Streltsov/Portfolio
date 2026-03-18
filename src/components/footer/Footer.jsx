import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
          <Link rel="icon" href="https://vk.com/id658913692" ><Image src='/vk.png' width={15} height={15} className={styles.icon} alt="vk.com"/></Link>
          <Link rel="icon" href="https://www.instagram.com/viktor_str23?igsh=a25zMzN3bzByaDd4&utm_source=qr" ><Image src="/inst.png" width={15} height={15} className={styles.icon} alt="instagram"/></Link>
          <Link rel="icon" href="/favicon.ico" ><Image src="/telegram.png" width={15} height={15} className={styles.icon} alt="telegram"/></Link>
          <Link rel="icon" href="/favicon.ico" > <Image src="/linkedin.png" width={15} height={15} className={styles.iconLink} alt="linkedin"/></Link>

      </div>
    </footer>
  );
};

export default Footer;
