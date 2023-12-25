import { IShopPartner } from "@/models/ShopPartner";

export const getShopPartners = async (): Promise<IShopPartner[]> => {
  const response = await fetch("http://localhost:3000/api/shopPartners", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response.json();
};
