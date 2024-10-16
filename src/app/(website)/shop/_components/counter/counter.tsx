"use client";
import { useAppDispatch } from "@/redux/hooks";
import cl from "./counter.module.scss";
import { Button, ContentCard, Typography } from "@/components";
import {
  decreaseItemAmount,
  increaseItemAmount,
} from "@/redux/slices/shopCart/shopCartSlice";

interface Props {
  variantId: string;
  amount: number;
}

export const Counter: React.FC<Props> = ({ variantId, amount }) => {
  const dispatch = useAppDispatch();

  const handleItemDecrease = () => {
    if (amount === 1) {
      return;
    }

    dispatch(decreaseItemAmount({ variantId }));
  };

  const handleItemIncrease = () => {
    dispatch(increaseItemAmount({ variantId }));
  };

  return (
    <ContentCard width="151px" className={cl.counterMain}>
      <Button
        type="button"
        className={cl.button}
        variant="outlined"
        onClick={handleItemDecrease}
      >
        -
      </Button>
      <Typography
        variant="h5"
        style={{ paddingTop: "5px", lineHeight: "16px" }}
      >
        {amount}
      </Typography>
      <Button
        type="button"
        className={cl.button}
        variant="outlined"
        onClick={handleItemIncrease}
      >
        +
      </Button>
    </ContentCard>
  );
};
