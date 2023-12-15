import { Typography } from "@/components";
import cl from "./page.module.scss";
import { LibraryTable } from "@/components/libraryTable/libraryTable";

const Library = () => {
  return (
    <main className={cl.libraryMain}>
      <Typography variant="h3">БІБЛІОТЕКА TANPOPO</Typography>
      <LibraryTable />
      <Typography variant="body1" className={cl.caption}>
        Тут ми зібрали найкращі та найцікавіші додаткові матеріали для вивчення
        японської мови - наші авторські і ті, що нам вдалося віднайти за багато
        років викладання мови! Завітайте сюди знову, адже щоразу ми намагаємось
        додати щось новеньке!
      </Typography>
    </main>
  );
};
export default Library;
