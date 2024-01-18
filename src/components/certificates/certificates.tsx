import { ContentCard } from "../contentCard/contentCard";
import { Typography } from "../typography/typography";
import Image from "next/image";
import cl from "./certificates.module.scss";
import { getValidClassNames } from "@/helpers";

type Properties = {
  header: 1 | 2;
  className?: string;
};

const Certificates: React.FC<Properties> = ({ header, className }) => {
  return (
    <div className={getValidClassNames(cl.certificateType, className)}>
      <ContentCard
        cardBgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="420px"
        className={cl.certificateSmallHeader}
      >
        <Typography variant="body1" style={{ fontSize: "20px" }}>
          2 види подарункових сертифікатів
        </Typography>
      </ContentCard>

      <ContentCard
        cardBgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
        width="420px"
        height="85px"
        className={cl.certificateHeader}
      >
        {header === 1 ? (
          <>
            <Typography
              variant="body1"
              style={{ fontSize: "22px", fontWeight: "700" }}
            >
              Оберіть вид
            </Typography>
            <Typography variant="body1">подарункового сертифікату</Typography>
          </>
        ) : (
          <Typography variant="body1" style={{ fontSize: "22px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700" }}>2</span> види
            сертифікату на вибір!
          </Typography>
        )}

        <div className={cl.line}></div>
      </ContentCard>

      <div className={cl.container}>
        <ContentCard width="400px" className={cl.certificateCard}>
          <div>
            <Typography
              variant="body1"
              style={{ fontSize: "19px", fontWeight: "700" }}
            >
              Електронний Подарунковий
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "22px", fontWeight: "700" }}
            >
              Сертифікат
            </Typography>
          </div>

          <Image
            alt="certificate"
            src="/certificates/electronic.png"
            width={274}
            height={190}
          />

          <Typography variant="body2">
            Протягом дня з моменту успішної оплати ми надішлимо ваш подарунковий
            сертифікат в електронному вигляді (формат .pdf та .png). Разом з
            сертифікатом Вам надається унікальний промокод для активації
            обраного курсу. Приклад такого подарункового сертифікату, Ви можете
            переглянути зверху на картинці!
          </Typography>
        </ContentCard>

        <Typography variant="body1" className={cl.or}>
          АБО
        </Typography>

        <ContentCard width="400px" className={cl.certificateCard}>
          <div>
            <Typography
              variant="body1"
              style={{ fontSize: "19px", fontWeight: "700" }}
            >
              Іменний Друкований
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "22px", fontWeight: "700" }}
            >
              Сертифікат
            </Typography>
          </div>

          <Image
            alt="certificate"
            src="/certificates/name.png"
            width={274}
            height={190}
          />

          <Typography variant="body2">
            Ми друкуємо іменні сертифікати з вискоякісного щільного паперу,
            використовуючи цифрове фольгування та лакування преміум-якості!
            Таким чином сертифікат виглядає максимально святково та
            презентабельно! Послуга коштує: 120грн(друк + доставка). Ви зможете
            отримати іменний сертифікат за 2-4 дні з моменту замовлення!
          </Typography>
        </ContentCard>
      </div>
    </div>
  );
};

export { Certificates };
