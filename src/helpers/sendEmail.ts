import nodemailer from "nodemailer";
import { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } from "@/config/config";

interface Params {
  subject: string;
  message: string;
}

export const sendEmail = async ({
  subject,
  message,
}: Params): Promise<boolean> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: NODEMAILER_EMAIL,
    to: NODEMAILER_EMAIL,
    subject: subject,
    text: message,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      mailOptions,
      function (error: Error | null, info: any) {
        if (error) {
          console.log("transporter error:", error);

          resolve(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};
