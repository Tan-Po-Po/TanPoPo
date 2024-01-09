import { getValidClassNames } from "@/helpers";
import cl from "./page.module.scss";
import {
  Button,
  ContentCard,
  IconLink,
  Typography,
  Carousel,
  CarouselItem,
} from "@/components";
import TeamMember, { ITeamMember } from "@/models/TeamMember";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { textContent } from "./textContent";
import Image from "next/image";
import { TeamBlock } from "./_components/blocks/teamBlock/teamBlock";
import Partner, { IPartner } from "@/models/Partner";
import { Line } from "./_components/line/line";
import { AuthorContentCards } from "./_components/authorContentCards/authorContentCards";
import { IMAGE_BASE_URL } from "@/config/config";
import Link from "next/link";
import { BioBlock } from "./_components/blocks/bioBlock/bioBlock";
import { ReviewsBlock } from "./_components/blocks/reviewsBlock/reviewsBlock";
import { InfoCardsBlock } from "./_components/blocks/infoCardsBlock/infoCardsBlock";
import { ReelsBlock } from "./_components/blocks/reelsBlock/reelsBlock";
import { LinkCardsBlock } from "./_components/blocks/linkCardsBlock/linkCardsBlock";

async function getTeamMembers() {
  await dbConnect();

  const teamMembersDb = (await TeamMember.find().populate("image").populate({
    path: "certificates.description.image",
  })) as mongoose.Document<ITeamMember>[];

  const teamMembers: ITeamMember[] = teamMembersDb.map((member) => {
    return JSON.parse(JSON.stringify(member));
  });

  return teamMembers;
}

export default async function About() {
  const [teamMembers, partners] = await Promise.all([
    getTeamMembers(),
    getPartnerImagesSrc(),
  ]);

  return (
    <main className={cl.main}>
      <div className={cl.ideaBlock}>
        <Typography
          variant="h4"
          style={{ fontWeight: 400, textAlign: "center" }}
          id="history"
          className={cl.title}
        >
          Найкраща {<b>онлайн-школа</b>} японської мови
          <br /> {<b>для українців</b>} по всьому світу!
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
          style={{ fontWeight: 700, textAlign: "center", whiteSpace: "normal" }}
          className={cl.caption}
        >
          {textContent.idea}
        </Typography>
      </div>

      <BioBlock />

      <ReviewsBlock />

      {teamMembers.length > 0 && <TeamBlock teamMembers={teamMembers} />}

      <InfoCardsBlock />

      {partners && (
        <div className={cl.partnersBlock} id="partners">
          <Typography variant="h3">
            {textContent.partnersBlock.header}
          </Typography>
          <Typography variant="h6">
            {textContent.partnersBlock.title}
          </Typography>
          <ContentCard width="1238px" className={cl.carouselCard}>
            <Carousel autoplay={true}>
              {partners.map((partner) => (
                <CarouselItem key={partner._id}>
                  <Image
                    alt=""
                    src={`${IMAGE_BASE_URL}/${partner.image.filename}`}
                    width={500}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                  />
                </CarouselItem>
              ))}
            </Carousel>

            <Typography variant="body1">
              {textContent.partnersBlock.caption}
            </Typography>
          </ContentCard>
        </div>
      )}

      <div className={cl.authorContentBlock} id="content">
        <Typography variant="h3">
          {textContent.authorContentBlock.header}
        </Typography>
        <div className={cl.wrapper}>
          <ContentCard width="620px" className={cl.socialCard}>
            <Typography variant="h6">
              {textContent.authorContentBlock.instagram.title}
            </Typography>
            <IconLink
              icon="instagram"
              href={textContent.authorContentBlock.instagram.iconLink}
              height="64px"
            />
            <AuthorContentCards
              links={textContent.authorContentBlock.instagram.links}
              images={textContent.authorContentBlock.instagram.images}
            />
            <Typography variant="body2">
              {textContent.authorContentBlock.instagram.caption}
            </Typography>
          </ContentCard>

          <ContentCard width="620px" className={cl.socialCard}>
            <Typography variant="h6">
              {textContent.authorContentBlock.youtube.title}
            </Typography>
            <IconLink
              icon="youtube"
              href={textContent.authorContentBlock.youtube.iconLink}
              height="64px"
            />
            <AuthorContentCards
              links={textContent.authorContentBlock.youtube.links}
              images={textContent.authorContentBlock.youtube.images}
            />
            <Typography variant="body2">
              {textContent.authorContentBlock.youtube.caption}
            </Typography>
          </ContentCard>
        </div>
      </div>

      <ReelsBlock />

      <LinkCardsBlock />
    </main>
  );
}

async function getPartnerImagesSrc() {
  await dbConnect();

  const partners = (await Partner.find()
    .lean()
    .populate("image")) as IPartner[];

  return partners;
}
