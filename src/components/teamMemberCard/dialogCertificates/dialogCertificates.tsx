import cl from "./dialogCertificates.module.scss";

import { Dialog } from "../../dialog/dialog";
import { Typography } from "../../typography/typography";
import Image from "next/image";
import { ITeamMember } from "@/models/TeamMember";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { ContentCard } from "../..";
import { IMAGE_BASE_URL } from "@/config/config";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";

interface Props extends Pick<ITeamMember, "certificates"> {
  open: boolean;
  onClose: () => void;
}

export const DialogCertificates: React.FC<Props> = ({
  open,
  onClose,
  certificates,
}) => {
  const dispatch = useAppDispatch();

  const handleOpenCertificateImage = (filename: string) => {
    const src = `${IMAGE_BASE_URL}/${filename}`;
    dispatch(openGalleryDialog({ type: "image", src }));
  };
  return (
    <Dialog
      className={cl.dialog}
      open={open}
      onClose={onClose}
      scroll="paper"
      contentClassName={getValidClassNames(
        cl.dialogContent,
        certificates.description.length === 0 && cl.emptyCertificates
      )}
      titleClassName={cl.title}
      closeIconClassName={cl.closeIcon}
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
      {certificates.description.length === 0 ? (
        <Typography
          variant="body2"
          align="center"
          style={{ whiteSpace: "pre" }}
        >
          {"Незабаром тут з'являться \nсертифікати сенсея!📚"}
        </Typography>
      ) : (
        certificates.description.map((certificate) => (
          <ContentCard
            key={certificate._id}
            className={cl.certificate}
            label={
              <Typography
                variant="body1"
                style={{ fontWeight: "700", whiteSpace: "pre" }}
              >
                {certificate.label}
              </Typography>
            }
            style={{ gap: "26px" }}
            labelPosition="top"
            labelBgColor="linear-gradient(180deg, #FFF 0%, #FFFBD9 100%)"
            cardBgColor="linear-gradient(180deg, #FFFAF9 0%, #FFFBD8 100%)"
            labelClassName={cl.certificateLabel}
            onClick={() =>
              handleOpenCertificateImage(certificate.image.filename)
            }
          >
            <ContentCard
              style={{
                width: "215px",
                height: "215px",
                padding: "36px 10px",
              }}
            >
              <Image
                src={`${IMAGE_BASE_URL}/${certificate.image.filename}`}
                alt=""
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </ContentCard>
            <div className={cl.caption}>{certificate.caption}</div>
          </ContentCard>
        ))
      )}
    </Dialog>
  );
};
