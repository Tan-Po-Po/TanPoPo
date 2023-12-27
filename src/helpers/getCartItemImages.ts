import { IShopProduct } from "@/models/ShopProduct";

interface Params {
  gallery: IShopProduct["large"]["gallery"];
  itemValue: string;
}

export const getCartItemImages = ({ gallery, itemValue }: Params) => {
  const valueSet = new Set(itemValue.split(" "));
  const images: string[] = [];

  for (const img of gallery) {
    if (valueSet.has(img.value!)) {
      images.push(img.image);
      if (images.length >= 2) {
        break;
      }
    }
  }

  if (!images.length) {
    images.push(gallery[0].image, gallery[1].image);
  }

  return images;
};
