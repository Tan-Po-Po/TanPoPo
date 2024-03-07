"use client";
import Image from "next/image";
import { getIconArtSrc, getIconSrc, getValidClassNames } from "@/helpers";
import { Button } from "@/components/button/button";
import { ContentCard } from "@/components/contentCard/contentCard";
import { useState } from "react";
import { ITeamMember } from "@/models/TeamMember";
import { IMAGE_BASE_URL } from "@/config/config";
import cl from "./teamMemberCard.module.scss";
import { DialogCertificates } from "./dialogCertificates/dialogCertificates";
import { NarrowTeamMemberCard } from "./narrowTeamMemberCard/narrowTeamMemberCard";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";

interface Props {
  teamMember: ITeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ teamMember }) => {
  const { label, name, image, certificates, education, about, video } =
    teamMember;
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const isPc = Boolean(width && width >= 1024);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  let card;

  if (!isPc) {
    card = (
      <NarrowTeamMemberCard
        teamMember={teamMember}
        handleDialogOpen={handleDialogOpen}
      />
    );
  } else {
    card = (
      <div className={cl.teamMemberCard}>
        <div className={cl.left}>
          <div className={cl.label} style={{ background: label.color }}>
            {label.value.toUpperCase()}
          </div>
          <ContentCard
            className={getValidClassNames(cl.image, video && cl.imageWithVideo)}
            label={name}
            labelPosition="bottom"
            style={{ padding: 0, width: "fit-content", fontSize: "22px" }}
          >
            <Image
              src={`${IMAGE_BASE_URL}/${image.filename}`}
              alt=""
              width={500}
              height={300}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                width: "340px",
                height: "274px",
              }}
              onClick={() => {
                if (video) {
                  dispatch(
                    openGalleryDialog({
                      type: "video",
                      src: video,
                    })
                  );
                }
              }}
            />
            {video && (
              <Image
                src={getIconSrc("youTubeYellow")}
                alt="Video icon"
                width={48}
                height={39}
                className={cl.videoIcon}
              />
            )}
          </ContentCard>

          <div className={cl.certificatesWrapper}>
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
                onClick={handleDialogOpen}
                variant="outlined"
                icon="checkbox"
                wrapperClass={cl.btnWrapper}
                style={{
                  background:
                    "linear-gradient(180deg, #fff9f8 0%, #fffbd8 100%)",
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
                    maxWidth: "53px",
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
  }

  return (
    <>
      {card}
      <DialogCertificates
        open={isDialogOpen}
        onClose={handleDialogClose}
        certificates={certificates}
      />
    </>
  );
};

export { TeamMemberCard };
