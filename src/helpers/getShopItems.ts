import { IShopProduct } from "@/models/ShopProduct";

export const getShopItems = async (): Promise<IShopProduct[]> => {
  const response = await fetch("http://localhost:3000/api/shopItems", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
};
