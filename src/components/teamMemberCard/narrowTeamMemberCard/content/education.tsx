import { ITeamMember } from "@/models/TeamMember";
import cl from "../narrowTeamMemberCard.module.scss";

export const Education = ({ education }: Pick<ITeamMember, "education">) => {
  return (
    <>
      <div className={cl.block}>
        <div className={cl.header}>Освіта</div>
        <div className={cl.caption}>{education.university}</div>
      </div>
    </>
  );
};
