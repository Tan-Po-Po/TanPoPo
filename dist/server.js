"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_payload_1 = require("./get-payload");
const next_utils_1 = require("./next-utils");
const path_1 = __importDefault(require("path"));
const build_1 = __importDefault(require("next/dist/build"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const payload = yield (0, get_payload_1.getPayloadClient)({
        initOptions: {
            express: app,
            onInit: (cms) => __awaiter(void 0, void 0, void 0, function* () {
                cms.logger.info(`ADMIN URL ${cms.getAdminURL()}`);
            }),
        },
    });
    if (process.env.NEXT_BUILD) {
        app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
            payload.logger.info(`Next.js App URL ${process.env.NEXT_PUBLIC_SERVER_URL}`);
            // @ts-expect-error
            yield (0, build_1.default)(path_1.default.join(__dirname, "../"));
            process.exit();
        }));
        return;
    }
    app.use((req, res) => (0, next_utils_1.nextHandler)(req, res));
    next_utils_1.nextApp.prepare().then(() => {
        payload.logger.info(`Next.js server started`);
        app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
            payload.logger.info(`Next.js App URL ${process.env.NEXT_PUBLIC_SERVER_URL}`);
        }));
    });
});
start();
