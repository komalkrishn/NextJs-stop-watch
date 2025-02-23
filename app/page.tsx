import styles from "./page.module.css";
import StopWatch from "./components/StopWatch";

export default function Home() {
  return (
    <main className={styles.main}>
      <StopWatch />
    </main>
  );
}
