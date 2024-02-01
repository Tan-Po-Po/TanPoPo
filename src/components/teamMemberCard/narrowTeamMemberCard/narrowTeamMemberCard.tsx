import { ITeamMember } from "@/models/TeamMember";
import cl from "./narrowTeamMemberCard.module.scss";
import mcl from "../teamMemberCard.module.scss";
import { ContentCard } from "@/components";
import Image from "next/image";
import { getValidClassNames } from "@/helpers";
import { useState } from "react";
import { Level } from "./content/level";
import { Experience } from "./content/experience";
import { Education } from "./content/education";
import { About } from "./content/about";
import { SectionButton } from "@/app/(website)/about/_components/sectionButton/sectionButton";
import { IMAGE_BASE_URL } from "@/config/config";

interface Props {
  teamMember: ITeamMember;
  handleDialogOpen: () => void;
}

export type ISection = "level" | "experience" | "education" | "about";

export const NarrowTeamMemberCard: React.FC<Props> = ({
  teamMember,
  handleDialogOpen,
}) => {
  const { label, name, image, certificates, education, about } = teamMember;

  const [selected, setSelected] = useState<ISection>("level");

  let content;

  switch (selected) {
    case "level":
      content = (
        <Level education={education} handleDialogOpen={handleDialogOpen} />
      );
      break;

    case "experience":
      content = <Experience certificates={certificates} />;
      break;

    case "education":
      content = <Education education={education} />;
      break;

    case "about":
      content = <About about={about} />;
      break;

    default:
      break;
  }

  return (
    <div className={cl.narrowTeamMemberCard}>
      <div className={cl.left}>
        <div
          className={getValidClassNames(mcl.label, cl.label)}
          style={{ background: label.color }}
        >
          {label.value.toUpperCase()}
        </div>
        <ContentCard
          width="298px"
          className={cl.image}
          label={name}
          labelPosition="bottom"
          style={{ padding: 0, width: "fit-content", fontSize: "18px" }}
        >
          <Image
            alt=""
            src={`${IMAGE_BASE_URL}/${image.filename}`}
            width={500}
            height={300}
            style={{
              width: "100%",
              maxWidth: "298px",
              height: "auto",
              maxHeight: " 241px",
            }}
          />
        </ContentCard>
      </div>

      <div className={cl.line}></div>

      <div className={cl.right}>
        <div className={cl.buttons}>
          <SectionButton
            image="toriGate1"
            title="Рівень"
            selected={selected}
            section="level"
            setSelected={setSelected}
          />

          <SectionButton
            image="suitcase2"
            title="Досвід"
            selected={selected}
            section="experience"
            setSelected={setSelected}
          />

          <SectionButton
            image="school"
            title="Освіта"
            selected={selected}
            section="education"
            setSelected={setSelected}
          />

          <SectionButton
            image="flowers"
            title="Про себе"
            selected={selected}
            section="about"
            setSelected={setSelected}
          />
        </div>

        <div className={cl.content}>{content}</div>
      </div>
    </div>
  );
};
