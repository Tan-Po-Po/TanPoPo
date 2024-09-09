"use client";
import { librarySections } from "@/config/librarySections";
import cl from "./libraryNav.module.scss";
import { NavButton } from "./navButton/navButton";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const LibraryNav = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToActiveSection = () => {
      if (navRef.current && window.innerWidth <= 680) {
        const pathSegments = pathname.split("?")[0].split("/");
        const activeSectionName = pathSegments[pathSegments.length - 1];
        const activeSection = navRef.current.querySelector(
          `#${activeSectionName}`
        ) as HTMLElement;

        if (activeSection) {
          const navRect = navRef.current.getBoundingClientRect();
          const activeSectionRect = activeSection.getBoundingClientRect();

          const scrollLeft =
            activeSection.offsetLeft -
            (navRect.width - activeSectionRect.width) / 2;
          navRef.current.scrollLeft = scrollLeft;

        }
      }
    };
    scrollToActiveSection()

  }, [pathname]);

  return (
    <div className={cl.nav} ref={navRef}>
      <div className={cl.wrapper} id="library-nav">
        {librarySections.map((section, i) => (
          <NavButton key={i} {...section} />
        ))}
      </div>
    </div>
  );
};
