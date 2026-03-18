import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
          <Link rel="icon" href="/favicon.ico" ><Image src='/vk.png' width={15} height={15} className={styles.icon} alt="vk.com"/></Link>
          <Link rel="icon" href="/favicon.ico" ><Image src="/inst.png" width={15} height={15} className={styles.icon} alt="instagram"/></Link>
          <Link rel="icon" href="/favicon.ico" ><Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="twitter"/></Link>
          <Link rel="icon" href="/favicon.ico" > <Image src="/yt.png" width={15} height={15} className={styles.icon} alt="youtube"/></Link>

      </div>
    </footer>
  );
};

export default Footer;
