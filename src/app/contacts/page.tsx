import { ContentCard, Divider, Faq } from "@/components";
import cl from "./page.module.scss";
import styles from "./page.module.scss";
import { textContent } from "./textContent";
import { Typography } from "@mui/material";
import Image from "next/image";
import { getSocialIconsLinks } from "@/helpers/getSocialIconsLinks";
import Link from "next/link";
import PlayButtonIcon from "/public/icons/playButton.svg";
import { FeedbackForm } from "./_feedbackForm/feedbackForm";

const dividerBgColor = "linear-gradient(180deg, #FFF, #FAD26C 100%)";

export default async function Contacts() {
  return (
    <main className={styles.main}>
      <div className={cl.contactsBlock}>
        <Typography variant="h3">{textContent.contactsBlock.header}</Typography>
        <Image
          alt=""
          src={textContent.contactsBlock.image}
          width={1920}
          height={1080}
          style={{ maxWidth: "921px", width: "100%", height: "auto" }}
        />
        <div className={cl.cards}>
          <ContentCard width="376px" className={cl.card}>
            <Typography variant="h5">
              {textContent.contactsBlock.card1.section1.tittle}
            </Typography>
            <Typography variant="body2">
              {textContent.contactsBlock.card1.section1.caption1}
            </Typography>
            <Typography variant="body2">
              {textContent.contactsBlock.card1.section1.caption2}
            </Typography>
            <Typography variant="h5">
              {textContent.contactsBlock.card1.section2.tittle}
            </Typography>
            <Typography variant="body2">
              {textContent.contactsBlock.card1.section2.caption1}
            </Typography>
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
            className={cl.card}
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
          </ContentCard>
        </div>
      </div>

      <Divider
        firstRow={textContent.videoGuidesBlock.divider.line1}
        secondRow={textContent.videoGuidesBlock.divider.line2}
        bgColor={dividerBgColor}
      />

      <div className={cl.videoGuidesBlock}>
        {textContent.videoGuidesBlock.cards.map((card, i) => (
          <Link
            href={
              card.href ||
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
            }
            key={i}
          >
            <ContentCard
              width="384px"
              cardBgColor={card.background}
              className={cl.videoCard}
            >
              <div className={cl.icon}>
                <PlayButtonIcon />
              </div>
              <Typography variant="body2">{card.caption}</Typography>
            </ContentCard>
          </Link>
        ))}
      </div>

      <Divider
        firstRow={textContent.faqBlock.divider.line1}
        bgColor={dividerBgColor}
      />

      <div className={cl.faqBlock}>
        {textContent.faqBlock.questions.map((question, i) => (
          <Faq question={question.question} answer={question.answer} key={i} />
        ))}
      </div>

      <Divider firstRow="ЗВОРОТНІЙ ЗВ’ЯЗОК" bgColor={dividerBgColor} />

      <ContentCard className={cl.formBlock} width="966px">
        <Typography variant="h4">Залишились питання?</Typography>
        <Typography variant="h6">
          Напишіть нам і ми обов’язково Вам відповімо!
        </Typography>
        <FeedbackForm />
      </ContentCard>
    </main>
  );
}
