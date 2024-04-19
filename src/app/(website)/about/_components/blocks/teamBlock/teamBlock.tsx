"use client";
import { ITeamMember } from "@/models/TeamMember";
import cl from "./teamBlock.module.scss";
import { Carousel } from "@/components/carousel/carousel";
import { DialogGallery } from "@/components/dialogGallery/dialogGallery";
import { TeamMemberCard } from "@/components/teamMemberCard/teamMemberCard";
import { Typography } from "@/components/typography/typography";

interface Props {
  teamMembers: ITeamMember[];
}

export const TeamBlock: React.FC<Props> = ({ teamMembers }) => {
  const teamSize = teamMembers.length;

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

      <Carousel
        infinite={true}
        slidesToShow={1}
        useNumbers={true}
        slideAmount={teamSize}
        dots={false}
        centerPadding="0"
        variableWidth={true}
        adaptiveHeight={true}
        className={cl.carousel}
        numbersClass={cl.numbers}
        autoplay
        autoplaySpeed={7000}
        pauseOnClick
      >
        {teamMembers.map((member) => (
          <TeamMemberCard key={member._id} teamMember={member} />
        ))}
      </Carousel>
    </div>
  );
};
