"use client";

import { useState } from "react";
import cl from "./pagination.module.scss";
import { getValidClassNames } from "@/helpers";
import ArrowButton from "../arrowButton/arrowButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";

type Properties = {
  pages: number;
  className?: string;
};

const PAGES_TO_SHOW = 10;

const Pagination: React.FC<Properties> = ({ pages, className }) => {
  const params = useSearchParams();
  const pageParams = Number(params.get("page"));
  const { width } = useWindowSize();

  const [activePage, setActivePage] = useState(pageParams || 1);
  const pagesArray = new Array(pages).fill(0);
  let index = 0;

  if (pages > PAGES_TO_SHOW ?? (width && width > 767)) {
    if (
      pages - activePage >= PAGES_TO_SHOW / 2 &&
      activePage > PAGES_TO_SHOW / 2
    ) {
      index = activePage - PAGES_TO_SHOW / 2;
    } else if (pages - activePage < PAGES_TO_SHOW / 2) {
      index = pages - PAGES_TO_SHOW;
    } else {
      index = 0;
    }
  }

  const router = useRouter();
  const pathname = usePathname();
  const newParams = new URLSearchParams();

  return (
    <div className={getValidClassNames(cl.pagination, className)}>
      <button className={cl.triangleButton}>
        <ArrowButton
          direction="left"
          onClick={() => {
            if (activePage > 1) {
              setActivePage((prev) => prev - 1);
              newParams.set("page", (activePage - 1).toString());
              router.push(`${pathname}?${newParams.toString()}`);
            }
          }}
          className={cl.triangleButton}
        />
      </button>
      <div className={cl.wrapper}>
        <div
          className={cl.pages}
          style={{
            transform:
              width && width > 767 ? `translateX(${-60 * index}px)` : "",
          }}
        >
          {pagesArray.map((_, idx) => {
            return (
              <button
                className={getValidClassNames(
                  cl.button,
                  activePage === idx + 1 && cl.active
                )}
                key={idx}
                onClick={() => {
                  setActivePage(idx + 1);
                  newParams.set("page", (idx + 1).toString());
                  router.push(`${pathname}?${newParams.toString()}`);
                }}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
      <button className={cl.triangleButton}>
        <ArrowButton
          direction="right"
          onClick={() => {
            if (activePage < pages) {
              setActivePage((prev) => prev + 1);
              newParams.set("page", (activePage + 1).toString());
              router.push(`${pathname}?${newParams.toString()}`);
            }
          }}
          className={cl.triangleButton}
        />
      </button>
    </div>
  );
};

export { Pagination };
