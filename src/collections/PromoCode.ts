import { CollectionConfig } from "payload/types";

export const PromoCode: CollectionConfig = {
  slug: "promo-codes",
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
      name: "label",
      label: "Лейбл",
      type: "text",
    },
    {
      name: "date",
      label: "Дата дії",
      type: "date",
    },
    {
      name: "code",
      label: "Промокод",
      type: "text",
      required: true,
    },
    {
      name: "perCent",
      label: "Процент знижки",
      type: "number",
      required: true,
    },
    {
      name: "oneTimeUse",
      label: "Одне застосування?",
      type: "checkbox",
      required: true,
    },
  ],
};
