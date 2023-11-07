"use client";

import React from "react";
import { Typography } from "../../components/typography/typography";
import { getIconSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";

import cl from "./faq.module.scss";

type Properties = {
  question: string;
  answer: string;
};

const Faq: React.FC<Properties> = ({ question, answer }) => {
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleAnswer = (event: any) => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      className={getValidClassNames(cl.faq, isOpened && cl.opened)}
      onClick={toggleAnswer}
    >
      <div className={cl.question}>
        <Typography className={cl.questionBody} variant="body1">
          {question}
        </Typography>
        <div className={cl.iconWrapper}>
          {" "}
          <Image
            className={cl.icon}
            src={getIconSrc("arrowDown")}
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
