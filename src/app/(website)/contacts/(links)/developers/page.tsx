import cl from "./page.module.scss";
import { ContentCard, IconLink, Typography } from "@/components";
import Image from "next/image";
import { textContent } from "./textContent";
import { getValidClassNames } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Розробники | Tanpopo",
};
export default function Developers() {
  const labelColor = "#FFF8BC";
  return (
    <div className={cl.developers}>
      <Typography variant="h3" align="center">
        {textContent.header}
      </Typography>
      <ContentCard
        className={cl.contentCard}
        labelClassName={cl.label}
        width="592px"
        label={
          <Typography
            variant="h6"
            style={{ lineHeight: "29px", fontSize: "22px" }}
          >
            {textContent.developers.bogdan.label.text}
          </Typography>
        }
        labelBgColor={textContent.developers.bogdan.label.color}
        labelPosition="top"
      >
        <ContentCard
          width="442px"
          className={cl.imageWrapper}
          labelPosition="bottom"
          labelBgColor={labelColor}
          label={
            <Typography variant="body1">
              {textContent.developers.bogdan.name}
            </Typography>
          }
        >
          <Image
            alt=""
            src={textContent.developers.bogdan.image}
            width={500}
            height={300}
            style={{ maxWidth: "442px", width: "100%", height: "auto" }}
          />
        </ContentCard>
        <div className={cl.socials}>
          <div className={cl.links}>
            <IconLink
              icon="instagram"
              href={textContent.developers.bogdan.socials.instagram}
              height="42px"
            />
            <IconLink
              icon="telegram"
              href={textContent.developers.bogdan.socials.telegram}
              height="42px"
            />
          </div>
          <div className={cl.email}>
            <Typography variant="h6">Email:</Typography>
            <Typography variant="body2">
              {textContent.developers.bogdan.socials.email}
            </Typography>
          </div>
        </div>
      </ContentCard>
      <div className={cl.others}>
        <ContentCard
          className={cl.contentCard}
          labelClassName={cl.label}
          width="592px"
          label={
            <Typography
              variant="h6"
              style={{ lineHeight: "29px", fontSize: "22px" }}
            >
              {textContent.developers.anton.label.text}
            </Typography>
          }
          labelBgColor={textContent.developers.anton.label.color}
          labelPosition="top"
        >
          <ContentCard
            width="442px"
            className={getValidClassNames(cl.imageWrapper, cl.anton)}
            labelPosition="bottom"
            labelBgColor={labelColor}
            label={
              <Typography variant="body1">
                {textContent.developers.anton.name}
              </Typography>
            }
          >
            <Image
              alt=""
              src={textContent.developers.anton.image}
              width={500}
              height={300}
              style={{
                maxWidth: "442px",
                width: "100%",
                maxHeight: "425px",
                height: "auto",
              }}
            />
          </ContentCard>
          <div className={cl.socials}>
            <div className={cl.links}>
              <IconLink
                icon="gitHub"
                href={textContent.developers.anton.socials.gitHub}
                height="42px"
              />
              <IconLink
                icon="linkedIn"
                href={textContent.developers.anton.socials.linkedIn}
                height="42px"
              />
              <IconLink
                icon="telegram"
                href={textContent.developers.anton.socials.telegram}
                height="42px"
              />
            </div>
            <div className={cl.email}>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body2">
                {textContent.developers.anton.socials.email}
              </Typography>
            </div>
          </div>
        </ContentCard>

        <ContentCard
          className={cl.contentCard}
          labelClassName={cl.label}
          width="592px"
          label={
            <Typography
              variant="h6"
              style={{ lineHeight: "29px", fontSize: "22px" }}
            >
              {textContent.developers.pasha.label.text}
            </Typography>
          }
          labelBgColor={textContent.developers.pasha.label.color}
          labelPosition="top"
        >
          <ContentCard
            width="442px"
            className={cl.imageWrapper}
            labelPosition="bottom"
            labelBgColor={labelColor}
            label={
              <Typography variant="body1">
                {textContent.developers.pasha.name}
              </Typography>
            }
          >
            <Image
              alt=""
              src={textContent.developers.pasha.image}
              width={500}
              height={300}
              style={{
                maxWidth: "442px",
                width: "100%",
                maxHeight: "425px",
                height: "auto",
              }}
            />
          </ContentCard>
          <div className={cl.socials}>
            <div className={cl.links}>
              <IconLink
                icon="gitHub"
                href={textContent.developers.pasha.socials.gitHub}
                height="42px"
              />
              <IconLink
                icon="linkedIn"
                href={textContent.developers.pasha.socials.linkedIn}
                height="42px"
              />
              <IconLink
                icon="telegram"
                href={textContent.developers.pasha.socials.telegram}
                height="42px"
              />
            </div>
            <div className={cl.email}>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body2">
                {textContent.developers.pasha.socials.email}
              </Typography>
            </div>
          </div>
        </ContentCard>
      </div>
    </div>
  );
}
