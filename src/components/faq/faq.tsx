"use client";

import React from "react";
import { Typography } from "../typography/typography";
import { getValidClassNames } from "@/helpers";
import ArrowIcon from "public/icons/arrowDown.svg";

import cl from "./faq.module.scss";

type Properties = {
  question: string;
  answer: string;
  style?: any;
};

const Faq: React.FC<Properties> = ({ question, answer, style }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  console.log(question)
  console.log(answer)
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
        <Typography variant="body2">{answer}</Typography>
      </div>
    </div>
  );
};

export { Faq };
