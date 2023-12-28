import { CollectionConfig } from "payload/types";

export const ShopMedia: CollectionConfig = {
  slug: "shop-media",
  admin: {
    hidden: true,
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  upload: {
    staticURL: "/shop-media",
    staticDir: "../public/shop-media",
    mimeTypes: ["image/*"],
  },
  fields: [],
};
