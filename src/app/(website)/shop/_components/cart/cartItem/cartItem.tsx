import {
  ICartItem,
  deleteCartItem,
} from "@/redux/slices/shopCart/shopCartSlice";
import cl from "./cartItem.module.scss";
import { ContentCard, Typography } from "@/components";
import Image from "next/image";
import { Counter } from "../../counter/counter";
import TrashCanIcon from "/public/icons/trashCan.svg";
import { useAppDispatch } from "@/redux/hooks";

export const CartItem: React.FC<ICartItem> = ({
  variantId,
  name,
  label,
  amount,
  price,
  images,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteCartItem({ variantId }));
  };
  return (
    <ContentCard className={cl.cartItemMain} width="699px">
      <TrashCanIcon className={cl.delete} onClick={handleDelete} />
      <ContentCard
        className={cl.gallery}
        width="229px"
        labelBgColor="linear-gradient(180deg, #FFF 0%, #FFFBD9 100%)"
        labelClassName={cl.label}
        label={
          <>
            <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
              {name}
            </Typography>
            <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
              {label}
            </Typography>
          </>
        }
      >
        {images.map((image, i) => (
          <ContentCard key={i} className={cl.imageWrapper}>
            <Image
              alt=""
              src={image}
              fill
              sizes="(max-width: 2400px) 215xp"
              style={{ objectFit: "contain" }}
            />
          </ContentCard>
        ))}
      </ContentCard>

      <Counter variantId={variantId!} amount={amount} />

      <ContentCard width="136px" className={cl.price}>
        {price.sale ? (
          <>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "700", textDecoration: "line-through" }}
            >
              {price.original * amount} грн
            </Typography>
            <Typography variant="h6">{price.sale * amount} грн</Typography>
          </>
        ) : (
          <Typography variant="h6">{price.original * amount} грн</Typography>
        )}
      </ContentCard>
    </ContentCard>
  );
};
