import { CollectionConfig } from "payload/types";

export const Partner: CollectionConfig = {
  slug: "partner",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "src",
      label: "Посилання на зображення",
      type: "text",
    },
  ],
};
