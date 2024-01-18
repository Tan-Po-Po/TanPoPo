import cl from "./page.module.scss";
import { textContent } from "./textContent";
import { ContentCard, Typography } from "@/components";
import Image from "next/image";

export default function Requisites() {
  return (
    <div className={cl.requisites}>
      <Typography variant="h3" align="center">{textContent.header}</Typography>

      <ContentCard
        className={cl.requisitesCard}
        width="784px"
        cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
      >
        <div className={cl.wrapper}>
          <div className={cl.column}>
            {textContent.requisites.left.map((obj, i) => (
              <ContentCard key={i} className={cl.tile}>
                <Typography variant="h5">{obj.title}</Typography>
                <Typography variant="body2">{obj.caption}</Typography>
              </ContentCard>
            ))}
          </div>
          <div className={cl.column}>
            {textContent.requisites.right.map((obj, i) => (
              <ContentCard key={i} className={cl.tile}>
                <Typography variant="h5">{obj.title}</Typography>
                <Typography variant="body2">{obj.caption}</Typography>
              </ContentCard>
            ))}
          </div>
        </div>
        <div className={cl.footer}>
          <Typography variant="subtitle1">
            {textContent.requisites.caption}
          </Typography>
        </div>
      </ContentCard>

      <div className={cl.text}>
        <Typography variant="body1">АБО</Typography>
        <Typography variant="subtitle1" align="center">
          Швидка оплата за QR-кодом нашої школи!
        </Typography>
      </div>

      <div className={cl.qrCodesBlock}>
        {textContent.requisites.qrCodes.map((code, i) => (
          <ContentCard width="252px" key={i}>
            <Typography variant="body1">{code.title}</Typography>
            <Image
              alt=""
              src={code.image}
              height={500}
              width={500}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
        ))}
      </div>
    </div>
  );
};
