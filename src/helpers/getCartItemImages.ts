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

  console.log("images function", images);

  return images;
};
