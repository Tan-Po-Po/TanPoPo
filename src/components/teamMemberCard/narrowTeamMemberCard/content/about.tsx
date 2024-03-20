import { ITeamMember } from "@/models/TeamMember";
import cl from "../narrowTeamMemberCard.module.scss";
import { ContentCard } from "@/components";

export const About = ({ about }: Pick<ITeamMember, "about">) => {
  return (
    <div className={cl.block}>
      <div className={cl.header}>Про себе:</div>
      {about.map((para, i) => (
        <ContentCard
          key={i}
          width="100%"
          style={{ padding: "8px" }}
          cardBgColor={para.color}
        >
          {para.text}
        </ContentCard>
      ))}
    </div>
  );
};
