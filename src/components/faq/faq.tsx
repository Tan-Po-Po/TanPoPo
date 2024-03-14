"use client";

import React from "react";
import { Typography } from "../typography/typography";
import { getValidClassNames } from "@/helpers";
import ArrowIcon from "public/icons/arrowDown.svg";

import cl from "./faq.module.scss";
import Link from "next/link";

type Properties = {
  question: string;
  answer: [
    {
      text: string;
      link?: string;
    }
  ];
  style?: any;
};

const Faq: React.FC<Properties> = ({ question, answer, style }) => {
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleAnswer = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      className={getValidClassNames(cl.faq, isOpened && cl.opened)}
      onClick={toggleAnswer}
      style={style}
    >
      <div className={cl.question}>
        <Typography className={cl.questionBody} variant="body1">
          {question}
        </Typography>
        <div className={cl.iconWrapper}>
          {" "}
          <ArrowIcon
            style={{ stroke: "black" }}
            className={cl.icon}
            alt="arrow"
            width={22}
            height={11}
          />
        </div>
      </div>
      <div className={getValidClassNames(cl.answer)}>
        <div className={cl.line}></div>
        <Typography variant="body2">
          {answer.map((item, idx) => (
            <span key={idx}>
              {idx > 0 ? " " : ""}
              {item.link ? (
                <Link href={item.link!} onClick={(e) => e.stopPropagation()}>
                  {item.text}
                </Link>
              ) : (
                item.text
              )}
            </span>
          ))}
        </Typography>
      </div>
    </div>
  );
};

export { Faq };
