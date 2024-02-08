"use client";

import { time } from "@/components/schedule/common";
import { useSearchParams } from "next/navigation";
import { Loading, Typography } from "@/components";
import { getValidClassNames } from "@/helpers";
import { useWindowSize } from "@uidotdev/usehooks";
import cl from "./page.module.scss";
import { Suspense } from "react";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Розклад | Tanpopo',
}

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

export default function Page() {
  const searchParams = useSearchParams();
  const { width } = useWindowSize();

  if (!searchParams.get("schedule")) {
    return <Loading />;
  }

  return (
    <main className={cl.main}>
      <div className={cl.wrapper}>
        <Suspense fallback={<></>}>
          <Typography variant="h3" className={cl.header}>
            {searchParams.get("surname")} {searchParams.get("name")}{" "}
            <span style={{ fontWeight: "300" }}>
              ({searchParams.get("age")})
            </span>
          </Typography>

          <div className={getValidClassNames(cl.flexRow, cl.firstRow)}>
            <div className={cl.card} style={{ maxHeight: "65px" }}>
              <Typography variant="h6">
                {searchParams.get("orderId")}
              </Typography>
            </div>
            <div className={cl.card} style={{ maxHeight: "65px" }}>
              <Typography variant="h6">
                {searchParams.get("courseName")}
              </Typography>
            </div>
            {searchParams.get("format") &&
            searchParams.get("format")!.toLowerCase() === "міні-група" ? (
              <div className={cl.card} style={{ maxHeight: "65px" }}>
                <Typography variant="h6">
                  {searchParams.get("format")}
                </Typography>
              </div>
            ) : (
              <div className={cl.card} style={{ maxHeight: "65px" }}>
                <Typography variant="body1">
                  {searchParams.get("format")}
                </Typography>
                <Typography variant="body1">
                  {searchParams.get("lessonsPerWeek") || 3} р./тиждень
                </Typography>
              </div>
            )}
          </div>

          <div className={cl.schedule}>
            {searchParams.get("schedule") &&
              searchParams
                .get("schedule")
                ?.split("/")
                .map((day) => day.split("-"))
                .map((day: string[], dayIndex: number) => {
                  return (
                    <div className={cl.day} key={dayIndex}>
                      <Typography variant="h6">{days[dayIndex]}</Typography>
                      {day &&
                        day.map((variant, index) => {
                          switch (variant) {
                            case "inappropriate":
                              return (
                                <div
                                  key={index}
                                  className={getValidClassNames(
                                    cl.time,
                                    cl.inappropriate
                                  )}
                                >
                                  <p>
                                    {width! > 800
                                      ? time[index]
                                      : time[index].replace("\n-\n", "\n")}
                                  </p>
                                </div>
                              );

                            case "maybe":
                              return (
                                <div
                                  key={index}
                                  className={getValidClassNames(
                                    cl.time,
                                    cl.maybe
                                  )}
                                >
                                  <p>
                                    {width! > 800
                                      ? time[index]
                                      : time[index].replace("\n-\n", "\n")}
                                  </p>
                                </div>
                              );
                            case "perfect":
                              return (
                                <div
                                  key={index}
                                  className={getValidClassNames(
                                    cl.time,
                                    cl.perfect
                                  )}
                                >
                                  <p>
                                    {width! > 800
                                      ? time[index]
                                      : time[index].replace("\n-\n", "\n")}
                                  </p>
                                </div>
                              );
                          }
                        })}
                    </div>
                  );
                })}
          </div>

          <div className={cl.flexRow}>
            <div className={cl.card}>
              <Typography variant="body1">
                {searchParams.get("phone")}
              </Typography>
            </div>

            <div className={getValidClassNames(cl.card, cl.email)}>
              <Typography variant="body1">
                {searchParams.get("email")}
              </Typography>
            </div>

            <div className={getValidClassNames(cl.card, cl.price)}>
              <Typography variant="body1" style={{ fontWeight: 900 }}>
                {searchParams.get("price")}
              </Typography>
            </div>

            <div className={cl.card}>
              <Typography variant="body1" style={{ fontWeight: 900 }}>
                {searchParams.get("lessons")} уроків
              </Typography>
            </div>
          </div>

          {searchParams.get("comment") && (
            <div className={getValidClassNames(cl.card, cl.comment)}>
              <Typography variant="body1">
                {searchParams.get("comment")}
              </Typography>
            </div>
          )}
        </Suspense>
      </div>
    </main>
  );
}
