"use client";
import { ITeamMember } from "@/models/TeamMember";
import cl from "./teamBlock.module.scss";
import { useState } from "react";
import {
  Carousel,
  DialogGallery,
  TeamMemberCard,
  Typography,
} from "@/components";
import ArrowButton from "@/components/arrowButton/arrowButton";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";

interface Props {
  teamMembers: ITeamMember[];
}

export const TeamBlock: React.FC<Props> = ({ teamMembers }) => {
  const teamSize = teamMembers.length;

  const [index, setIndex] = useState(0);

  const { isPc } = useAppSelector(selectWindowMatchMedia);

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

  return (
    <div
      className={cl.teamBlock}
      id="team"
      style={{ scrollMarginTop: "120px" }}
    >
      <DialogGallery />

      <Typography variant="h3" style={{ marginBottom: "62px" }} align="center">
        КОМАНДА TANPOPO
      </Typography>
      {isPc ? (
        <>
          <TeamMemberCard teamMember={teamMembers[index]} />

          <div className={cl.navigation}>
            <ArrowButton direction="left" onClick={handleLeftArrowClick} />
            <Typography variant="h4">
              {index + 1} / {teamSize}
            </Typography>

            <ArrowButton direction="right" onClick={handleRightArrowClick} />
          </div>
        </>
      ) : (
        <Carousel
          infinite={false}
          slidesToShow={1}
          useNumbers={true}
          slideAmount={teamSize}
          dots={false}
          centerPadding="0"
          variableWidth={true}
          adaptiveHeight={true}
          className={cl.carousel}
          numbersClass={cl.numbers}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member._id} teamMember={member} />
          ))}
        </Carousel>
      )}
    </div>
  );
};
