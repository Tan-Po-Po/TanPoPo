import React from "react";
import { getValidClassNames } from "@/helpers";
import { Faq } from "./faq";
import cl from "./faq.module.scss";
import { getQuestions } from "./actions";

export type location = "courses" | "prices" | "contacts";

type Properties = {
  location: location;
};

const FaqBlock: React.FC<Properties> = async ({ location }) => {
  const questions = await getQuestions(location);

  return (
    <div className={getValidClassNames(cl.faqBlock)}>
      {questions &&
        questions.questionBlock.map((element, idx) => (
          <Faq key={idx} question={element.question} answer={element.answer} />
        ))}
    </div>
  );
};

export { FaqBlock };
