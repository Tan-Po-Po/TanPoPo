import { IShopPartner } from "@/models/ShopPartner";
import cl from "./shopPartnerCard.module.scss";
import { ContentCard, Typography } from "@/components";
import Link from "next/link";
import Image from "next/image";

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
      width="384px"
      label={
        <Typography variant="body1" style={{ fontWeight: "700" }}>
          {labelTop.text}
        </Typography>
      }
      cardBgColor={bgColor}
      labelBgColor={labelTop.bgColor}
    >
      <Link href={href} className={cl.name}>
        <Image
          alt=""
          src={logo}
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

      <div className={cl.items}>
        {items.map((item) => (
          <ContentCard key={item._id} className={cl.itemImage}>
            <Link href={item.href}>
              <Image
                alt=""
                src={item.image}
                fill
                sizes="100vw"
                style={{ borderRadius: "7px" }}
              />
            </Link>
          </ContentCard>
        ))}
      </div>
      <div className={cl.hashtags}>
        {hashtags.map((hashtag, i) => (
          <ContentCard width="fit-content" key={i} className={cl.hashtag}>
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

export default ShopPartnerCard;
