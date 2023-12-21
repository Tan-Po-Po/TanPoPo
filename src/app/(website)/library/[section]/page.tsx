import { getLibraryAccess } from "@/helpers/getLibraryAccess";
import React from "react";
import Content from "./_content/content";
import Password from "./_password/password";

interface Props {
  params: {
    section: string;
  };
}

const Section: React.FC<Props> = async ({ params }) => {
  const accessGranted = await getLibraryAccess(params.section);

  return <>{accessGranted ? <Content params={params} /> : <Password />}</>;
};

export default Section;
