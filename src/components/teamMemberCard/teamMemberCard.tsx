"use client";
import Image from "next/image";
import cl from "./teamMemberCard.module.scss";
import getIconArtSrc from "@/helpers/getIconArtSrc";
import { Button, ContentCard } from "..";
import { useState } from "react";
import { ITeamMember } from "@/models/TeamMember";

interface Props {
  teamMember: ITeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ teamMember }) => {
  console.log(teamMember);

  const { label, name, image, certificates, education, about } = teamMember;

  console.log("certificates desc", certificates.description);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    return;
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    return;
  };

  return (
    <div className={cl.teamMemberCard}>
      <div className={cl.left}>
        <div className={cl.label} style={{ backgroundColor: label.color }}>
          {label.value.toUpperCase()}
        </div>
        <ContentCard
          className={cl.image}
          label={name}
          labelPosition="bottom"
          style={{ padding: 0, width: "fit-content", fontSize: "22px" }}
        >
          <Image
            src={image}
            alt=""
            width={340}
            height={274}
            style={{ objectFit: "cover", borderRadius: "10px", width: "340px" }}
          ></Image>
        </ContentCard>

        <div
          className={cl.certificatesWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ContentCard className={cl.certificates}>
            <div className={cl.imageWrapper}>
              <Image
                src={getIconArtSrc("suitcase2")}
                alt=""
                width={54}
                height={51}
              ></Image>
              <div className={cl.text}>Досвід сенсея:</div>
            </div>
            {certificates.keyPoints.map((item) => (
              <div className={cl.keyPoint} key={item}>
                {item}
              </div>
            ))}
          </ContentCard>
          <div className={cl.buttonWrapper}>
            <Button
              isParentHovered={isHovered}
              variant="outlined"
              icon="checkbox"
              style={{
                background: "linear-gradient(180deg, #fff9f8 0%, #fffbd8 100%)",
              }}
            >
              <div style={{ fontSize: "19px", fontWeight: "700" }}>
                Сертифікати
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className={cl.right}>
        <ContentCard className={cl.education} width="100%">
          <div className={cl.educationItem}>
            <div className={cl.imageWrapper}>
              <Image
                src={getIconArtSrc("toriGate1")}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
              ></Image>
              <div className={cl.text}>Рівень мови:</div>
            </div>
            <div className={cl.content}>{education.level}</div>
          </div>
          <hr className={cl.divider} />
          <div className={cl.educationItem}>
            <div className={cl.imageWrapper}>
              <Image
                src={getIconArtSrc("school")}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
              ></Image>
              <div className={cl.text}>Освіта:</div>
            </div>
            <div className={cl.content}>{education.university}</div>
          </div>
          <hr className={cl.divider} />
          <div className={cl.educationItem}>
            <div className={cl.imageWrapper}>
              <Image
                src={getIconArtSrc("awardTrophy1")}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
              ></Image>
              <div className={cl.text}>Тренінги:</div>
            </div>
            <div className={cl.content}>{education.trainings}</div>
          </div>
        </ContentCard>
        <div className={cl.about}>
          {about.map((paragraph, i) => (
            <ContentCard
              key={i}
              width="100%"
              style={{ padding: "8px" }}
              cardBgColor={paragraph.color}
            >
              {paragraph.text}
            </ContentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
