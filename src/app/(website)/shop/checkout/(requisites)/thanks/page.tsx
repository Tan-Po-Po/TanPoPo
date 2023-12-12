"use client";

import { ContentCard, Typography } from "@/components";
import { useSearchParams } from "next/navigation";
import cl from "../../page.module.scss";

const PayLaterResult: React.FC = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id");

  return (
    <>
      <ContentCard width="336px" className={cl.orderNumber}>
        <Typography variant="h6">Номер замовлення:</Typography>
        <ContentCard width="195px" className={cl.orderValue}>
          <Typography variant="h4">{id}</Typography>
        </ContentCard>
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

export default PayLaterResult
