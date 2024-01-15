"use server";
import dbConnect from "@/config/dbConnect";
import Oferta from "@/models/Policies/Oferta";
import ConfidentialityPolicy from "@/models/Policies/ConfidentialityPolicy";
import { PageName } from "../layout";
import { IPolicy } from "@/models/Policies/interface";

export const getPoliciesFromDb = async (page: PageName) => {
  await dbConnect();

  const model = page === "oferta" ? Oferta : ConfidentialityPolicy;

  const policies = (await model.findOne().lean()) as IPolicy;

  return JSON.parse(JSON.stringify(policies));
};
