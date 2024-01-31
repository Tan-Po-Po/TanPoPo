import { IShopPartner } from "@/models/ShopPartner";
import cl from "./shopPartnerCard.module.scss";
import { ContentCard, Typography } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";

interface Props {
  partner: IShopPartner;
}

export const ShopPartnerCard: React.FC<Props> = ({ partner }) => {
  const {
    bgColor,
    href,
    labelTop,
    labelBottom,
    logo,
    name,
    caption,
    items,
    hashtags,
  } = partner;
  return (
    <ContentCard
      className={cl.shopPartnerCard}
      width="fit-content"
      label={
        <Typography variant="body1" style={{ fontWeight: "700" }}>
          {labelTop.text}
        </Typography>
      }
      cardBgColor={bgColor}
      labelBgColor={labelTop.bgColor}
    >
      <div className={cl.nameCaptionWrapper}>
        <Link href={href} target="_blank" className={cl.name}>
          <Image
            alt=""
            src={`${IMAGE_BASE_URL}/${logo.filename}`}
            width={500}
            height={500}
            className={cl.logoImage}
            style={{ width: "97px", height: "97px" }}
          />
          <Typography variant="body1" style={{ fontWeight: "700" }}>
            {name}
          </Typography>
        </Link>
        <div className={cl.caption}>
          <ul>
            {caption.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cl.items}>
        {items.map((item) => (
          <Link key={item.id} href={item.href}>
            <ContentCard className={cl.itemImage}>
              <Image
                alt=""
                src={`${IMAGE_BASE_URL}/${item.image.filename}`}
                fill
                sizes="(max-width: 2400px) 147px"
                style={{ borderRadius: "7px" }}
              />
            </ContentCard>
          </Link>
        ))}
      </div>
      <div className={cl.hashtags}>
        {hashtags.map((hashtag, i) => (
          <ContentCard
            width="fit-content"
            key={i}
            className={cl.hashtag}
            cardBgColor={bgColor}
          >
            <Typography variant="subtitle2" style={{ fontWeight: 700 }}>
              {hashtag}
            </Typography>
          </ContentCard>
        ))}
      </div>

      <ContentCard
        className={cl.labelBottom}
        width="fit-content"
        cardBgColor={labelBottom?.bgColor}
      >
        <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
          {labelBottom?.text}
        </Typography>
      </ContentCard>
    </ContentCard>
  );
};
