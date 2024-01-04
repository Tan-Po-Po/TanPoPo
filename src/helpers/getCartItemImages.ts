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
      images.push(`/shop-media/${img.image.filename}`);
      if (images.length >= 2) {
        break;
      }
    }
  }

  console.log("images function", images);

  if (!images.length) {
    images.push(
      `/shop-media/${gallery[0].image.filename}`,
      `/shop-media/${gallery[1].image.filename}`
    );
  }

  return images;
};
