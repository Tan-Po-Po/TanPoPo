import { CollectionConfig } from "payload/types";

export const LibraryItem: CollectionConfig = {
  slug: "library-items",
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
      name: "section",
      label: "Розділ",
      type: "select",
      required: true,
      options: [
        {
          label: "Бонус старт",
          value: "bonus-start",
        },
        {
          label: "Статті Огляди",
          value: "article-reviews",
        },
        {
          label: "Навчальні Reels",
          value: "reels",
        },
        {
          label: "Світ Подкастів",
          value: "podcasts",
        },
        {
          label: "Ютюб Японії",
          value: "youtube-japan",
        },
        {
          label: "Ігри та Додатки",
          value: "games-and-apps",
        },
        {
          label: "Аніме & Дорама List",
          value: "anime-and-dorama",
        },
        {
          label: "Quiz & Лексика",
          value: "quiz-and-vocabulary",
        },
        {
          label: "Музична Хроніка",
          value: "music",
        },
        {
          label: "Книги & Манга",
          value: "books-and-manga",
        },
        {
          label: "Мова в Таблицях",
          value: "language-in-tables",
        },
        {
          label: "JLPT Ресурси",
          value: "jlpt-resources",
        },
      ],
    },
    {
      name: "label",
      label: "Лейбл",
      type: "text",
      required: true,
    },
    {
      name: "labelColor",
      label: "Колір лейбла",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Тип посту",
      type: "select",
      required: true,
      options: [
        {
          value: "article",
          label: "Стаття",
        },
        {
          value: "articleSmall",
          label: "Мала стаття",
        },
        {
          value: "reels",
          label: "Рілс",
        },
        {
          value: "music",
          label: "Музика",
        },
        {
          value: "podcast",
          label: "Підкаст",
        },
      ],
    },
    {
      name: "audioColor",
      label: "Колір аудіо блоку",
      type: "text",
    },
    {
      name: "gallery",
      label: "Галерея",
      type: "array",
      fields: [
        {
          name: "type",
          label: "Тип",
          type: "select",
          required: true,
          options: [
            {
              label: "Зображення",
              value: "image",
            },
            {
              label: "Відео",
              value: "video",
            },
          ],
        },
        {
          name: "image",
          label: "Посилання на зображення",
          type: "text",
          required: true,
        },
        {
          name: "video",
          label: "Посилання на відео",
          type: "text",
        },
      ],
    },
    {
      name: "content",
      label: "Наповнення",
      type: "array",
      required: true,
      fields: [
        {
          name: "type",
          label: "Тип елементу",
          type: "select",
          options: [
            {
              label: "Параграф",
              value: "paragraph",
            },
            {
              label: "Заголовок",
              value: "header",
            },
            {
              label: "Зображення",
              value: "image",
            },
            {
              label: "Посилання",
              value: "link",
            },
            {
              label: "Текст",
              value: "text",
            },
          ],
        },
        {
          name: "value",
          label: "Значення елементу",
          type: "text",
          required: true,
        },
        {
          name: "href",
          label: "Посилання (якщо тип елементу = Посилання)",
          type: "text",
        },
      ],
    },
    {
      name: "hashtags",
      label: "Хештеги",
      type: "array",
      fields: [
        {
          name: "value",
          label: "Хештег",
          type: "text",
          required: true,
        },
        {
          name: "color",
          label: "Колір",
          type: "text",
        },
      ],
    },
  ],
};
