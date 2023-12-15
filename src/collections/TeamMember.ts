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
          label: "Value",
          type: "text",
          required: true,
        },
        {
          name: "color",
          label: "Color",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "text",
      required: true,
    },
    {
      name: "name",
      label: "Name",
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
          label: "Опис",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
            },
            {
              name: "image",
              label: "Image",
              type: "text",
              required: true,
            },
            {
              name: "caption",
              label: "Caption",
              type: "text",
              required: true,
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
              label: "Level",
              type: "text",
              required: true,
            },
            {
              name: "university",
              label: "University",
              type: "text",
              required: true,
            },
            {
              name: "trainings",
              label: "Trainings",
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
    },
  ],
};
