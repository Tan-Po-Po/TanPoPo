"use client";
import Image from "next/image";
import ContentCard from "../contentCard/contentCard";
import cl from "./teamMemberCard.module.scss";
import getIconArtSrc from "@/helpers/getIconArtSrc";
import { Button } from "..";
import { useRef, useState } from "react";

interface Props {
  label: { value: string; color: string };
  name: string;
  image: string;
  certificates: {
    href: string;
    description: string[];
  };
  education: {
    level: string;
    university: string;
    trainings: string;
  };
  description: {
    lineOne: string;
    lineTwo: string;
    lineThree: string;
    lineFour: string;
  };
}

const TeamMemberCard: React.FC<Props> = ({
  label,
  name,
  image,
  certificates,
  education,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
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
            {certificates.description.map((item) => (
              <div className={cl.description} key={item}>
                {item}
              </div>
            ))}
          </ContentCard>
          <div className={cl.buttonWrapper}>
            <Button
              isParentHovered={isHovered}
              variant="outlined"
              icon={"checkbox"}
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
        <div className={cl.description}>
          <ContentCard
            width="100%"
            style={{ padding: "8px" }}
            cardBgColor="#FFF1E9"
          >
            {description.lineOne}
          </ContentCard>
          <ContentCard
            width="100%"
            style={{ padding: "8px" }}
            cardBgColor="#EEFFE5"
          >
            {description.lineTwo}
          </ContentCard>
          <ContentCard
            width="100%"
            style={{ padding: "8px" }}
            cardBgColor="#E3F0FF"
          >
            {description.lineThree}
          </ContentCard>
          <ContentCard
            width="100%"
            style={{ padding: "8px" }}
            cardBgColor="#FFFCE2"
          >
            {description.lineFour}
          </ContentCard>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
