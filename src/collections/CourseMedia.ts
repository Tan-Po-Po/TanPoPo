import { CollectionConfig } from "payload/types";

export const CourseMedia: CollectionConfig = {
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
