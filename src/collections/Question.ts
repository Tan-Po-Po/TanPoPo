import { CollectionConfig } from "payload/types";

export const Question: CollectionConfig = {
  slug: "questions",
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
      name: "location",
      label: "Локація",
      type: "select",
      required: true,
      options: [
        { label: "Сторінка курси", value: "courses" },
        { label: "Сторінка вартість", value: "prices" },
        { label: "Сторінка контакти", value: "contacts" },
      ],
    },
    {
      name: "questionBlock",
      label: "Блок запитань",
      type: "array",
      fields: [
        {
          name: "question",
          label: "Питання",
          type: "textarea",
          required: true,
        },
        {
          name: "answer",
          label: "Відповідь",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};
