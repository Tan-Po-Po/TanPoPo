import { ITeamMember } from "@/models/TeamMember";
import cl from "../narrowTeamMemberCard.module.scss";
import { Button } from "@/components";

interface Props extends Pick<ITeamMember, "education"> {
  handleDialogOpen: () => void;
}

export const Level: React.FC<Props> = ({ education, handleDialogOpen }) => {
  return (
    <>
      <div className={cl.block}>
        <div className={cl.header}>Рівень японської мови:</div>
        <div className={cl.caption}>{education.level}</div>
      </div>
      <div className={cl.block}>
        <div className={cl.header}>Додаткові тренінги:</div>
        <div className={cl.caption}>{education.trainings}</div>
      </div>
      <Button
        className={cl.button}
        onClick={handleDialogOpen}
        variant="outlined"
        style={{
          background: "linear-gradient(180deg, #FFF9F8 0%, #FFFBD8 100%)",
        }}
      >
        Сертифікати
      </Button>
    </>
  );
};
