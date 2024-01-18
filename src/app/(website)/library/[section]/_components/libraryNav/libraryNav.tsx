"use client";
import { librarySections } from "@/config/librarySections";
import cl from "./libraryNav.module.scss";
import { NavButton } from "./navButton/navButton";

export const LibraryNav = () => {
  return (
    <div className={cl.nav}>
      <div className={cl.wrapper}>
        {librarySections.map((section, i) => (
          <NavButton key={i} {...section} />
        ))}
      </div>
    </div>
  );
};
