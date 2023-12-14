import { librarySections } from "@/config/librarySections";
import { LibraryCard } from "../libraryCard/libraryCard";
import cl from "./libraryTable.module.scss";

export const LibraryTable = () => {
  return (
    <section className={cl.libraryTable}>
      {librarySections.map((section, i) => (
        <LibraryCard key={i} {...section} />
      ))}
    </section>
  );
};
