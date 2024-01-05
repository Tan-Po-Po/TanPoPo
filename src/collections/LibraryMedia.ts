import { CollectionConfig } from "payload/types";

export const LibraryMedia: CollectionConfig = {
  slug: "library-media",
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
    staticURL: "/library-media",
    staticDir: "../public/library-media",
    mimeTypes: ["image/*"],
  },
  fields: [],
};
