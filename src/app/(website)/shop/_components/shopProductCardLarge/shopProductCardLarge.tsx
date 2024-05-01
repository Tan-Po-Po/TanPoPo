"use client";

import cl from "./shopProductCardLarge.module.scss";
import { IShopProduct } from "@/models/ShopProduct";
import {
  Button,
  ContentCard,
  Select,
  Typography,
  Carousel,
  CarouselItem,
} from "@/components";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import { getTextForSaleLabel, getValidClassNames } from "@/helpers/";
import { useEffect, useState } from "react";
import HeartIcon from "/public/icons/heart.svg";
import {
  ICartItem,
  getShopItemFromDbAndAddToCart,
  selectShopCart,
} from "@/redux/slices/shopCart/shopCartSlice";
import { Counter } from "../counter/counter";
import { toggleLikeToShopProduct } from "./actions";
import { IMAGE_BASE_URL } from "@/config/config";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = Omit<IShopProduct, "small">;

export const ShopProductCardLarge: React.FC<Props> = ({ _id, name, large }) => {
  const {
    available,
    gallery,
    variants,
    caption,
    hashtags,
    likes,
    inDevelopment,
  } = large;

  const availableVariant = variants.find((variant) => variant.isAvailable);
  const [selectValue, setSelectValue] = useState(
    availableVariant?.value || variants[0].value
  );

  const [isMounted, setIsMounted] = useState(false);

  const item = variants.find((item) => item.value === selectValue)!;
  const { id: itemId, price, sale, value } = item;
  const isCertificates = price <= 0;

  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set([]));
  const [cartItem, setCartItem] = useState<ICartItem>();

  const [likesAmount, setLikesAmount] = useState(likes);
  const shopCart = useAppSelector(selectShopCart);
  const dispatch = useAppDispatch();

  const productIsLiked = likedProducts.has(_id!);

  const isOnSale = sale && new Date() < new Date(sale.until);
  if (isOnSale) {
    const now = new Date();
    const saleUntil = new Date(sale.until);
  }
  const { width } = useWindowSize();

  useEffect(() => {
    setCartItem(shopCart.items.find((item) => item.variantId == itemId));
    setLikedProducts(getLikedProductsFromLocalStorage());
  }, [itemId, shopCart.items]);

  const handleAddToCartClick = async (e: any) => {
    e.stopPropagation();
    if (shopCart.loading) {
      return;
    }
    dispatch(getShopItemFromDbAndAddToCart({ id: _id!, value }));
  };

  const handleLikeClick = async (e: any) => {
    e.stopPropagation();
    const isLiked = likedProducts.has(_id!);

    await toggleLikeToShopProduct(_id!, isLiked);

    isLiked ? likedProducts.delete(_id!) : likedProducts.add(_id!);

    localStorage.setItem("likedProducts", JSON.stringify([...likedProducts]));

    setLikesAmount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  let button: React.ReactNode;

  if (isCertificates) {
    button = (
      <Button variant="outlined" href="/gift-education" className={cl.button}>
        <Typography variant="body1">
          Навчання у <br /> Подарунок!
        </Typography>
      </Button>
    );
  } else if (available) {
    const isVariantAvailable = variants.find(
      (variant) => variant.value === selectValue
    )?.isAvailable;
    if (inDevelopment || !isVariantAvailable) {
      {
        button = (
          <ContentCard width="fit-content" className={cl.soonOnMarket}>
            <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
              Скоро у <br />
              продажу ☑️
            </Typography>
          </ContentCard>
        );
      }
    } else if (!cartItem) {
      button = (
        <Button
          variant="outlined"
          icon="cart"
          onClick={handleAddToCartClick}
          className={cl.button}
        >
          <Typography variant="body1">До Кошика</Typography>
        </Button>
      );
    } else if (cartItem) {
      button = <Counter variantId={itemId!} amount={cartItem.amount} />;
    }
  }

  return (
    <ContentCard
      width="626px"
      label={
        <Typography
          variant="h2"
          style={{ fontWeight: "700", fontSize: "20px" }}
        >
          {name}
        </Typography>
      }
      className={getValidClassNames(
        cl.shopProductCardLargeMain,
        name.includes("сертифікат") && cl.certificate
      )}
      id={_id}
    >
      <div
        className={cl.beforeCaptionBlockWrapper}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <Carousel
          slidesToShow={width! < 666 ? 1 : 2}
          centerMode={width! < 666}
          dots={false}
          focusOnSelect={false}
          className={cl.carousel}
          useNumbers={false}
        >
          {gallery.map((item, i) => (
            <CarouselItem
              key={i}
              isOutlined={true}
              className={cl.carouselItem}
              type={item.type}
              onClick={() =>
                dispatch(
                  openGalleryDialog({
                    type: item.type,
                    src:
                      item.type === "image"
                        ? `${IMAGE_BASE_URL}/${item.image.filename}`
                        : item.video!,
                  })
                )
              }
            >
              <Image
                alt="Зображення товару"
                src={`${IMAGE_BASE_URL}/${item.image.filename}`}
                fill
                sizes="(max-width: 2400px) 215px"
                style={{
                  objectFit: "contain",
                  backgroundSize: "60%",
                }}
                className={cl.image}
                placeholder={`data:image/svg+xml;base64,${toBase64(spinner())}`}
              />
            </CarouselItem>
          ))}
        </Carousel>

        {!isCertificates && (
          <section className={cl.priceBlock}>
            <div className={cl.price}>
              {isOnSale ? (
                <>
                  <span>
                    <Typography
                      variant="h5"
                      style={{
                        textDecoration: "line-through",
                        color: "#343434",
                      }}
                    >
                      {price} грн
                    </Typography>
                  </span>
                  <Typography variant="h5" style={{ color: "#343434" }}>
                    {sale?.price || price} грн
                  </Typography>
                </>
              ) : (
                <Typography variant="h5" style={{ color: "#343434" }}>
                  {price} грн
                </Typography>
              )}
            </div>
            {isOnSale && (
              <ContentCard width="fit-content" className={cl.date}>
                <Typography variant="subtitle2" style={{ fontWeight: "700" }}>
                  {getTextForSaleLabel(new Date(sale!.until))}
                </Typography>
              </ContentCard>
            )}
          </section>
        )}
      </div>

      <section className={cl.captionBlock}>
        {caption.map((line, i) => (
          <Typography key={i} variant="subtitle1">
            {line}
          </Typography>
        ))}
      </section>

      <div className={cl.afterCaptionBlockWrapper}>
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
          placeHolder={
            isCertificates ? "Вид сертифікату" : availableVariant?.label
          }
          className={getValidClassNames(!isMounted && cl.initialSelectBg)}
          menuItems={variants}
          handleSelect={(value: string) => {
            !isMounted && setIsMounted(true);
            setSelectValue(value);
          }}
          stopPropagation
        />

        <div className={cl.buttonWrapper}>
          {button}
          <div className={cl.likes} onClick={handleLikeClick}>
            <div
              className={getValidClassNames(
                cl.heartIcon,
                productIsLiked && cl.liked
              )}
            >
              <HeartIcon />
            </div>
            <div className={cl.amount}>
              <Typography
                variant="subtitle1"
                style={{ color: "#4d4d4d", fontWeight: "700" }}
              >
                {likesAmount}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <ContentCard className={cl.labelBottom} width="fit-content">
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "700", lineHeight: "16px" }}
        >
          {isCertificates
            ? "Найкращий подарунок - знання!"
            : "Додатково 10% знижки для наших учнів!"}
        </Typography>
      </ContentCard>
    </ContentCard>
  );
};

function getLikedProductsFromLocalStorage() {
  const storage =
    typeof window !== "undefined" && localStorage.getItem("likedProducts");

  if (!storage) {
    return new Set([]);
  }
  return new Set([...(JSON.parse(storage) as string[])]);
}

const spinner = () => `
<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<style>
.spinner_5nOS {
  transform-origin:center;
  animation:spinner_sEAn .75s infinite linear
  }
  @keyframes spinner_sEAn{
    100% {transform:rotate(360deg)}
  }
  </style>
  <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
  <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z" class="spinner_5nOS" fill="#fde543"/>
  </svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
