import { CollectionConfig } from "payload/types";

export const Course: CollectionConfig = {
  slug: "courses",
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
    { name: "name", label: "Name", type: "text", required: true },
    {
      name: "inDevelopment",
      label: "В розробці?",
      type: "checkbox",
      required: true,
    },
    {
      name: "nameJapanese",
      label: "Japanese Name",
      type: "text",
      required: true,
    },
    {
      name: "level",
      label: "Level",
      type: "json",
      required: true,
    },
    {
      name: "type",
      label: "Тип курсу",
      type: "select",
      required: true,
      options: [
        { value: "teacher", label: "Курс з сенсеєм" },
        { value: "video", label: "Відеокурс" },
        { value: "audio", label: "Аудіокурс" },
        { value: "book", label: "Книжковий курс" },
        { value: "mega", label: "Мега курс" },
      ],
    },
    {
      name: "prices",
      label: "Prices",
      type: "group",
      fields: [
        {
          name: "individual",
          label: "Індивідуальні заняття",
          type: "array",
          fields: [
            {
              name: "lessons",
              label: "К-ть уроків",
              type: "number",
              required: true,
            },
            {
              name: "price",
              label: "Ціна",
              type: "number",
              min: 1,
              required: true,
            },
            {
              name: "link",
              label: "Посилання на товар",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "group",
          label: "Заняття в групі",
          type: "array",
          fields: [
            {
              name: "lessons",
              label: "К-ть уроків",
              type: "number",
              required: true,
            },
            {
              name: "price",
              label: "Ціна",
              type: "number",
              min: 1,
              required: true,
            },
            {
              name: "link",
              label: "Посилання на товар",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "labels",
      label: "Labels",
      type: "json",
      required: true,
    },
    {
      name: "small",
      label: "Карта курсу на сторінці 'курси' ",
      type: "group",
      fields: [
        { name: "label", label: "Label", type: "text" },
        {
          name: "labelColor",
          label: "Label Color",
          type: "text",
        },
        {
          name: "bgColor",
          label: "Card Background Color",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "medium",
      label: "Карта курсу в магазині",
      type: "group",
      fields: [
        {
          name: "labelColor",
          label: "Label Color",
          type: "text",
          required: true,
        },
        {
          name: "bgColor",
          label: "Background Color",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "json",
          required: true,
        },
      ],
    },
    {
      name: "large",
      label: "Сторінка детального опису",
      type: "group",
      fields: [
        {
          name: "labels",
          label: "Labels",
          type: "json",
          required: true,
        },
        {
          name: "labelColor",
          label: "Label Color",
          type: "text",
          required: true,
        },
        {
          name: "bgColor",
          label: "Background Color",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "array",
          required: true,
          fields: [
            {
              name: "icon",
              label: "Icon",
              type: "text",
              required: false,
            },
            {
              name: "text",
              label: "Text",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
