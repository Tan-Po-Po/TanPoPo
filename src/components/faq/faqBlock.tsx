import React from "react";
import { getQuestions, getValidClassNames } from "@/helpers";
import { IQuestion } from "@/models/Question";
import { Faq } from "./faq";
import cl from "./faq.module.scss";

type Properties = {
  location: "courses" | "prices" | "contacts";
};

const FaqBlock: React.FC<Properties> = async ({ location }) => {
  const { questions } = (await getQuestions(location)) as {
    questions: IQuestion;
  };

  return (
    <div className={getValidClassNames(cl.faqBlock)}>
      {questions.questionBlock.map((element, idx) => (
        <Faq key={idx} question={element.question} answer={element.answer} />
      ))}
    </div>
  );
};

export { FaqBlock };
