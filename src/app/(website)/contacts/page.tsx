import { ContentCard, Divider, Faq, Typography, FaqBlock } from "@/components";
import { textContent } from "./textContent";
import { FeedbackForm } from "./_components/feedbackForm/feedbackForm";
import { VideoGuides } from "./_components/videoGuides/videoGuides";
import { getSocialIconsLinks, getValidClassNames } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import cl from "./page.module.scss";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Контакти | Tanpopo',
}
const dividerBgColor = "linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)";

export default function Contacts() {
  return (
    <main className={cl.main}>
      <div className={cl.contactsBlock}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
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
              <Typography variant="h5">
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
              <Typography variant="h5">
                {textContent.contactsBlock.card1.section2.tittle}
              </Typography>
              <Typography variant="body2">
                {textContent.contactsBlock.card1.section2.caption1}
              </Typography>
            </div>
          </ContentCard>

          <ContentCard width="376px" className={cl.card}>
            <Typography variant="h5">
              {textContent.contactsBlock.card2.tittle}
            </Typography>
            <Typography variant="body2">
              {textContent.contactsBlock.card2.caption1}
            </Typography>
            <div className={cl.socials}>{getSocialIconsLinks("42px")}</div>
            <Typography variant="body2">
              {textContent.contactsBlock.card2.caption2}
            </Typography>
          </ContentCard>

          <ContentCard
            width="376px"
            className={getValidClassNames(cl.card, cl.cardLinks)}
            style={{ justifyContent: "space-evenly" }}
          >
            <Typography variant="body1">
              <Link
                href={
                  textContent.contactsBlock.card3.section1.href ||
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                }
              >
                {textContent.contactsBlock.card3.section1.tittle}
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href={
                  textContent.contactsBlock.card3.section2.href ||
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                }
              >
                {textContent.contactsBlock.card3.section2.tittle}
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href={
                  textContent.contactsBlock.card3.section3.href ||
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                }
              >
                {textContent.contactsBlock.card3.section3.tittle}
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href={
                  textContent.contactsBlock.card3.section4.href ||
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                }
              >
                {textContent.contactsBlock.card3.section4.tittle}
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href={
                  textContent.contactsBlock.card3.section5.href ||
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
                }
              >
                {textContent.contactsBlock.card3.section5.tittle}
              </Link>
            </Typography>
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

      <VideoGuides />

      <Divider
        firstRow={textContent.faqBlock.divider.line1}
        bgColor={dividerBgColor}
        wrapperClassName={cl.faqDivider}
        className={cl.divider}
      />

      <div className={cl.faqBlock}>
        <Suspense
          fallback={
            <div className={cl.faqBlock}>
              <Faq
                question="Loading"
                answer="Loading"
                style={{ width: "900px", maxWidth: "100%" }}
              />
              <Faq question="Loading" answer="Loading" />
              <Faq question="Loading" answer="Loading" />
              <Faq question="Loading" answer="Loading" />
            </div>
          }
        >
          <FaqBlock location="contacts" />
        </Suspense>
      </div>

      <Divider
        firstRow="ЗВОРОТНІЙ ЗВ’ЯЗОК"
        bgColor={dividerBgColor}
        style={{ margin: "38px 0 " }}
        className={cl.divider}
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
