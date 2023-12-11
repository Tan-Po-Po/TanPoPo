import Image from "next/image";
import { ContentCard, Typography } from "..";
import cl from "./requisitesSmall.module.scss";
import { getValidClassNames } from "@/helpers";
import Link from "next/link";

interface Props {
  className?: string;
}

export const RequisitesSmall: React.FC<Props> = ({ className }) => {
  return (
    <div className={getValidClassNames(cl.requisitesSmall, className)}>
      <Typography
        variant="h6"
        style={{ marginTop: "100px", textAlign: "center" }}
      >
        Швидка оплата за QR-кодом нашої школи:
      </Typography>

      <div className={cl.qrCodes}>
        <ContentCard width="285px" className={cl.code}>
          <Typography variant="body1">QR-код Monobank</Typography>
          <Image
            width={174}
            height={169}
            src="/qrCodes/mono.jpg"
            alt="Monobank QRCode"
          />
        </ContentCard>

        <ContentCard width="285px" className={cl.code}>
          <Typography variant="body1">QR-код Privat24</Typography>
          <Image
            width={161}
            height={161}
            src="/qrCodes/privat24.jpg"
            alt="Privat24 QRCode"
          />
        </ContentCard>
      </div>

      <Typography variant="h6">АБО</Typography>

      <ContentCard
        className={cl.requisites}
        width="515px"
        cardBgColor="linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)"
      >
        <Typography variant="h6">Наші реквізити для оплати:</Typography>
        <ContentCard className={cl.card} width="185px">
          <Typography variant="h6">ЕДРПОУ:</Typography>
          <Typography variant="body2">31485189</Typography>
        </ContentCard>

        <ContentCard className={cl.card} width="365px">
          <Typography variant="h6">IBAN:</Typography>
          <Typography variant="body2">UA354787040000026548054312944</Typography>
        </ContentCard>

        <Link href={"/contacts/requisites"}>
          <Typography variant="body2">
            <u>Повні реквізити компанії</u>
          </Typography>
        </Link>
        <Typography variant="body2">
          <b>ФОП Селіверстова Тетяна Дмитрівна</b>
        </Typography>
      </ContentCard>
    </div>
  );
};
