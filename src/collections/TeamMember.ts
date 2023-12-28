import { CollectionConfig } from "payload/types";

export const TeamMember: CollectionConfig = {
  slug: "team-member",
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
      type: "group",
      fields: [
        {
          name: "value",
          label: "Текст",
          type: "text",
          required: true,
        },
        {
          name: "color",
          label: "Колір",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "name",
      label: "Ім'я",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Зображення",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "certificates",
      label: "Сертифікати",
      type: "group",
      fields: [
        {
          name: "keyPoints",
          label: "Досвід сенсея",
          type: "json",
          required: true,
        },
        {
          name: "description",
          label: "Деталі сертифікатів",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Назва сертифікату",
              type: "text",
              required: true,
            },
            {
              name: "image",
              label: "Фото сертифікату",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "caption",
              label: "Опис сертифікату",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "education",
      label: "Освіта",
      type: "group",
      fields: [
        {
          name: "level",
          label: "Рівень мови",
          type: "text",
          required: true,
        },
        {
          name: "university",
          label: "Університет",
          type: "text",
          required: true,
        },
        {
          name: "trainings",
          label: "Тренінги",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "about",
      label: "Про викладача",
      type: "array",
      fields: [
        {
          name: "text",
          label: "Текст",
          type: "text",
          required: true,
        },
        {
          name: "color",
          label: "Фоновий колір",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
