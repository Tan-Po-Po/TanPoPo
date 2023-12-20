import { ContentCard, StartEducationSensei, Typography } from "@/components";
import { getIconArtSrc, getIconSrc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import PlayButton from "public/icons/playButton.svg";
import TriangleButton from "public/icons/triangleButton.svg";
import cl from "./page.module.scss";

export default async function Page() {
  return (
    <main>
      <div className={cl.header}>
        <Typography variant="h3">Освітня програма</Typography>
        <Typography variant="h6">для онлайн-курсів з сенсеєм</Typography>
      </div>

      <div className={cl.video}>
        <Image
          src="/photos/university.jpg"
          alt="Japanese modern building"
          width={970}
          height={550}
        />
        <div className={cl.title}>Як проходять наші онлайн-заняття?</div>
        <PlayButton className={cl.playBtn} />
      </div>

      <div className={cl.cards}>
        <ContentCard>
          <Typography variant="h6">Панорамна Методика</Typography>
          <Image
            src={getIconArtSrc("mountain2")}
            alt="Mountains art"
            width={115}
            height={70}
          />
          <Typography variant="body2">
            Всеохоплююче навчання, яке включає різноманітні техніки вивчення
            мови та фокусується на всіх аспектах сприйняття для якісного
            засвоєння матеріалу:
          </Typography>
          <ul>
            <li>розмовні практики</li>
            <li>аудіоальні комунікації</li>
            <li>культурні перерви</li>
            <li>перекладацькі трансформації </li>
            <li>лексика + граматика</li>
            <li>писемність + ієрогліфіка</li>
            <li>мнемоніка та багато іншого!</li>
          </ul>
        </ContentCard>

        <ContentCard>
          <Typography variant="h6">Взаємодія & Комунікація</Typography>
          <Image
            src={getIconArtSrc("laptop1")}
            alt="Laptop art"
            width={96}
            height={75}
          />
          <Typography variant="body2">
            Наші сенсеї завжди на зв’язку та готові допомогти, якщо у вас
            виникають додаткові запитання навіть поза заняттями! Також після
            кожного уроку вам пропону-ються домашні завдання, які допомагають
            поглибити розумі-ння теми, сформувати навички самостійної роботи з
            пройденим матеріалом та закріпити його на практиці. Наші сенсеї
            ретельно все перевірять та допоможуть уточнити всі незрозумілі
            моменти!
          </Typography>
        </ContentCard>

        <ContentCard>
          <Typography variant="h6">Культура та Традиції</Typography>
          <Image
            src={getIconArtSrc("toriGate2")}
            alt="Tori gate art"
            width={98}
            height={98}
          />
          <Typography variant="body2">
            На кожному занятті на вас чекає “Острів Відпочинку”, де Ви будете
            дізнаватись про культуру, цінно-сті, традиції, кухню, свята, звичаї,
            історію, роль технологій та навіть про особливості поведінки японців
            в різних життєвих ситуаціях, адже вивчення будь-якої мови - це не
            лише словниковий запас та граматика, а й занурення в культуру та
            спосіб життя цієї країни! І наші курси розроблені з урахуванням
            цього принципу!
          </Typography>
        </ContentCard>
      </div>

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

        <div className={cl.index}>
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

        <div className={cl.index} style={{ marginLeft: "90px" }}>
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

        <div className={cl.index} style={{ marginLeft: "130px" }}>
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

        <div className={cl.index} style={{ marginLeft: "180px" }}>
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

        <div className={cl.index} style={{ marginLeft: "225px" }}>
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

      <ContentCard className={cl.sertificate} width="670px">
        <Typography variant="h6">
          Отримуйте іменний електронний сертифікат від нашої школи TanPoPo!
        </Typography>
        <Image
          src={getIconArtSrc("certificate3")}
          alt="Certificate"
          width={110}
          height={80}
        />
        <Typography variant="body2">
          Наприкінці курсу проходьте фінальний тест, щоб підвердити ваші здобуті
          знання та навички та отримуйте сертифіакт від TanPoPo про успішне
          проходження обраного курсу!
        </Typography>
      </ContentCard>

      <StartEducationSensei />
    </main>
  );
}
