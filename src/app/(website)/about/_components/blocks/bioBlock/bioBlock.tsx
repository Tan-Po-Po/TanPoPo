import { ContentCard, Typography } from "@/components";
import cl from "./bioBlock.module.scss";
import Image from "next/image";
import { Line } from "../../line/line";
import { textContent } from "../../../textContent";
import { getValidClassNames } from "@/helpers";


export const BioBlock = () => {
  const pcBioContent = (
    <>
      <Line height="144px" />

      <ContentCard className={cl.bioContent} width="100%">
        <ContentCard className={cl.imageContent} width="433px">
          <Image
            alt=""
            src={"/photos/crossroads.png"}
            // fill
            // sizes="100vw"
            height={580}
            width={425}
            style={{ objectFit: "cover", width: "100%" }}
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

      <Line position="left" flag="ua" />

      <ContentCard
        className={getValidClassNames(cl.bioContent, cl.contentGrid)}
        width="100%"
      >
        <ContentCard
          className={getValidClassNames(cl.imageContent, cl.imgRight)}
        >
          <Image
            alt=""
            src={"/photos/table.png"}
            sizes="100vw"
            width={380}
            height={280}
            style={{ width: "100%", height: "auto" }}
          />
        </ContentCard>
        <ContentCard
          className={getValidClassNames(cl.imageContent, cl.imgLeft)}
        >
          <Image
            alt=""
            src={"/photos/tv.png"}
            width={372}
            height={372}
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

      <Line position="right" flag="jp" />

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
            width={372}
            height={495}
            style={{ width: "100%", height: "auto" }}
          />
        </ContentCard>
      </ContentCard>
    </>
  );
  const bioContent = (
    <>
      <ContentCard className={cl.bioContent} width="100%">
        <ContentCard className={cl.imageContent} width="433px">
          <Image
            alt=""
            src={"/photos/crossroads.png"}
            width={255}
            height={340}
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
        </div>
      </ContentCard>

      <div className={cl.paragraphs}>
        <Typography variant="body1">
          <b>{textContent.bioCards.card1.p4.bold}</b>{" "}
          {textContent.bioCards.card1.p4.normal}
        </Typography>
        <Typography variant="body1">
          <b>{textContent.bioCards.card1.p5.bold}</b>{" "}
          {textContent.bioCards.card1.p5.normal}
        </Typography>
      </div>

      <ContentCard width="100%" className={cl.bioContent}>
        <div className={cl.paragraphs}>
          <Typography variant="body1" className={cl.p1}>
            <b>{textContent.bioCards.card2.p1.bold}</b>{" "}
            {textContent.bioCards.card2.p1.normal}
          </Typography>
          <Typography variant="body1" className={cl.p2}>
            <b>{textContent.bioCards.card2.p2.bold}</b>{" "}
            {textContent.bioCards.card2.p2.normal}
          </Typography>
        </div>
        <ContentCard
          className={getValidClassNames(cl.imageContent, cl.imgRight)}
        >
          <Image
            alt=""
            src={"/photos/table.png"}
            sizes="100vw"
            width={325}
            height={250}
            style={{ width: "100%", height: "auto" }}
          />
        </ContentCard>
      </ContentCard>

      <div className={cl.paragraphs}>
        <Typography variant="body1" className={cl.p3}>
          <b>{textContent.bioCards.card2.p3.bold}</b>{" "}
          {textContent.bioCards.card2.p3.normal}
        </Typography>
      </div>

      <ContentCard width="100%" className={cl.bioContent}>
        <ContentCard
          className={getValidClassNames(cl.imageContent, cl.imgLeft)}
        >
          <Image
            alt=""
            src={"/photos/tv.png"}
            width={253}
            height={273}
            style={{ objectFit: "cover" }}
          />
        </ContentCard>
        <div className={cl.paragraphs}>
          <Typography variant="body1" className={cl.p4}>
            <b>{textContent.bioCards.card2.p4.bold}</b>{" "}
            {textContent.bioCards.card2.p4.normal}
          </Typography>
        </div>
      </ContentCard>

      <div className={cl.paragraphs}>
        {" "}
        <Typography variant="body1">
          <b>{textContent.bioCards.card3.p1.bold}</b>{" "}
          {textContent.bioCards.card3.p1.normal}
        </Typography>
        <Typography variant="body1">
          <b>{textContent.bioCards.card3.p2.bold}</b>{" "}
          {textContent.bioCards.card3.p2.normal}
        </Typography>
      </div>

      <ContentCard className={cl.bioContent} width="100%">
        <div className={cl.paragraphs}>
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
            width={253}
            height={340}
            style={{ width: "100%", height: "auto" }}
          />
        </ContentCard>
      </ContentCard>
    </>
  );

  return (
    <div
      className={cl.bioBlock}
      id="history"
      style={{ scrollMarginTop: "110px" }}
    >
      <ContentCard
        className={getValidClassNames(cl.imageContent, cl.ceoImage)}
        labelClassName={cl.label}
        width="100%"
        labelPosition="bottom"
        labelBgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
        label={
          <div className={cl.pcBlock}>
            <Typography variant="h3" className={cl.labelLine1}>
              Тетяна Селіверстова
            </Typography>
            <Typography variant="h6" className={cl.labelLine2}>
              Засновниця школи <b>TanPoPo</b>
            </Typography>
          </div>
        }
      >
        <Image
          alt=""
          src={"/photos/kids.png"}
          width={1340}
          height={780}
          style={{ width: "100%", height: "auto" }}
          className={cl.image}
        />
      </ContentCard>

      <div className={cl.mobileBlock}>
        <Line height="64px" />
        <ContentCard
          width="fit-content"
          className={cl.label}
          cardBgColor="linear-gradient(180deg, #FDFF87 0%, #FAD26C 100%)"
        >
          <Typography variant="h3" className={cl.labelLine1}>
            Тетяна Селіверстова
          </Typography>
          <Typography variant="h6" className={cl.labelLine2}>
            Засновниця школи <b>TanPoPo</b>
          </Typography>
        </ContentCard>
        <Line height="64px" />
      </div>

      <div className={cl.pcBio}>{pcBioContent}</div>
      <div className={cl.mobileBio}>{bioContent}</div>
    </div>
  );
};
