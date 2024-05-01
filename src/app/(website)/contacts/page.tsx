import {
  ContentCard,
  Divider,
  Faq,
  Typography,
  FaqBlock,
  Loading,
} from "@/components";
import { textContent } from "./textContent";
import { FeedbackForm } from "./_components/feedbackForm/feedbackForm";
import { VideoGuides } from "./_components/videoGuides/videoGuides";
import { getSocialIconsLinks, getValidClassNames } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import cl from "./page.module.scss";
import { Metadata } from "next";
import { getGuides } from "./actions";

export const metadata: Metadata = {
  title: "Контакти школи японської мови | TanPoPo",
  description:
    "Маєте додаткові запитання по вивченню японської мови? На цій сторінці Ви знайдете усю необхідну інформацію по користуванню сайтом та навчальною платформою!",
};
const dividerBgColor = "linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)";
export const revalidate = 1;

export default async function Contacts() {
  const guides = await getGuides();

  return (
    <main className={cl.main}>
      <div className={cl.contactsBlock}>
        <Typography
          variant="h1"
          align="center"
          style={{ fontSize: "36px", lineHeight: "1.2" }}
        >
          {textContent.contactsBlock.header}
        </Typography>
        <Image
          alt=""
          src={textContent.contactsBlock.image}
          width={1920}
          height={1080}
          style={{ maxWidth: "921px", width: "100%", height: "auto" }}
        />
        <div className={cl.cards}>
          <ContentCard
            width="376px"
            className={getValidClassNames(cl.card, cl.card1)}
          >
            <div className={cl.block}>
              <Typography variant="h5" style={{ fontSize: "25px" }}>
                {textContent.contactsBlock.card1.section1.tittle}
              </Typography>
              <Typography variant="body2">
                {textContent.contactsBlock.card1.section1.caption1}
              </Typography>
              <Typography variant="body2">
                {textContent.contactsBlock.card1.section1.caption2}
              </Typography>
            </div>
            <div className={cl.block}>
              <Typography
                variant="h5"
                style={{
                  whiteSpace: "pre",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                {textContent.contactsBlock.card1.section2.tittle}
              </Typography>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {textContent.contactsBlock.card1.section2.links.map(
                  ({ text, link }, index) => {
                    return (
                      <div
                        key={link}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {index !== 0 ? (
                          <span style={{ whiteSpace: "pre" }}> / </span>
                        ) : null}
                        <Link href={link} className={cl.link}>
                          <Typography variant="body1">{text}</Typography>
                        </Link>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </ContentCard>

          <ContentCard width="376px" className={cl.card}>
            <div>
              <Typography variant="h5">
                {textContent.contactsBlock.card2.tittle}
              </Typography>
              <Typography variant="body2" style={{ marginTop: "10px" }}>
                {textContent.contactsBlock.card2.caption1}
              </Typography>
            </div>
            <div className={cl.socials}>{getSocialIconsLinks("42px")}</div>
            <div className={cl.rights}>
              {textContent.contactsBlock.card2.caption2}
            </div>
          </ContentCard>

          <ContentCard
            width="376px"
            className={getValidClassNames(cl.card, cl.cardLinks)}
            style={{ justifyContent: "space-evenly" }}
          >
            <Link
              className={cl.link}
              href={
                textContent.contactsBlock.card3.section1.href ||
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
              }
            >
              <Typography variant="body1">
                {textContent.contactsBlock.card3.section1.tittle}
              </Typography>
            </Link>

            <Link
              className={cl.link}
              href={
                textContent.contactsBlock.card3.section2.href ||
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
              }
            >
              <Typography variant="body1">
                {textContent.contactsBlock.card3.section2.tittle}
              </Typography>
            </Link>

            <Link
              className={cl.link}
              href={
                textContent.contactsBlock.card3.section3.href ||
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
              }
            >
              <Typography variant="body1">
                {textContent.contactsBlock.card3.section3.tittle}
              </Typography>
            </Link>

            <Link
              className={cl.link}
              href={
                textContent.contactsBlock.card3.section4.href ||
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
              }
            >
              <Typography variant="body1">
                {textContent.contactsBlock.card3.section4.tittle}
              </Typography>
            </Link>

            <Link
              className={cl.link}
              href={
                textContent.contactsBlock.card3.section5.href ||
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
              }
            >
              <Typography variant="body1">
                {textContent.contactsBlock.card3.section5.tittle}
              </Typography>
            </Link>
          </ContentCard>
        </div>
      </div>

      <Divider
        firstRow={textContent.videoGuidesBlock.divider.line1}
        secondRow={textContent.videoGuidesBlock.divider.line2}
        bgColor={dividerBgColor}
        className={cl.guidesDivider}
        id="videoGuides"
        style={{ scrollMarginTop: "120px" }}
      />

      <Suspense fallback={<Loading />}>
        <VideoGuides guides={guides} />
      </Suspense>

      <Divider
        firstRow={textContent.faqBlock.divider.line1}
        bgColor={dividerBgColor}
        wrapperClassName={cl.faqDivider}
        className={cl.divider}
        id="faq"
      />

      <div className={cl.faqBlock}>
        <Suspense
          fallback={
            <div className={cl.faqBlock}>
              <Faq
                question="Loading"
                answer={[{ text: "Loading" }]}
                style={{ width: "900px", maxWidth: "100%" }}
              />
              <Faq question="Loading" answer={[{ text: "Loading" }]} />
              <Faq question="Loading" answer={[{ text: "Loading" }]} />
              <Faq question="Loading" answer={[{ text: "Loading" }]} />
            </div>
          }
        >
          <FaqBlock location="contacts" />
        </Suspense>
      </div>

      <Divider
        firstRow="ЗВОРОТНІЙ ЗВ’ЯЗОК"
        bgColor={dividerBgColor}
        style={{ margin: "38px 0 ", scrollMarginTop: "75px" }}
        className={cl.divider}
        id="feedback"
      />

      <ContentCard className={cl.formBlock} width="966px">
        <Typography variant="h4">Залишились питання?</Typography>
        <Typography
          variant="body1"
          style={{ fontWeight: "500", display: "block" }}
        >
          Напишіть нам і ми обов’язково Вам відповімо!
        </Typography>
        <FeedbackForm />
      </ContentCard>
    </main>
  );
}
