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
import {
  getTextForSaleLabel,
  validateDate,
  getValidClassNames,
} from "@/helpers/";
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
  const { available, gallery, variants, caption, hashtags, likes } = large;

  const [selectValue, setSelectValue] = useState(variants[0].value);
  const item = variants.find((item) => item.value === selectValue)!;
  const { id: itemId, price, sale, value } = item;

  const isCertificates = price <= 0;

  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set([]));
  const [cartItem, setCartItem] = useState<ICartItem>();

  const [likesAmount, setLikesAmount] = useState(likes);
  const shopCart = useAppSelector(selectShopCart);
  const dispatch = useAppDispatch();

  const productIsLiked = likedProducts.has(_id!);

  const isOnSale = validateDate(sale?.until);

  const { width } = useWindowSize();

  useEffect(() => {
    setCartItem(shopCart.items.find((item) => item._id == itemId));
    setLikedProducts(getLikedProductsFromLocalStorage());
  }, [itemId, shopCart.items]);

  const handleAddToCartClick = async () => {
    if (shopCart.loading) {
      return;
    }
    dispatch(getShopItemFromDbAndAddToCart({ id: _id!, value }));
  };

  const handleLikeClick = async () => {
    const isLiked = likedProducts.has(_id!);

    await toggleLikeToShopProduct(_id!, isLiked);

    isLiked ? likedProducts.delete(_id!) : likedProducts.add(_id!);

    localStorage.setItem("likedProducts", JSON.stringify([...likedProducts]));

    setLikesAmount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  let button: React.ReactNode;

  if (isCertificates) {
    button = (
      <Button variant="outlined" href="/education/gift" className={cl.button}>
        <Typography variant="body1">
          Навчання у <br /> Подарунок!
        </Typography>
      </Button>
    );
  } else if (available) {
    if (!cartItem) {
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
    } else {
      button = <Counter _id={itemId!} amount={cartItem.amount} />;
    }
  } else {
    button = (
      <ContentCard width="fit-content">
        <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
          Скоро у <br />
          продажу ☑️
        </Typography>
      </ContentCard>
    );
  }

  return (
    <ContentCard
      width="626px"
      label={
        <Typography variant="body1" style={{ fontWeight: "700" }}>
          {name}
        </Typography>
      }
      className={cl.shopProductCardLargeMain}
      id={_id}
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
              alt=""
              src={`${IMAGE_BASE_URL}/${item.image.filename}`}
              fill
              sizes="(max-width: 2400px) 215xp"
              style={{ objectFit: "contain" }}
            />
          </CarouselItem>
        ))}
      </Carousel>

      {!isCertificates && (
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
      )}

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
