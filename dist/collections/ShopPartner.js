"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopPartner = void 0;
exports.ShopPartner = {
    slug: "shop-partners",
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
            name: "bgColor",
            label: "Background color",
            type: "text",
            required: true,
        },
        {
            name: "href",
            label: "Посилання",
            type: "text",
            required: true,
        },
        {
            name: "labelTop",
            label: "Лейбл зверху",
            type: "group",
            fields: [
                {
                    label: "Text",
                    name: "text",
                    type: "text",
                },
                {
                    name: "bgColor",
                    label: "Background color",
                    type: "text",
                },
            ],
        },
        {
            name: "labelBottom",
            label: "Лейбл знизу",
            type: "group",
            fields: [
                {
                    label: "Text",
                    name: "text",
                    type: "text",
                },
                {
                    name: "bgColor",
                    label: "Background color",
                    type: "text",
                },
            ],
        },
        {
            name: "logo",
            label: "Logo",
            type: "upload",
            relationTo: "shop-media",
        },
        {
            name: "name",
            label: "Partner Name",
            type: "textarea",
            required: true,
        },
        {
            name: "caption",
            label: "Опис",
            type: "json",
            required: true,
        },
        {
            name: "items",
            label: "Товари",
            type: "array",
            fields: [
                {
                    name: "image",
                    label: "Зображення",
                    type: "upload",
                    relationTo: "shop-media",
                    required: true,
                },
                {
                    label: "Посилання",
                    name: "href",
                    type: "text",
                    required: true,
                },
            ],
        },
        {
            name: "hashtags",
            label: "Хештеги",
            type: "json",
            required: true,
        },
    ],
};
