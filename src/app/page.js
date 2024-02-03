import Image from "next/image";
import styles from "./page.module.css";
import HomeComponent from "./home/HomeComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComponent />
    </main>
  );
}
