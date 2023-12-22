"use client";

import { useState } from "react";
import cl from "./pagination.module.scss";
import { getValidClassNames } from "@/helpers";
import ArrowButton from "../arrowButton/arrowButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Properties = {
  pages: number;
};

const PAGES_TO_SHOW = 10;

const Pagination: React.FC<Properties> = ({ pages }) => {
  const params = useSearchParams();
  const pageParams = Number(params.get("page"));

  const [activePage, setActivePage] = useState(pageParams || 1);
  const pagesArray = new Array(pages).fill(0);
  let index = 0;

  if (pages > PAGES_TO_SHOW ?? window.innerWidth > 500) {
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
    <div className={cl.pagination}>
      <button className={cl.triangleButton}>
        <ArrowButton
          direction="left"
          onClick={() => {
            if (activePage > 0) {
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
              window?.innerWidth > 500 ? `translateX(${-60 * index}px)` : "",
          }}
        >
          {pagesArray.map((_, idx) => {
            return (
              <button
                className={getValidClassNames(
                  cl.button,
                  activePage === (idx + 1) && cl.active
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
            if (activePage < pages - 1) {
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
