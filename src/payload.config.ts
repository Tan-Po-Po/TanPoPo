import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";
import { Course } from "./collections/Course";
import { ShopProduct } from "./collections/ShopProduct";
import { ShopPartner } from "./collections/ShopPartner";
import { PromoCode } from "./collections/PromoCode";
import { TeamMember } from "./collections/TeamMember";

export default buildConfig({ 
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Course, ShopProduct, ShopPartner, PromoCode, TeamMember],
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
