import { Typography, ContentCard, Divider, CourseFormats } from "@/components";
import { Cards } from "./_cards/cards";
import { getIconArtSrc } from "@/helpers";
import Image from "next/image";
import cl from "./page.module.scss";

export default function Home() {
  return (
    <main className={cl.main}>
      <div className={cl.header}>
        <Typography variant="h6">Навчання разом з</Typography>
        <Typography variant="h2" style={{ fontSize: "44px" }}>
          TanPoPo💛
        </Typography>
      </div>

      <ContentCard width="716px" className={cl.card}>
        <Typography variant="h4">Найкращий подарунок - це знання!</Typography>
        <Image
          src={getIconArtSrc("presentBox3")}
          alt="Present box"
          width={121}
          height={101}
        />
        <Typography variant="subtitle1">
          Ідеальний подарунок для дітей та дорослих і для всіх, хто просто бажає
          вивчати та вдосконалювати японську мову! В нашій школі TanPoPo лише
          відбірні навчальні матеріали та найкращі кваліфіковані сенсеї - тобто
          є все, що потрібно для якісного, швидкісного та ефективного навчання!
        </Typography>
      </ContentCard>

      <Image
        className={cl.confetti}
        src="/icons/confetti.png"
        alt="Confetti"
        width={150}
        height={138}
      />

      <div className={cl.start}>
        <div className={cl.startHeader}>
          <Typography variant="h4">
            Подарувати навчання японської мови
          </Typography>
          <Typography variant="h4">як ніколи просто:</Typography>
        </div>
        <Cards />
      </div>

      <div className={cl.certificateType}>
        <ContentCard
          cardBgColor="linear-gradient(180deg, #FFE352 0%, #FFED72 70%)"
          width="420px"
          height="85px"
          className={cl.certificateHeader}
        >
          <Typography variant="body1" style={{ fontSize: "22px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700" }}>2</span> види
            сертифікату на вибір!
          </Typography>
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
              Протягом дня з моменту успішної оплати ми надішлимо ваш
              подарунковий сертифікат в електронному вигляді (формат .pdf та
              .png). Разом з сертифікатом Вам надається унікальний промокод для
              активації обраного курсу. Приклад такого подарункового
              сертифікату, Ви можете переглянути зверху на картинці!
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
              презентабельно! Послуга коштує: 120грн(друк + доставка). Ви
              зможете отримати іменний сертифікат за 2-4 дні з моменту
              замовлення!
            </Typography>
          </ContentCard>
        </div>
      </div>

      <Divider firstRow="НАШІ КУРСИ:" className={cl.divider} />

      <CourseFormats />
    </main>
  );
}
