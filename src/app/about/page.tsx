import { getIconArtSrc, getValidClassNames } from "@/helpers";
import cl from "./page.module.scss";
import { Button, ContentCard, IconLink, Typography } from "@/components";
import TeamMember, { ITeamMember } from "@/models/TeamMember";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";
import { textContent } from "./textContent";
import Image from "next/image";
import Carousel from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carouselItem/carouselItem";
import { TeamBlock } from "./_components/teamBlock/teamBlock";
import Partner, { IPartner } from "@/models/Partner";
import { Line } from "./_components/line/line";
import { AuthorContentCards } from "./_components/authorContentCards/authorContentCards";
import Link from "next/link";
import PlayButtonIcon from "/public/icons/playButton.svg";

async function getTeamMembers() {
  await dbConnect();

  const teamMembersDb =
    (await TeamMember.find()) as mongoose.Document<ITeamMember>[];

  const teamMembers: ITeamMember[] = teamMembersDb.map((member) =>
    member.toObject()
  );

  return teamMembers;
}

export default async function Home() {
  const teamMembers = await getTeamMembers();

  const partners = await getPartnerImagesSrc();

  return (
    <main className={cl.main}>
      <div className={cl.ideaBlock}>
        <Typography
          variant="h4"
          style={{ fontWeight: 400, textAlign: "center" }}
        >
          Найкраща {<b>онлайн-школа</b>} японської мови
          <br /> {<b>для українців</b>} по всьому світу!
        </Typography>

        <Image
          src="/logo/logo.svg"
          alt="Logo"
          width={533}
          height={533}
          style={{ margin: "80px auto", display: "block" }}
        />

        <Typography
          variant="body1"
          style={{ fontWeight: 700, textAlign: "center" }}
        >
          {textContent.idea}
        </Typography>
      </div>

      <div className={cl.bioBlock}>
        <ContentCard
          className={cl.imageContent}
          width="100%"
          labelPosition="bottom"
          labelBgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
          label={
            <>
              <Typography variant="h3">Тетяна Селіверстова</Typography>
              <Typography variant="h6">
                Засновниця школи <b>TanPoPo</b>
              </Typography>
            </>
          }
        >
          <Image
            alt=""
            src={"/photos/kids.jpg"}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </ContentCard>

        <Line />

        <ContentCard className={cl.bioContent} width="100%">
          <ContentCard className={cl.imageContent} width="433px">
            <Image
              alt=""
              src={"/photos/crossroads.png"}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </ContentCard>
          <div className={cl.paragraphs}>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p1.bold}</b>{" "}
              {textContent.bioCards.card1.p1.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p2.bold}</b>{" "}
              {textContent.bioCards.card1.p2.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p3.bold}</b>{" "}
              {textContent.bioCards.card1.p3.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p4.bold}</b>{" "}
              {textContent.bioCards.card1.p4.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card1.p5.bold}</b>{" "}
              {textContent.bioCards.card1.p5.normal}
            </Typography>
          </div>
        </ContentCard>

        <Line posititon="left" flag="ua" />

        <ContentCard
          className={getValidClassNames(cl.bioContent, cl.contentGrid)}
          width="100%"
        >
          <ContentCard
            className={getValidClassNames(cl.imageContent, cl.imgRight)}
          >
            <Image
              alt=""
              src={"/photos/table.jpg"}
              sizes="100vw"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
          <ContentCard
            className={getValidClassNames(cl.imageContent, cl.imgLeft)}
          >
            <Image
              alt=""
              src={"/photos/tv.jpg"}
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </ContentCard>

          <Typography variant="body1" className={cl.p1}>
            <b>{textContent.bioCards.card2.p1.bold}</b>{" "}
            {textContent.bioCards.card2.p1.normal}
          </Typography>
          <Typography variant="body1" className={cl.p2}>
            <b>{textContent.bioCards.card2.p2.bold}</b>{" "}
            {textContent.bioCards.card2.p2.normal}
          </Typography>
          <Typography variant="body1" className={cl.p3}>
            <b>{textContent.bioCards.card2.p3.bold}</b>{" "}
            {textContent.bioCards.card2.p3.normal}
          </Typography>
          <Typography variant="body1" className={cl.p4}>
            <b>{textContent.bioCards.card2.p4.bold}</b>{" "}
            {textContent.bioCards.card2.p4.normal}
          </Typography>
        </ContentCard>

        <Line posititon="right" flag="jp" />

        <ContentCard className={cl.bioContent} width="100%">
          <div className={cl.paragraphs}>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p1.bold}</b>{" "}
              {textContent.bioCards.card3.p1.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p2.bold}</b>{" "}
              {textContent.bioCards.card3.p2.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p3.bold}</b>{" "}
              {textContent.bioCards.card3.p3.normal}
            </Typography>
            <Typography variant="body1">
              <b>{textContent.bioCards.card3.p4.bold}</b>{" "}
              {textContent.bioCards.card3.p4.normal}
            </Typography>
          </div>
          <ContentCard
            className={cl.imageContent}
            width="auto"
            style={{ height: "fit-content" }}
          >
            <Image
              alt=""
              src={"/photos/beach.png"}
              sizes="100vw"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
            />
          </ContentCard>
        </ContentCard>
      </div>

      <div className={cl.reviewsBlock}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          {textContent.reviewsBlock.header}
        </Typography>

        <ContentCard width="1238px" className={cl.carouselCard}>
          <Carousel>
            {getReviewImagesSrc().map((src, i) => (
              <CarouselItem key={i} isOutlined={true}>
                <Image
                  alt=""
                  src={src}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </CarouselItem>
            ))}
          </Carousel>

          <Typography variant="h6" style={{ textAlign: "center" }}>
            {textContent.reviewsBlock.caption}
          </Typography>
        </ContentCard>
      </div>
      <TeamBlock teamMembers={teamMembers} />
      <div className={cl.infoCardsBlock}>
        {textContent.infoCards.map((card, i) => (
          <ContentCard key={i} width={"376px"} className={cl.infoCard}>
            <Typography variant="h6" className={cl.title}>
              {card.title}
            </Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "88px", height: "auto" }}
            />
            <Typography variant="body2" className={cl.text}>
              {card.text}
            </Typography>
          </ContentCard>
        ))}
      </div>
      {partners && (
        <div className={cl.partnersBlock}>
          <Typography variant="h3">
            {textContent.partnersBlock.header}
          </Typography>
          <Typography variant="h6">
            {textContent.partnersBlock.title}
          </Typography>
          <ContentCard width="1238px" className={cl.carouselCard}>
            <Carousel>
              {partners.map((parnter) => (
                <CarouselItem key={parnter._id}>
                  <Image
                    alt=""
                    src={parnter.src}
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
      <div className={cl.authorContentBlock}>
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

      <ContentCard
        className={getValidClassNames(cl.carouselCard, cl.reelsBlock)}
        width="12382px"
      >
        <Typography variant="h3">{textContent.reelsBlock.header}</Typography>
        <Carousel>
          {textContent.reelsBlock.imgages.map((image, i) => (
            <CarouselItem key={i} isOutlined={true} className={cl.carouselItem}>
              <Link href={image.href} rel="noopener noreferrer" target="_blank">
                <Image
                  alt=""
                  src={image.image}
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
              <div className={cl.playButtonIcon}>
                <PlayButtonIcon />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        <Typography variant="body1">
          {textContent.reelsBlock.caption}
        </Typography>
        <Button variant="outlined" icon="bank" className={cl.button}>
          <Typography variant="h6">{textContent.reelsBlock.button}</Typography>
        </Button>
      </ContentCard>

      <div className={cl.linkCardsBlock}>
        {textContent.linkCardsBlock.map((card, i) => (
          <ContentCard width="376px" key={i}>
            <Typography variant="body1">{card.title}</Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ maxWidth: "100px", height: "auto" }}
            />
            <Button
              variant="outlined"
              icon={card.button.icon}
              className={cl.button}
            >
              <Link href={card.button.href} style={{ textDecoration: "none" }}>
                <Typography variant="h6">{card.button.text}</Typography>
              </Link>
            </Button>
          </ContentCard>
        ))}
      </div>
    </main>
  );
}

function getReviewImagesSrc() {
  const revievs = [];

  for (let i = 1; i < 11; i++) {
    revievs.push(`/reviews/${i}.png`);
  }
  return revievs;
}

async function getPartnerImagesSrc() {
  await dbConnect();

  const partners = (await Partner.find().lean()) as IPartner[];

  return partners;
}
