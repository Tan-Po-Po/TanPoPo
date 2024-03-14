"use client";
import { useState } from "react";
import { ContentCard, IconLink, Typography } from "@/components";
import { AuthorContentCards } from "./authorContentCards/authorContentCards";
import { textContent } from "../../../textContent";
import cl from "./authorContent.module.scss";

const AuthorContent = () => {
  return (
    <div
      className={cl.authorContentBlock}
      id="content"
      style={{ scrollMarginTop: "120px" }}
    >
      <Typography variant="h3">
        {textContent.authorContentBlock.header}
      </Typography>
      <div className={cl.wrapper}>
        <InstaCardContainer />

        <YoutubeCardContainer />
      </div>
    </div>
  );
};

const InstaCardContainer = () => {
  const [instaHover, setInstaHover] = useState(false);
  return (
    <ContentCard
      width="620px"
      className={cl.socialCard}
      onMouseEnter={() => {
        console.log(instaHover);
        setInstaHover(true);
      }}
      onMouseLeave={() => setInstaHover(false)}
    >
      <Typography variant="h6">
        {textContent.authorContentBlock.instagram.title}
      </Typography>
      <IconLink
        icon="instagram"
        href={textContent.authorContentBlock.instagram.iconLink}
        height="64px"
        className={cl.iconLink}
        isHovered={instaHover}
      />
      <AuthorContentCards
        links={textContent.authorContentBlock.instagram.links}
        images={textContent.authorContentBlock.instagram.images}
      />
      <Typography variant="body2">
        {textContent.authorContentBlock.instagram.caption}
      </Typography>
    </ContentCard>
  );
};

const YoutubeCardContainer = () => {
  const [youtubeHover, setYoutubeHover] = useState(false);
  return (
    <ContentCard
      width="620px"
      className={cl.socialCard}
      onMouseEnter={() => setYoutubeHover(true)}
      onMouseLeave={() => setYoutubeHover(false)}
    >
      <Typography variant="h6">
        {textContent.authorContentBlock.youtube.title}
      </Typography>
      <IconLink
        icon="youTube"
        href={textContent.authorContentBlock.youtube.iconLink}
        height="64px"
        className={cl.iconLink}
        isHovered={youtubeHover}
      />
      <AuthorContentCards
        links={textContent.authorContentBlock.youtube.links}
        images={textContent.authorContentBlock.youtube.images}
      />
      <Typography variant="body2">
        {textContent.authorContentBlock.youtube.caption}
      </Typography>
    </ContentCard>
  );
};

export { AuthorContent };
