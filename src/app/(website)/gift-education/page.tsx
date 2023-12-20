import { Typography, ContentCard, Button, Divider } from "@/components";
import Image from "next/image";
import Link from "next/link";
import cl from "./page.module.scss";
import { getIconArtSrc, getIconSrc } from "@/helpers";

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

        <div className={cl.startCards}>
          <ContentCard
            className={cl.card}
            width="365px"
            index="1"
            indexBgColor="rgba(255, 206, 200, 1)"
            cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #FFBEBE 100%)"
          >
            <Typography variant="h6"> Оберіть навчальний курс.</Typography>
            <Image
              src={getIconArtSrc("temple")}
              alt="Temple art"
              width={87}
              height={89}
            />
            <Typography variant="body2">
              Будь-який наш курс можна подарувати! Тому обирайте, що найкраще
              підійде за форматом навчання та рівнем мови для майбутнього учня!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="365px"
            index="2"
            indexBgColor="rgba(200, 242, 255, 1)"
            cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C8F2FF 100%)"
          >
            <div>
              <Typography
                variant="h6"
                style={{ fontSize: "23px", fontWeight: 700 }}
              >
                Натискайте
              </Typography>
              <Typography variant="body1" style={{ fontWeight: 700 }}>
                Подарунковий Сертифікат”
              </Typography>
            </div>
            <Image
              src={getIconArtSrc("certificate4")}
              alt="Calendar art"
              width={112}
              height={83}
            />
            <Typography variant="body2">
              Обравши курс та визначившись з Форматом Навчання, в таблиці
              обраного курсу обирайте: “К-сть Уроків & Ціна” та натискайте
              “Подарунковий Сертифікат”
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="365px"
            index="3"
            indexBgColor="rgba(201, 255, 200, 1)"
            cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #C9FFC8 100%)"
          >
            <Typography variant="h6">
              {" "}
              Оплатіть курс та розпочніть навчання!
            </Typography>
            <Image
              src={getIconArtSrc("book3")}
              alt="Boy and girl with laptop"
              width={96}
              height={81}
            />
            <Typography variant="body2">
              Ви можете обрати будь-яку к-сть уроків серед запропо-нованих!
              Після чого натискайте на клавішу, що з’явилась: “Навчання у
              Подарунок”!
            </Typography>
          </ContentCard>
        </div>
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
          <ContentCard width="400px">
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

          <ContentCard width="400px">
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

      <div className={cl.formats}>
        <div className={cl.formatWrapper}>
          <Link href="/education/sensei">
            <ContentCard
              cardBgColor="linear-gradient(rgba(173, 240, 255, 1), rgba(235, 191, 255, 1))"
              width="450px"
              height="250px"
              className={cl.formatCard}
            >
              <Image
                src={getIconSrc("groupTwo")}
                alt="Two people icon"
                width={72}
                height={60}
              />
              <Typography variant="body1">
                {"онлайн-курси \n з сенсеєм:"}
              </Typography>
            </ContentCard>
          </Link>
          <div className={cl.line}></div>
          <ContentCard>
            <Typography variant="body2" className={cl.bottomCard}>
              Для тих, хто полюбляє живе спілкування та навчання разом з сенсеєм
              онлайн!
            </Typography>
          </ContentCard>
        </div>

        <div className={cl.formatWrapper}>
          <Link href="/education/self">
            <ContentCard
              cardBgColor="linear-gradient(rgba(253, 255, 173, 1), rgba(255, 191, 214, 1))"
              width="450px"
              height="250px"
              className={cl.formatCard}
            >
              <Image
                src={getIconSrc("pcAndPhone")}
                alt="Two people icon"
                width={72}
                height={60}
              />
              <Typography variant="body1">
                {"курси для \n самостійного вивчення"}
              </Typography>
            </ContentCard>
          </Link>
          <div className={cl.line}></div>
          <ContentCard className={cl.bottomCard}>
            <Typography variant="body2">
              Навчайся у власному темпі за допомогою ефективних самостійних
              курсів!
            </Typography>
          </ContentCard>
        </div>
      </div>
    </main>
  );
}
