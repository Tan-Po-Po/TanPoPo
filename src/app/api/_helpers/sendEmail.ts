import { sheetName } from "./type";
import { transporter, mailOptions } from "@/config/nodemailer";
import {
  generateShopHtml,
  generateOwnerShopHtml,
  generateCourseHtml,
  generateOwnerCourseHtml,
  generateCertificateHtml,
  generateOwnerCertificateHtml,
} from ".";
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
      const htmlContent = generateCourseHtml(formData);
      const htmlContentOwner = generateOwnerCourseHtml(formData, orderId);
      await Promise.all([
        transporter.sendMail({
          ...mailOptions,
          to: formData.email,
          subject: "Початок навчання у школі TanPoPo",
          html: htmlContent,
          attachments: [
            {
              filename: "school.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "art",
                "school.png"
              ),
              cid: "school",
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
          subject: "Новий учень!",
          html: htmlContentOwner,
        }),
      ]);
    } else if (sheetName === "certificates") {
      const htmlContent = generateCertificateHtml(formData);
      const htmlContentOwner = generateOwnerCertificateHtml(formData);
      await Promise.all([
        transporter.sendMail({
          ...mailOptions,
          to: formData.email,
          subject: `Навчання у Подарунок!  (№ Замовлення: ${orderId})`,
          html: htmlContent,
          attachments: [
            {
              filename: "presentBox1.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "art",
                "presentBox1.png"
              ),
              cid: "present",
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
          subject: `Навчання у Подарунок!  (№ Замовлення: ${orderId})`,
          html: htmlContentOwner,
          attachments: [
            {
              filename: "presentBox1.png",
              path: path.join(
                process.cwd(),
                "public",
                "icons",
                "art",
                "presentBox1.png"
              ),
              cid: "present",
            },
          ],
        }),
      ]);
    }
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Не вдалося відправити листи!" };
  }
};
