import dbConnect from "@/config/dbConnect";
import Partner, { IPartner } from "@/models/Partner";
import TeamMember, { ITeamMember } from "@/models/TeamMember";
import Feedbacks, { IFeedback } from "@/models/Feedbacks";

export async function getTeamMembers() {
  try {
    await dbConnect();

    const teamMembersDb = (await TeamMember.find().populate("image").populate({
      path: "certificates.description.image",
    })) as ITeamMember[];
    
    const teamMembers: ITeamMember[] = teamMembersDb.map((member) => {
      return JSON.parse(JSON.stringify(member));
    });

    return teamMembers;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPartnerImagesSrc() {
  try {
    await dbConnect();

    const partners = (await Partner.find()
      .lean()
      .populate("image"));

    return partners.map((partner) => JSON.parse(JSON.stringify(partner))) as IPartner[];
  } catch (error) {
    console.log(error);
    return [];
  }
}


export const getFeedbacks = async () => {
  try {
    await dbConnect();

    const feedbacks = await Feedbacks.find().populate("image");
    return JSON.parse(JSON.stringify(feedbacks)) as IFeedback[];
  } catch (err: any) {
    console.log(err);
  }
};