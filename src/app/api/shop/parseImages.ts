import { ICartItem } from "@/redux/slices/shopCart/shopCartSlice";

export const parseImages = (items: ICartItem[]) => {
  return items.map((item) => {
    const imagePath = item.images[0]

    return {
      path: imagePath,
    };
  });
};
