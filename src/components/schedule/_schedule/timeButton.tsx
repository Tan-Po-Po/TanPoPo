import React from "react";
import { ButtonProps } from "@mui/material";
import { Button } from "@/components/button/button";
import { getValidClassNames } from "@/helpers";

import cl from "./schedule.module.scss";
import { ISchedule } from "./type";

type Properties = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setSchedule: React.Dispatch<any>;
  dayIndex: number;
  lessonIndex: number;
} & ButtonProps;

const TimeButton: React.FC<Properties> = ({
  setSchedule,
  setCounter,
  dayIndex,
  lessonIndex,
  ...props
}) => {
  const [variant, setVariant] = React.useState("inappropriate");

  const changeVariant = (variant: string) => {
    setSchedule((prev: any) => {
      prev[dayIndex][lessonIndex] = variant;
      return prev;
    });

    setVariant(variant as "inappropriate" | "maybe" | "perfect");
  };

  const handleClick = () => {
    switch (variant) {
      case "inappropriate":
        setCounter((prev) => ++prev);
        changeVariant("maybe");
        break;
      case "maybe":
        changeVariant("perfect");
        break;
      case "perfect":
        setCounter((prev) => --prev);
        changeVariant("inappropriate");
        break;
    }
  };
  return (
    <Button
      {...props}
      className={getValidClassNames(
        cl.timeBtn,
        variant === "inappropriate" && cl.inappropriateBtn,
        variant === "maybe" && cl.maybeBtn,
        variant === "perfect" && cl.perfectBtn
      )}
      onClick={handleClick}
    />
  );
};

export { TimeButton };
