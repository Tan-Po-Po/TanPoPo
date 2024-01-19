"use client";

import { ContentCard, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import cl from "../../page.module.scss";
import { Suspense } from "react";

const PayLaterResult: React.FC = () => {
  const searchParams = useSearchParams();

  return (
    <>
      <ContentCard width="336px" className={cl.orderNumber}>
        <Typography variant="h6">Номер замовлення:</Typography>
        <Suspense fallback={<></>}>
          <ContentCard width="195px" className={cl.orderValue}>
            <Typography variant="h4">{searchParams.get("id")}</Typography>
          </ContentCard>
        </Suspense>
      </ContentCard>

      <ContentCard width="478px" className={cl.message}>
        <Typography variant="h6">
          Ми якнайшвидше розпочнемо пакувати ваше замовлення!
        </Typography>
        <Typography variant="subtitle1">
          Та надішлимо Вам повідомлення, коли пакуночок почне прямувати до Вас!
        </Typography>
      </ContentCard>
    </>
  );
};

export default PayLaterResult;
