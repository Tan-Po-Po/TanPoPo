import { ContentCard, RequisitesSmall, Typography } from "@/components";
import cl from "../page.module.scss";
import { ResultProps } from "../resultProps";

export const PayNowResult: React.FC<ResultProps> = ({ orderNumber, total }) => {
  return (
    <>
      <div className={cl.info}>
        <ContentCard width="410px" className={cl.total}>
          <Typography variant="h6">Сума до спалти:</Typography>
          <Typography variant="h4" className={cl.totalValue}>
            {total} грн
          </Typography>
          <Typography variant="subtitle1">
            Просимо в призначені платежу вказати номер замовлення!
          </Typography>
        </ContentCard>
        <div className={cl.line}></div>
        <ContentCard width="336px" className={cl.orderNumber}>
          <Typography variant="h6">Номер замовлення:</Typography>
          <ContentCard width="195px" className={cl.orderValue}>
            <Typography variant="h4">{orderNumber}</Typography>
          </ContentCard>
        </ContentCard>
      </div>

      <RequisitesSmall className={cl.requisites} />

      <Typography variant="subtitle1" style={{ textAlign: "center" }}>
        Після того, як ми побачимо вашу оплату Ми якнайшвидше <br /> розпочнемо
        пакувати ваше замовлення і надішлимо Вам <br /> повідомлення, коли
        пакуночок почне прямувати до Вас!{" "}
      </Typography>
    </>
  );
};
