"use client";
import { ITeamMember } from "@/models/TeamMember";
import cl from "./teamBlock.module.scss";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { TeamMemberCard } from "@/components";
import ArrowButton from "@/components/arrowButton/arrowButton";

interface Props {
  teamMembers: ITeamMember[];
}

export const TeamBlock: React.FC<Props> = ({ teamMembers }) => {
  const teamSize = teamMembers.length;

  const [index, setIndex] = useState(0);

  const handleRightArrowClick = () => {
    if (index === teamSize - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (index === 0) {
      setIndex(teamSize - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    console.log("index", index);
  }, [index]);

  return (
    <div className={cl.teamBlock} id="team">
      <Typography variant="h3" style={{ marginBottom: "62px" }}>
        КОМАНДА TANPOPO
      </Typography>

      <TeamMemberCard teamMember={teamMembers[index]} />

      <div className={cl.navigation}>
        <ArrowButton
          direction="left"
          onClick={handleLeftArrowClick}
          style={{ transform: "translate(-85%, -15%) rotate(180deg)" }}
        />
        <Typography variant="h4" style={{ color: "#595959" }}>
          {index + 1} / {teamSize}
        </Typography>

        <ArrowButton
          direction="right"
          onClick={handleRightArrowClick}
          style={{ transform: "translate(90%, 8%)" }}
        />
      </div>
    </div>
  );
};
