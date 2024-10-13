import Link, { ILink } from "@/models/Link";
import dbConnect from "@/config/dbConnect";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 900; // 15 minutes

const getLinkData = async (slug: string) => {
  await dbConnect();
  const itemDb = (await Link.findOne({ slug }).lean()) as ILink;

  if (!itemDb) {
    return null;
  }

  const linkData = JSON.parse(JSON.stringify(itemDb)) as ILink;

  return linkData;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postData = await getLinkData(params.slug);

  return {
    title: postData?.tabTitle,
    description: postData?.pageDescription,
  };
}

interface Props {
  params: { slug: string };
}

const RedirectPage: React.FC<Props> = async ({ params }) => {
  const linkData = await getLinkData(params.slug);

  if (!linkData) {
    return notFound();
  }

  redirect(linkData.originalUrl);
};

export default RedirectPage;
