import cl from "./dialogCertificates.module.scss";

import { Dialog } from "../dialog/dialog";
import { Typography } from "../typography/typography";
import Image from "next/image";
import { ITeamMember } from "@/models/TeamMember";
import { getIconArtSrc } from "@/helpers";
import { ContentCard } from "..";

interface Props extends Pick<ITeamMember, "certificates"> {
  open: boolean;
  onClose: () => void;
}

export const DialogCertificates: React.FC<Props> = ({
  open,
  onClose,
  certificates,
}) => {
  return (
    <Dialog
      className={cl.dialog}
      open={open}
      onClose={onClose}
      contentClassName={cl.dialogContent}
      title={
        (
          <>
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
          </>
        ) as any
      }
    >
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
          labelClassName={cl.certificateLabel}
        >
          <ContentCard
            style={{
              width: "215px",
              height: "215px",
              padding: "36px 10px",
            }}
          >
            <Image
              src={`/media/${certificate.image.filename}`}
              alt=""
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
          <div className={cl.caption}>{certificate.caption}</div>
        </ContentCard>
      ))}
    </Dialog>
  );
};
