"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partner = void 0;
exports.Partner = {
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
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
};
