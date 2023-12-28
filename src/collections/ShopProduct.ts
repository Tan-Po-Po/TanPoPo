import { CollectionConfig } from "payload/types";

export const ShopProduct: CollectionConfig = {
  slug: "shop-products",
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
    { name: "name", label: "Name", type: "textarea", required: true },
    {
      name: "small",
      label: "Мала картка",
      type: "group",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "group",
          fields: [
            { name: "text", type: "text" },
            { name: "bgColor", type: "text" },
          ],
        },
        {
          name: "image",
          label: "Image",
          type: "text",
          required: true,
        },
        {
          name: "caption",
          label: "Опис",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "large",
      label: "Велика картка",
      type: "group",
      fields: [
        {
          name: "available",
          label: "Доступний",
          type: "checkbox",
        },
        {
          name: "inDevelopment",
          label: "В розробці?",
          type: "checkbox",
        },
        {
          name: "gallery",
          label: "Галерея",
          type: "array",
          fields: [
            {
              label: "Тип товару (колір/об'єм)",
              name: "value",
              type: "textarea",
            },
            {
              label: "Медіа",
              name: "type",
              type: "select",
              required: true,
              options: [
                { value: "image", label: "Фото" },
                { value: "video", label: "Відео" },
              ],
            },
            {
              name: "image",
              label: "Зображення",
              type: "upload",
              relationTo: "shop-media",
            },
            {
              label: "Відео",
              name: "video",
              type: "text",
            },
          ],
        },
        {
          name: "caption",
          label: "Опис",
          type: "json",
          required: true,
        },
        {
          name: "hashtags",
          label: "Хештеги",
          type: "json",
          required: true,
        },
        {
          name: "likes",
          label: "Лайки",
          type: "number",
          min: 0,
          required: true,
        },
        {
          name: "variants",
          label: "Варіанти товару",
          type: "array",
          fields: [
            {
              name: "value",
              label: "Value",
              type: "text",
              required: true,
            },
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
            },
            {
              name: "price",
              label: "Price",
              type: "number",
              min: 0,
              required: true,
            },
            {
              name: "sale",
              label: "Sale",
              type: "group",
              fields: [
                {
                  name: "price",
                  label: "price",
                  type: "number",
                },
                {
                  name: "until",
                  label: "Until",
                  type: "date",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
