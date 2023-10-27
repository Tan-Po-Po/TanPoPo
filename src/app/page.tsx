import { Button } from "@/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <Button
        icon="box"
        variant="outlined"
        style={{ backgroundColor: "transparent" }}
      >
        Test button
      </Button>
    </main>
  );
}
