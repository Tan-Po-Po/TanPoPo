import { ISection } from "@/components/teamMemberCard/narrowTeamMemberCard/narrowTeamMemberCard";
import cl from "./sectionButton.module.scss";
import { Dispatch, SetStateAction } from "react";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";

interface SectionButtonProps {
  image: string;
  title: string;
  section: ISection;
  selected: ISection;
  setSelected: Dispatch<SetStateAction<ISection>>;
}

export function SectionButton({
  image,
  title,
  section,
  selected,
  setSelected,
}: SectionButtonProps) {
  const isSelected = section === selected;
  return (
    <div
      className={getValidClassNames(
        cl.sectionButton,
        isSelected && cl.selected
      )}
      onClick={() => setSelected(section)}
    >
      <Image
        alt=""
        src={getIconArtSrc(image)}
        width={500}
        height={300}
        style={{ width: "auto", height: "42px" }}
      />
      <div className={cl.title}>{title}</div>
    </div>
  );
}
