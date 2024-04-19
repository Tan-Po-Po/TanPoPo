"use client";
import { librarySections } from "@/config/librarySections";
import cl from "./libraryNav.module.scss";
import { NavButton } from "./navButton/navButton";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const LibraryNav = () => {
  const pathname = usePathname();
  useEffect(() => {
    const pathSegments = pathname.split("?")[0].split("/");
    const activeSectionName = pathSegments[pathSegments.length - 1];
    const activeSection = document.getElementById(
      activeSectionName
    ) as HTMLAnchorElement;

    activeSection?.scrollIntoView({ inline: "center" });
    // activeSection?.blur();
  }, [pathname]);
  return (
    <div className={cl.nav}>
      <div className={cl.wrapper} id="library-nav">
        {librarySections.map((section, i) => (
          <NavButton key={i} {...section} />
        ))}
      </div>
    </div>
  );
};
