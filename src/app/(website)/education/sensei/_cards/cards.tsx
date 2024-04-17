"use client";
import { ContentCard, Typography, Carousel } from "@/components";
import { getIconArtSrc, getValidClassNames } from "@/helpers";
import Image from "next/image";
import cl from "./cards.module.scss";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = {
  className?: string;
};

const Cards: React.FC<Props> = ({ className }) => {
  const { width } = useWindowSize();
  const renderCarousel = width! < 1000;

  return (
    <div className={getValidClassNames(cl.cards, className)}>
      <Carousel
        dots={true}
        slidesToShow={1}
        arrows={false}
        renderCarousel={renderCarousel}
        infinite={false}
        autoplay
        autoplaySpeed={3000}
      >
        <ContentCard className={cl.slide}>
          <Typography variant="h6">Панорамна Методика</Typography>
          <Image
            src={getIconArtSrc("mountain2")}
            alt="Mountains art"
            width={115}
            height={70}
          />
          <div>
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
          </div>
        </ContentCard>

        <ContentCard className={cl.slide}>
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

        <ContentCard className={cl.slide}>
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
      </Carousel>
    </div>
  );
};

export { Cards };
