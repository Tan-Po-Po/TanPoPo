import { IShopCart } from "@/redux/slices/shopCart/shopCartSlice";

export const getTotalPrice = (cart: IShopCart) => {
  const original = Math.round(cart.items.reduce(
    (sum, item) => sum + item.price.original * item.amount,
    0
  ));

  let final = Math.round(cart.items.reduce(
    (sum, item) => sum + (item.price.sale || item.price.original) * item.amount,
    0
  ));

  if (cart.promoCode) {
    final -= Math.round(final * (cart.promoCode?.perCent / 100));
  }

  return { original, final };
};
