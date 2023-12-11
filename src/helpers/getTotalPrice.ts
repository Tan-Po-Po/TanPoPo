import { IShopCart } from "@/redux/slices/shopCart/shopCartSlice";

export const getTotalPrice = (cart: IShopCart) => {
  const original = cart.items.reduce(
    (sum, item) => sum + item.price.original * item.amount,
    0
  );

  let final = cart.items.reduce(
    (sum, item) => sum + (item.price.sale || item.price.original) * item.amount,
    0
  );

  if (cart.promoCode) {
    final -= final * (cart.promoCode?.perCent / 100);
  }

  return { original, final };
};
