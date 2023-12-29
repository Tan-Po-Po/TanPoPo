"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseMedia = void 0;
exports.CourseMedia = {
    slug: "course-media",
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
        staticURL: "/course-media",
        staticDir: "../public/course-media",
        mimeTypes: ["image/*"],
    },
    fields: [],
};
