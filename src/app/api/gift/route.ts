import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { generateHtml, type Data } from "./generateHtml";
// import { generateHtmlForOwner } from "./generateHtmlForOwner";
import path from "path";

export async function POST(req: Request) {
  const formData = (await req.json()) as Data;
  console.log(formData)
  const htmlContent = generateHtml(formData);
  // const htmlContentOwner = generateHtmlForOwner(formData);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Подарункови сертифікат від школи TanPoPo",
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
          path: path.join(
            process.cwd(),
            "public",
            "icons",
            "arrowLong.png"
          ),
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
    
    // await transporter.sendMail({...mailOptions,
    //   subject: "Навчання у подарунок!",
    //   html: htmlContentOwner,
    // });
    
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
