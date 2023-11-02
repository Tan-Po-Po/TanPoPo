"use client";

import Image from "next/image";

import { getIconArtSrc } from "@/helpers";
import { ContentCard } from "../contentCard/contentCard";
import { Button, Typography } from "..";
import { useState } from "react";
import { ITeamMember } from "@/models/TeamMember";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import XIcon from "./plus.svg";

import cl from "./teamMemberCard.module.scss";
interface Props {
  teamMember: ITeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ teamMember }) => {
  // console.log(teamMember);

  const { label, name, image, certificates, education, about } = teamMember;

  // console.log("certificates desc", certificates.description);

  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    return;
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    return;
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
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
            width={500}
            height={300}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "340px",
              height: "274px",
            }}
          ></Image>
        </ContentCard>

        <div
          className={cl.certificatesWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ContentCard className={cl.certificates} onClick={handleDialogOpen}>
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
            <Dialog
              className={cl.dialog}
              open={isDialogOpen}
              onClose={() => handleDialogClose()}
            >
              <XIcon className={cl.close} onClick={handleDialogClose} />

              <DialogTitle className={cl.title}>
                <Typography
                  variant="h3"
                  style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.17)" }}
                >
                  Сертифікати{" "}
                </Typography>
                <Image
                  src={getIconArtSrc("certificate3")}
                  alt=""
                  width={500}
                  height={300}
                  style={{ width: "52px", height: "auto" }}
                />
              </DialogTitle>
              <DialogContent className={cl.content}>
                {certificates.description.map((certificate) => (
                  <ContentCard
                    key={certificate._id}
                    label={
                      <Typography variant="body1" style={{ fontWeight: "700" }}>
                        {certificate.label}
                      </Typography>
                    }
                    style={{ gap: "26px" }}
                    labelPosition="top"
                    labelBgColor="linear-gradient(180deg, #FFF 0%, #FFFBD9 100%)"
                    cardBgColor="linear-gradient(180deg, #FFFAF9 0%, #FFFBD8 100%)"
                  >
                    <ContentCard
                      style={{
                        width: "215px",
                        height: "215px",
                        padding: "36px 10px",
                      }}
                    >
                      <Image
                        src={certificate.image}
                        alt=""
                        width={500}
                        height={300}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </ContentCard>
                    <div className={cl.caption}>{certificate.caption}</div>
                  </ContentCard>
                ))}
              </DialogContent>
            </Dialog>
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

export { TeamMemberCard };
