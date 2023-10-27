import { Button, Typography } from "@/components";
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
      <Typography variant="h1">Header 1</Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography variant="h3">Header 3</Typography>
      <Typography variant="h4">Header 4</Typography>
      <Typography variant="h5">Header 5</Typography>
      <Typography variant="h6">Header 6</Typography>
    </main>
  );
}
