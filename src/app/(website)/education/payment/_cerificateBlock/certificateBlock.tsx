import { ContentCard, Typography } from "@/components";
import React from "react";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";

type Props = {
  certificateType: "Електронний сертифікат" | "Друкований сертифікат";
  className?: string;
};

const CertificateBlock: React.FC<Props> = ({ certificateType, className }) => {
  return certificateType === "Електронний сертифікат" ? (
    <ContentCard width="670px" className={className}>
      <Typography variant="body1">
        Здійснивши оплату, вашу заявку на подарунковий сертифікат буде
        сформовано. Після чого отримуйте електронний сертифікат та унікальний
        промокод для активації курсу протягом дня!
      </Typography>

      <Image
        src={getIconArtSrc("clock")}
        alt="Clock icon"
        width={151}
        height={116}
        style={{ margin: "30px 0 20px" }}
      />
    </ContentCard>
  ) : (
    <ContentCard
      width="755px"
      className={className}
      style={{ padding: "35px 30px" }}
    >
      <Typography variant="body1" style={{ fontSize: "19px" }}>
        Здійснивши оплату, вашу заявку на подарунковий сертифікат буде
        сформовано. Після чого отримуйте іменний друкований сертифікат та
        унікальний промокод для активації обраного курсу протягом 2-4 днів з
        моменту замовлення!
      </Typography>

      <Image
        src={getIconArtSrc("certificate1")}
        alt="Certificate"
        width={148}
        height={115}
        style={{ margin: "15px auto" }}
      />

      <Typography variant="body1" style={{ fontSize: "19px" }}>
        Використовуючи лише щільний папір та техніку цифрового фольгування та
        лакування преміум-якості, ми упаковуємо іменний сертифікат у великий
        крафт-конверт, який, за бажанням, Ви зможете особисто підписати!
      </Typography>
    </ContentCard>
  );
};

export { CertificateBlock };
