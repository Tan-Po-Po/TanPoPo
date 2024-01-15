"use client";
import dbConnect from "@/config/dbConnect";
import { IPolicy } from "@/models/Policies/interface";
import { PageName } from "../layout";
import Oferta from "@/models/Policies/Oferta";
import ConfidentialityPolicy from "@/models/Policies/ConfidentialityPolicy";
import { usePathname } from "next/navigation";
import cl from "../layout.module.scss";
import { useEffect, useState } from "react";
import { getPoliciesFromDb } from "./actions";
import { getPageName } from "@/helpers/getPageName";

export const Policies = () => {
  const [policies, setPolicies] = useState<IPolicy>();

  const pathname = usePathname();

  const pageName = getPageName(pathname) as PageName;

  useEffect(() => {
    const getPolicies = async () => {
      const policies = await getPoliciesFromDb(pageName);
      setPolicies(policies);
    };

    getPolicies();
  }, [pageName]);

  if (!policies) {
    return <></>;
  }

  return (
    <>
      {policies.content.map((policy) => {
        if (!policy.title) {
          return (
            <div key={policy.id} className={cl.para}>
              {policy.text}
            </div>
          );
        }

        return (
          <div key={policy.id} className={cl.policy}>
            <div className={cl.title}>{policy.title}</div>
            <div className={cl.para}>{policy.text}</div>
          </div>
        );
      })}
    </>
  );
};
