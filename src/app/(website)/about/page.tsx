import { getValidClassNames } from "@/helpers";
import cl from "./page.module.scss";
import { ContentCard, Typography } from "@/components";
import { textContent } from "./textContent";
import Image from "next/image";
import { TeamBlock } from "./_components/blocks/teamBlock/teamBlock";
import { BioBlock } from "./_components/blocks/bioBlock/bioBlock";
import { ReviewsBlock } from "./_components/blocks/reviewsBlock/reviewsBlock";
import { InfoCardsBlock } from "./_components/blocks/infoCardsBlock/infoCardsBlock";
import { ReelsBlock } from "./_components/blocks/reelsBlock/reelsBlock";
import { LinkCardsBlock } from "./_components/blocks/linkCardsBlock/linkCardsBlock";
import { PartnersBlock } from "./_components/blocks/partnersBlock/partnersBlock";
import { Metadata } from "next";
import { AuthorContent } from "./_components/blocks/authorContent/authorContent";
import { getFeedbacks, getPartnerImagesSrc, getTeamMembers } from "./actions";

export const metadata: Metadata = {
  title: "Українська школа з вивчення японської мови | TanPoPo",
  description:
    "Провідна українська школа з вивчення японської мови. Все найкраще, що необхідно для легкого, веселого, швидкісного та якісного вивчення японської мови!",
};

export const revalidate = 900;

export default async function About() {
  const [teamMembers, partners, feedbacks] = await Promise.all([
    getTeamMembers(),
    getPartnerImagesSrc(),
    getFeedbacks(),
  ]);

  return (
    <main className={cl.main}>
      <div className={cl.ideaBlock}>
        <Typography
          variant="h1"
          style={{
            fontWeight: 600,
            textAlign: "center",
          }}
          className={cl.title}
        >
          Провідна українська <br />
          <strong
            style={{
              display: "content",
              fontSize: "inherit",
              lineHeight: "inherit",
              fontWeight: "inherit",
            }}
          >
            онлайн-школа з вивчення <br />
            японської мови!
          </strong>
        </Typography>

        <div className={cl.logoWrapper}>
          <Image
            alt=""
            src="/logo/gConfettiL.png"
            width={466}
            height={599}
            className={getValidClassNames(cl.confetti, cl.confettiLeft)}
          />
          <div className={cl.logo}>
            <video
              src="/logo/logoAnim.mp4"
              autoPlay={true}
              loop={true}
              height="auto"
              width="100%"
              muted
              playsInline
              className={cl.video}
            />
          </div>
          <Image
            alt=""
            src="/logo/gConfettiR.png"
            width={466}
            height={599}
            className={getValidClassNames(cl.confetti, cl.confettiRight)}
          />
        </div>
        <Typography
          variant="body1"
          style={{
            fontWeight: 700,
            textAlign: "center",
            whiteSpace: "normal",
          }}
          className={cl.caption}
        >
          {textContent.idea}
        </Typography>
      </div>

      <BioBlock />

      {feedbacks && <ReviewsBlock feedbacks={feedbacks} />}

      {teamMembers && <TeamBlock teamMembers={teamMembers} />}

      <InfoCardsBlock />

      {partners && <PartnersBlock partners={partners} />}

      <ContentCard
        className={cl.studio}
        id="studio"
        style={{ scrollMarginTop: "140px" }}
      >
        <ContentCard className={cl.labelTop} width="fit-content">
          TanPoPo Studio
        </ContentCard>
        <Image
          src="/photos/studio.png"
          alt="TanPoPo Studio"
          width={1350}
          height={760}
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "100%",
            borderRadius: "7px",
          }}
        />
        <ContentCard className={cl.labelBottom}>
          Створюємо навчальні матеріали для курсів в найзатишнішій студії, щоб
          Ви могли навчатись та отримувати візуальне задоволення від перегляду💛
        </ContentCard>
      </ContentCard>

      <AuthorContent />

      <ReelsBlock />

      <LinkCardsBlock />
    </main>
  );
}
