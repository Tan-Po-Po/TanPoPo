import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { Data } from "./type";
import { generateHtml} from "./generateHtml";
import { generateHtmlForOwner } from "./generateHtmlForOwner";
import { parseData } from "./parseData";
import { GOOGLE_SCRIPT_URL } from "@/config/config";
import path from "path";


export async function POST(req: Request) {
  const formData = (await req.json()) as Data;

  // console.log(JSON.stringify(formData));
  const googleData = {
    sheetName: "certificates",
    formData: parseData(formData),
  };
  console.log(googleData.formData);
  const google = await fetch(GOOGLE_SCRIPT_URL as string, {
    method: "POST",
    body: JSON.stringify(googleData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const orderId = await google.text();
  console.log(orderId);
  
  const htmlContent = generateHtml(formData);
  const htmlContentOwner = generateHtmlForOwner(formData);
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Навчання у Подарунок!  (№ Замовлення: ${orderId})`,
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
          path: path.join(process.cwd(), "public", "icons", "art", "girl.png"),
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
    });

    await transporter.sendMail({...mailOptions,
      subject: `Навчання у Подарунок!  (№ Замовлення: ${orderId})`,
      html: htmlContentOwner,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
