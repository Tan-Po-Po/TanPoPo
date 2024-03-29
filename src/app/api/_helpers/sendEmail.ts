import { sheetName } from "./type";
import { transporter, mailOptions } from "@/config/nodemailer";
import { generateShopHtml, generateOwnerShopHtml } from ".";
import path from "path";

export const sendEmail = async (
  sheetName: sheetName,
  formData: any,
  orderId: string
) => {
  try {
    if (sheetName === "orders") {
      const htmlContent = generateShopHtml(formData, orderId);
      const htmlContentOwner = generateOwnerShopHtml(formData, orderId);

      await Promise.all([
        transporter.sendMail({
          ...mailOptions,
          to: formData.email,
          subject: `Ваше замовлення: ${orderId}`,
          html: htmlContent,
          attachments: [
            {
              filename: "store.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "art",
                "store.png"
              ),
              cid: "store",
            },
            {
              filename: "girl.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "art",
                "girl.png"
              ),
              cid: "girl",
            },
            {
              filename: "instagram.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "socials",
                "instagram.png"
              ),
              cid: "instagram",
            },
            {
              filename: "tikTok.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "socials",
                "tikTok.png"
              ),
              cid: "tikTok",
            },
            {
              filename: "youTube.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "socials",
                "youTube.png"
              ),
              cid: "youtube",
            },
            {
              filename: "telegram.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "socials",
                "telegram.png"
              ),
              cid: "telegram",
            },
            {
              filename: "viber.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "socials",
                "viber.png"
              ),
              cid: "viber",
            },
          ],
        }),
        transporter.sendMail({
          ...mailOptions,
          subject: `Нове замовлення у крамниці! (№ Замовлення: ${orderId})`,
          html: htmlContentOwner,
          attachments: [
            {
              filename: "store.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "art",
                "store.png"
              ),
              cid: "store",
            },
          ],
        }),
      ]);
    } else if (sheetName === "courses") {
    } else if (sheetName === "certificates") {
    }
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Не вдалося відправити листи!" };
  }
};
