import { ITeamMember } from "@/models/TeamMember";
import cl from "../narrowTeamMemberCard.module.scss";
import mcl from "../../teamMemberCard.module.scss";
import { getValidClassNames } from "@/helpers";

export const Experience = ({
  certificates,
}: Pick<ITeamMember, "certificates">) => {
  return (
    <div className={cl.block}>
      <div className={cl.header}>Досвід:</div>
      {certificates.keyPoints.map((item) => (
        <div
          className={getValidClassNames(mcl.keyPoint, cl.keyPoint)}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
