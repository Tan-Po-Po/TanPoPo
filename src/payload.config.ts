import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { Course } from "./collections/Course";
import path from "path";

export default buildConfig({ 
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Course],
  routes: {
    admin: "/cms",
  },
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- TanPoPo",
      favicon: "/logo/logo.svg",
      ogImage: "/image.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
