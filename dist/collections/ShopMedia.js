"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopMedia = void 0;
exports.ShopMedia = {
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
