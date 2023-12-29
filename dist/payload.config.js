"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_mongodb_1 = require("@payloadcms/db-mongodb");
const richtext_slate_1 = require("@payloadcms/richtext-slate");
const config_1 = require("payload/config");
const bundler_vite_1 = require("@payloadcms/bundler-vite");
const path_1 = __importDefault(require("path"));
const Course_1 = require("./collections/Course");
const ShopProduct_1 = require("./collections/ShopProduct");
const ShopPartner_1 = require("./collections/ShopPartner");
const PromoCode_1 = require("./collections/PromoCode");
const TeamMember_1 = require("./collections/TeamMember");
const LibraryItem_1 = require("./collections/LibraryItem");
const Partner_1 = require("./collections/Partner");
const Media_1 = require("./collections/Media");
const CourseMedia_1 = require("./collections/CourseMedia");
const ShopMedia_1 = require("./collections/ShopMedia");
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [
        Course_1.Course,
        ShopProduct_1.ShopProduct,
        ShopPartner_1.ShopPartner,
        PromoCode_1.PromoCode,
        TeamMember_1.TeamMember,
        LibraryItem_1.LibraryItem,
        Partner_1.Partner,
        Media_1.Media,
        CourseMedia_1.CourseMedia,
        ShopMedia_1.ShopMedia,
    ],
    routes: {
        admin: "/cms",
    },
    admin: {
        bundler: (0, bundler_vite_1.viteBundler)(),
        meta: {
            titleSuffix: "- TanPoPo",
            favicon: "/logo/logo.svg",
            ogImage: "/image.jpg",
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URI,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
});
