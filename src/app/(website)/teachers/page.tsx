import cl from "./page.module.scss";
import { TeamBlock } from "../about/_components/blocks/teamBlock/teamBlock";
import { getTeamMembers } from "../about/actions";
import { Metadata } from "next";
import { ContentCard, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { getIconArtSrc, getIconSrc } from "@/helpers";

export const metadata: Metadata = {
  title: "Викладачі японської мови | Кваліфіковані сенсеї",
  description:
    "Кваліфіковані викладачі з японської мови в TanPoPo! Це не просто репетитори японської мови, а круті сенсеї разом з якими Ви зможете поринути у світ японської!",
};

export const revalidate = 900;

export default async function About() {
  const [teamMembers] = await Promise.all([getTeamMembers()]);

  return (
    <main className={cl.main}>
      {teamMembers && <TeamBlock teamMembers={teamMembers} />}

      <>
        {" "}
        <div className={cl.senseiHeader}>
          <Typography variant="h3">Лише найкращі сенсеї</Typography>
          <Typography variant="h5">для найкращих результатів!</Typography>
        </div>
        <Link href="/courses#teacher">
          <ContentCard
            width="511px"
            className={cl.sensei}
            label={
              <div className={cl.link}>
                <Typography variant="body1">Онлайн-курси</Typography>
                <Typography variant="subtitle2">з сенсеєм</Typography>
              </div>
            }
            labelClassName={cl.label}
            labelPosition="top"
            labelBgColor="linear-gradient(180deg, #A6C4FF 0%, #E8A6FF 100%)"
          >
            <Image
              className={cl.icon}
              src={getIconArtSrc("teacher")}
              alt="Teacher art"
              width={88}
              height={71}
            />
            <Typography variant="body1">
              Для тих, хто полюбляє живе спілкування та навчання разом з сенсеєм
              онлайн!
            </Typography>
            <Image
              className={cl.arrow}
              src={getIconSrc("arrowLong")}
              alt="Arrow"
              width={100}
              height={80}
            />
          </ContentCard>
        </Link>
      </>
    </main>
  );
}
