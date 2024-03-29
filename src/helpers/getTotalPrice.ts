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
    console.log(final)
    final -= Math.round(final * (cart.promoCode?.perCent / 100));
    console.log(final)
  }

  return { original, final };
};
