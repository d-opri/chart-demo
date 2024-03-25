// app/page.js

import ChartComponent from "./chart";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ChartComponent />
    </main>
  );
}
