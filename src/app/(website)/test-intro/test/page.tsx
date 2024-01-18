"use client";
import { useEffect, useRef, useState } from "react";
import cl from "./page.module.scss";
import { Button, ContentCard, Typography, Loading } from "@/components";
import { textContent } from "./textContent";

import { SubmitHandler, useForm } from "react-hook-form";

import Result from "./_result/result";

const colors = [
  "#F1FFEE",
  "#EEFBFF",
  "#FFFBEE",
  "#FFEEFE",
  "#FFEEEE",
  "#EEEEFF",
  "#FFF5EE",
];

type InputForm = {
  subquestion0: string;
  subquestion1: string;
};

export default function Test() {
  const [loading, setLoading] = useState(true);
  const [levelIndex, setLevelIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [testResult, setTestResult] = useState<null | string>(null);

  const level = textContent[levelIndex];
  const test = level.tests[testIndex];
  const progressEvaluation = (100 / level.tests.length) * (testIndex + 1);

  const [progress, setProgress] = useState(progressEvaluation);

  const pointsToProceed = level.pointsToProceed;
  const points = useRef(0);
  const testNumber = useRef(1);

  const { register, handleSubmit, reset } = useForm<InputForm>({
    defaultValues: {
      subquestion0: "",
      subquestion1: "",
    },
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    setProgress(progressEvaluation);
  }, [testIndex, progressEvaluation]);

  const formAction: SubmitHandler<InputForm> = (answers) => {
    testNumber.current++;
    reset({
      subquestion0: "",
      subquestion1: "",
    });

    let i = 0;
    for (const [key, value] of Object.entries(answers)) {
      if (i === test.subquestions.length) {
        break;
      }
      if (value == test.subquestions[i].correctAnswer) {
        points.current++;
        i++;
      }
    }

    if (
      testIndex === level.tests.length - 1 &&
      points.current >= pointsToProceed
    ) {
      if (levelIndex === textContent.length - 1) {
        setTestResult(level.level);
        return;
      }

      setLevelIndex((prevIndex) => prevIndex + 1);
      setTestIndex(0);
      points.current = 0;
      return;
    } else if (
      testIndex === level.tests.length - 1 &&
      points.current < pointsToProceed
    ) {
      if (levelIndex === textContent.length - 1) {
        setTestResult(textContent[levelIndex - 1].level);
        return;
      }

      setTestResult(level.level);
      return;
    }

    setTestIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return <Loading />;
  }

  if (testResult) {
    return (
      <div className={cl.test}>
        <Result result={testResult} />
      </div>
    );
  }

  return (
    <div className={cl.test}>
      <Typography variant="h3">ОНЛАЙН-ТЕСТ</Typography>

      <div className={cl.progressBar}>
        <div className={cl.line}></div>
        <div className={cl.barWrapper}>
          <div className={cl.progress} style={{ width: `${progress}%` }}></div>
          <ContentCard width="336px" className={cl.bar}>
            <Typography variant="h6">Рівень JLPT: {level.level}</Typography>
            <Typography variant="subtitle1">
              Завдання {testIndex + 1} з {level.tests.length}
            </Typography>
          </ContentCard>
        </div>
      </div>

      <form id="testForm" onSubmit={handleSubmit(formAction)}>
        <ContentCard
          width="1210px"
          index={testNumber.current}
          indexBgColor="white"
          cardBgColor={colors[testIndex]}
          className={cl.testForm}
        >
          <Typography variant="h4">{test.question}</Typography>
          <div className={cl.subContainer}>
            {test.subquestions.map((sub, subIndex) => (
              <ContentCard
                label={`${subIndex + 1}. ${sub.question}`}
                labelPosition="top"
                labelBgColor="white"
                key={subIndex}
                className={cl.subQuestion}
                labelClassName={cl.label}
              >
                <fieldset name={`subquestion${subIndex}`}>
                  <ol type="a">
                    {sub.answers.map((answer, i) => (
                      <label key={i} htmlFor={answer} className={cl.variant}>
                        <li>
                          {answer}
                          <input
                            type="radio"
                            value={answer}
                            id={answer}
                            style={{ display: "none" }}
                            {...register(
                              `subquestion${subIndex}` as
                                | "subquestion0"
                                | "subquestion1",
                              { required: true }
                            )}
                          />
                        </li>
                      </label>
                    ))}
                  </ol>
                </fieldset>
              </ContentCard>
            ))}
          </div>
        </ContentCard>
      </form>

      <Button
        variant="outlined"
        form="testForm"
        className={cl.button}
        icon="playButtonTest"
        type="submit"
      >
        <Typography variant="h6">Продовжити</Typography>
      </Button>
    </div>
  );
}
