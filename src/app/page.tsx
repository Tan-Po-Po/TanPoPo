import { Button, Checkbox } from "@/components/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <Button>Test button</Button>
    </main>
  );
}
