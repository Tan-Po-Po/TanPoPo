import getIconArtSrc from "@/helpers/getIconArtSrc";
import styles from "./page.module.scss";
import TeamMemberCard from "@/components/teamMemberCard/teamMemberCard";
import TeamMember, { TeamMembers } from "@/models/TeamMember";
import dbConnect from "@/config/dbConnect";
import mongoose from "mongoose";

const teamMemberTemplate = {
  label: { value: "сенсей", color: "#C1BCFF" },
  name: "Тетяна",
  image: getIconArtSrc("girlStudent"),
  certificates: {
    keyPoints: [
      "Більше 7 років викладання",
      "1.5 роки навчання в японському національному університеті Рюкю(Окінава)",
      "1 рік навчання в Кіотському педагогічному університеті.",
      "1 рік тюторства для японських дітей в Японії",
      "2 роки в ролі перекладача",
    ],
    description: [
      {
        label: "das",
        image: "adf",
        caption: "adsf",
      },
    ],
  },
  education: {
    level: "JLPT N1.(Найвищий рівень,вільне володіння мовою)",
    university: "Київський націо-нальний університет імені Тараса Шевченка ",
    trainings: "Japanese Leaders, STF Teamline, Global teaching online",
  },
  about: [
    {
      color: "blue",
      text: "Пройшовши складний письмовий іспит з японської мови на мене чекав другий етап конкурсного відбору -  співбесіда в посольстві з трьома японцями. На щастя, 2 відбори я пройшла успішно. А це означало, що на мене чекав 1 рік насиченого та цікавого студентського життя в Японії. ",
    },
    {
      color: "blue",
      text: "Пройшовши складний письмовий іспит з японської мови на мене чекав другий етап конкурсного відбору -  співбесіда в посольстві з трьома японцями. На щастя, 2 відбори я пройшла успішно. А це означало, що на мене чекав 1 рік насиченого та цікавого студентського життя в Японії. ",
    },
    {
      color: "blue",
      text: "Пройшовши складний письмовий іспит з японської мови на мене чекав другий етап конкурсного відбору -  співбесіда в посольстві з трьома японцями. На щастя, 2 відбори я пройшла успішно. А це означало, що на мене чекав 1 рік насиченого та цікавого студентського життя в Японії. ",
    },
    {
      color: "blue",
      text: "Пройшовши складний письмовий іспит з японської мови на мене чекав другий етап конкурсного відбору -  співбесіда в посольстві з трьома японцями. На щастя, 2 відбори я пройшла успішно. А це означало, що на мене чекав 1 рік насиченого та цікавого студентського життя в Японії. ",
    },
  ],
};

// const createTeamMember = async (obj: TeamMembers) => {
//   await dbConnect();
//   const member = new TeamMember(obj);
//   await member.save();
// };

async function getTeamMember(): Promise<TeamMembers> {
  await dbConnect();

  const teamMember =
    (await TeamMember.findOne()) as mongoose.Document<TeamMembers>;

  return teamMember.toObject();
}

export default async function Home() {
  // await createTeamMember(teamMemberTemplate);

  const teamMember = await getTeamMember();
  console.log("teamMember", await teamMember);

  return (
    <main className={styles.main}>
      <h1>About page</h1>
      <TeamMemberCard teamMember={teamMember} />
    </main>
  );
}
