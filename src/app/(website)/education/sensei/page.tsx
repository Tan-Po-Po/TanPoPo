import {
  ContentCard,
  StartEducationSensei,
  Typography,
  DialogGallery,
} from "@/components";
import { Cards } from "./_cards/cards";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import { useAppDispatch } from "@/redux/hooks";
import { VideoBlock } from "./videoBlock";
import Image from "next/image";
import cl from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Курси японської мови з сенсеєм | Освітня програма",
  description:
    "Всеохоплююче навчання, яке включає різноманітні техніки вивчення японської мови та фокусується на всіх аспектах сприйняття для якісного засвоєння матеріалу.",
};

export default function Page() {
  return (
    <main className={cl.main}>
      <DialogGallery />

      <div className={cl.header}>
        <Typography variant="h3">Освітня програма</Typography>
        <Typography variant="h6">для онлайн-курсів з сенсеєм</Typography>
      </div>

      <VideoBlock />

      <Cards className={cl.cards} />

      <ContentCard className={cl.description} width="970px">
        <div className={cl.header}>
          <Typography variant="body1">
            Загальний опис навчальної програми
          </Typography>
          <Typography variant="h6">онлайн-курсів з сенсеєм:</Typography>
        </div>
        <Image
          src={getIconArtSrc("school")}
          alt="School art"
          width={138}
          height={120}
        />

        <div className={getValidClassNames(cl.index)}>
          <div className={cl.line}></div>
          <Typography variant="body1" className={cl.number}>
            1
          </Typography>
        </div>
        <Typography variant="body1" className={cl.text}>
          Наші курси розділені на 6 окремих блоків, кожен блок включає ~9
          практичних уроків та загальний тест для перевірки знань. Така система
          є дуже ефективною, адже Ви не лише вчите матеріали, але й також маєте
          змогу краще відслідковувати власні успіхи під час навчання.
        </Typography>

        <div
          className={getValidClassNames(cl.index, cl.index2)}
          style={{ marginLeft: "90px" }}
        >
          <div className={cl.line}></div>
          <Typography
            variant="body1"
            className={cl.number}
            style={{ background: "rgba(255, 230, 181, 1)" }}
          >
            2
          </Typography>
        </div>
        <Typography variant="body1" className={cl.text}>
          Кожен блок структурований таким чином, що після теоретичної частини ви
          одразу отримаєте можливість застосувати знання на практиці. Це не
          просто збільшує вашу впевненість у засвоєному, але й робить процес
          навчання цікавішим і динамічнішим!
        </Typography>

        <div
          className={getValidClassNames(cl.index, cl.index3)}
          style={{ marginLeft: "130px" }}
        >
          <div className={cl.line}></div>
          <Typography
            variant="body1"
            className={cl.number}
            style={{ background: "rgba(255, 212, 181, 1)" }}
          >
            3
          </Typography>
        </div>
        <Typography variant="body1" className={cl.text}>
          Важливо, що всі матеріали ЛАНЦЮГОВІ. Що це означає? Це означає, що
          окрім поетапного ускладнення інформації, кожна презентація повʼязана з
          наступною. Кожен урок розпочинається з повторення вивченого матеріалу
          з минулого заняття. Це забезпечує високу підготовку студентів, і
          головне, якісне поглинання важливої інформації на шляху до покращення
          рівня японської мови.
        </Typography>

        <div
          className={getValidClassNames(cl.index, cl.index4)}
          style={{ marginLeft: "180px" }}
        >
          <div className={cl.line}></div>
          <Typography
            variant="body1"
            className={cl.number}
            style={{ background: "rgba(255, 194, 181, 1)" }}
          >
            4
          </Typography>
        </div>
        <Typography variant="body1" className={cl.text}>
          Коли кожен наступний урок будується на фундаменті попереднього, це
          створює “накопичувальний” ефект: ваші знання постійно розвиваються і
          поглиблюються. Цей підхід гарантує, що ви не лише пасивно засвоюєте
          інформацію, але й активно використовуєте її, що сприяє кращому
          закріпленню матеріалу після кожного заняття.
        </Typography>

        <div
          className={getValidClassNames(cl.index, cl.index5)}
          style={{ marginLeft: "225px" }}
        >
          <div className={cl.line}></div>
          <Typography
            variant="body1"
            className={cl.number}
            style={{ background: "rgba(255, 181, 181, 1)" }}
          >
            5
          </Typography>
        </div>
        <Typography variant="body1" className={cl.text}>
          Кожне онлайн-заняття записується та зберігається в архіві на нашій
          платформі TanPoPo і є доступним для перегляду для повторення матеріалу
          або у випадку, якщо вам не вдалось відвідати заняття. Це дозволяє
          кожному учню підтримувати стабільний темп навчання та не втрачати
          здобуті навички, незалежно від непередбачених обставин, що є ключем до
          ефективного вивчення мови!
        </Typography>
      </ContentCard>

      <ContentCard className={cl.certificate} width="670px">
        <Typography variant="h6">
          Отримуйте іменний електронний сертифікат від нашої школи TanPoPo!
        </Typography>
        <Image
          src={getIconArtSrc("certificate3")}
          alt="Certificate"
          width={110}
          height={80}
        />
        <Typography variant="body2" align="center">
          Наприкінці курсу проходьте фінальний тест, щоб підвердити ваші здобуті
          знання та навички та отримуйте сертифікат від TanPoPo про успішне
          проходження обраного курсу! А за допомогою унікального QR-коду, що
          знаходиться на сертифікаті можна в будь-який момент перевірити його
          автентичність, навіть після завершення вашого навчання!
        </Typography>
      </ContentCard>

      <StartEducationSensei />
    </main>
  );
}
