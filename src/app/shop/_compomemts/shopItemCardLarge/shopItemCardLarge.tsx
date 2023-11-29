"use client";
import { IShopItem } from "@/models/ShopItem";
import cl from "./shopItemCardLarge.module.scss";
import { Button, ContentCard, Select, Typography } from "@/components";
import Carousel from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carouselItem/carouselItem";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { checkIfItemOnSale } from "@/helpers/checkIfItemOnSale";
import { getTextForSaleLabel } from "@/helpers/getTextForSaleLabel";
import { useState } from "react";
import HeartIcon from "/public/icons/heartWhite.svg";

type Props = Exclude<IShopItem, "small">;

const ShopItemCardLarge: React.FC<Props> = ({ _id, name, large }) => {
  const { available, gallery, variants, caption, hashtags, likes } = large;
  const dispatch = useAppDispatch();

  const [selectValue, setSelectValue] = useState(variants[0].value);
  const { value, label, price, sale } = variants.find(
    (item) => item.value === selectValue
  )!;

  const isOnSale = checkIfItemOnSale(sale?.until);

  const handleAddToCartClick = () => {};

  return (
    <ContentCard
      width="626px"
      label={name}
      className={cl.shopItemCardLargeMain}
    >
      <Carousel
        slidesToShow={2}
        centerMode={false}
        dots={false}
        focusOnSelect={false}
        className={cl.carousel}
      >
        {gallery.map((item) => (
          <CarouselItem
            key={item._id}
            isOutlined={true}
            className={cl.carouselItem}
            type={item.type}
            onClick={() =>
              dispatch(
                openGalleryDialog({
                  type: item.type,
                  src: item.type === "image" ? item.image : item.video!,
                })
              )
            }
          >
            <Image
              alt=""
              src={item.image}
              fill
              style={{ objectFit: "contain" }}
            />
          </CarouselItem>
        ))}
      </Carousel>
      <section className={cl.priceBlock}>
        <div className={cl.price}>
          {isOnSale && (
            <span>
              <Typography
                variant="h5"
                style={{ textDecoration: "line-through", color: "#343434" }}
              >
                {price} грн
              </Typography>
            </span>
          )}
          <Typography variant="h5" style={{ color: "#343434" }}>
            {sale?.price || price} грн
          </Typography>
        </div>
        {isOnSale && (
          <ContentCard width="fit-content" className={cl.date}>
            <Typography variant="subtitle2" style={{ fontWeight: "700" }}>
              {getTextForSaleLabel(sale!.until)}
            </Typography>
          </ContentCard>
        )}
      </section>

      <section className={cl.captionBlock}>
        {caption.map((line, i) => (
          <Typography key={i} variant="subtitle1">
            {line}
          </Typography>
        ))}
      </section>

      <section className={cl.hashtagsBlock}>
        {hashtags.map((tag, i) => (
          <ContentCard key={i} width="fit-content" className={cl.tag}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "700", lineHeight: "1.3rem" }}
            >
              {tag}
            </Typography>
          </ContentCard>
        ))}
      </section>

      <Select
        menuItems={variants}
        handleSelect={(value: string) => setSelectValue(value)}
      />

      {available ? (
        <Button variant="outlined" icon="cart">
          <Typography variant="body1">До Кошика</Typography>
        </Button>
      ) : (
        <ContentCard width="fit-content">
          <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
            Скоро у <br />
            продажу ☑️
          </Typography>
        </ContentCard>
      )}

      <ContentCard className={cl.labelBottom}>
        <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
          Додатково 10% знижки для наших учнів!
        </Typography>
      </ContentCard>

      <div className={cl.likes}>
        <HeartIcon />
        <div className={cl.amount}>{likes}</div>
      </div>
    </ContentCard>
  );
};

export default ShopItemCardLarge;
