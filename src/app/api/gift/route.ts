import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { generateHtml } from "./generateHtml";
import { generateHtmlForOwner } from "./generateHtmlForOwner";
import { parseData } from "./parseData";
import { GOOGLE_SCRIPT_URL } from "@/config/config";
import { Data } from "./type";
import path from "path";

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;

  const googleData = {
    sheetName: "certificates",
    formData: parseData(formData),
  };

  const google = await fetch(GOOGLE_SCRIPT_URL as string, {
    method: "POST",
    body: JSON.stringify(googleData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const orderId = await google.text();

  const htmlContent = generateHtml(formData);
  const htmlContentOwner = generateHtmlForOwner(formData);
  try {
    await Promise.all([
      transporter.sendMail({
        ...mailOptions,
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
            filename: "arrowLong.png",
            path: path.join(process.cwd(), "public", "icons", "arrowLong.png"),
            cid: "arrow",
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

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
