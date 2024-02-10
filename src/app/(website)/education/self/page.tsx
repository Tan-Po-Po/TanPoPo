"use client";
import { ContentCard, Typography, StartSelfEducation, DialogGallery } from "@/components";
import { getIconArtSrc } from "@/helpers";
import { useAppDispatch } from "@/redux/hooks";
import { openGalleryDialog } from "@/redux/slices/galleryDialog/galleryDialogSlice";
import Image from "next/image";
import PlayButton from "public/icons/playButton.svg";
import cl from "./page.module.scss";
import Link from "next/link";


export default function Page() {
  const dispatch = useAppDispatch();
  return (
    <main className={cl.main}>
       <DialogGallery />
       
      <div className={cl.header}>
        <Typography variant="h3">Освітня програма</Typography>
        <Typography variant="h6">для самостійного навчання</Typography>
      </div>

      <div
        className={cl.video}
        onClick={() =>
          dispatch(
            openGalleryDialog({
              type: "video",
              src: "https://www.youtube.com/watch?v=8ypRvNZhocU",
            })
          )
        }
      >
        <Image
          src="/images/selfEducation.jpg"
          alt="Japanese courses"
          width={970}
          height={550}
        />
        <div className={cl.title}>Курси для самостійного навчання.</div>
        <PlayButton className={cl.playBtn} />
      </div>

      <div className={cl.courseTypes}>
        <div className={cl.type}>
          <ContentCard
            className={cl.typeCard}
            cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #D6FFD5 100%)"
          >
            <Typography variant="h6">Аудіокурси</Typography>
            <Image
              src={getIconArtSrc("headphones")}
              alt="Mountains art"
              width={68}
              height={70}
            />
            <Typography variant="body2">
              Можливість розвивати гарні навички слухача японської мови в
              будь-якому улюбленому для Вас місці стане легко та комфортно!
              Вивчати мову просто слухаючи - як ніколи актуально!
            </Typography>
          </ContentCard>

          <div className={cl.line}></div>

          <ContentCard
            className={cl.typeList}
            cardBgColor="linear-gradient(180deg, #D6FFD5 0%, rgba(214, 255, 213, 0.00) 100%)"
          >
            <Typography variant="subtitle1">
              • багатогранні практичні ситуації для орієнтування в розмовному
              просторі з японцями
            </Typography>
            <Typography variant="subtitle1">
              • круті лайфхаки для впевненої вимови японською мовою
            </Typography>
            <Typography variant="subtitle1">
              • завдання різного формату для інтуїтивного розвитку правильних
              реакцій у співбесідах
            </Typography>
            <Typography variant="subtitle1">
              • ознайомлення з психологією японського менталітету
            </Typography>
            <Typography variant="subtitle1">
              • мегазручна подача нового вокабуляру для вивчення та повторення
              слів!
            </Typography>
          </ContentCard>
        </div>

        <div className={cl.type}>
          <ContentCard
            className={cl.typeCard}
            cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #FFDCDC 100%)"
          >
            <Typography variant="h6">Відеокурси</Typography>
            <Image
              src={getIconArtSrc("camera")}
              alt="Laptop art"
              width={86}
              height={65}
            />
            <Typography variant="body2">
              Повноцінні відеолекції на будь-який смак з Тетяною-сенсей для
              улюбленців самостійного навчання! Саморозвиток з TanPoPo не просто
              надихає та мотивує, але й дає чудові результати!
            </Typography>
          </ContentCard>
          <div className={cl.line}></div>
          <ContentCard
            className={cl.typeList}
            cardBgColor="linear-gradient(180deg, #FFDCDC 0%, rgba(255, 220, 220, 0.00) 100%)"
          >
            <Typography variant="subtitle1">
              • креативні техніки для запамʼятовування навчального матеріалу
            </Typography>
            <Typography variant="subtitle1">
              • відеоуроки не лише з теорією, а й з важливою практичною частиною
            </Typography>
            <Typography variant="subtitle1">
              • найкраще тренування ієрогліфіки
            </Typography>
            <Typography variant="subtitle1">
              • круті анімації та візуальне оформлення відеокурсу
            </Typography>
            <Typography variant="subtitle1">
              • не потрібно бути привʼязаним до графіку, тривалий доступ до всіх
              матеріалів курсу
            </Typography>
            <Typography variant="subtitle1">
              • тести для самоперевірки та визначення рівня підготовки до
              наступних відеозаписів та уроків!
            </Typography>
          </ContentCard>
        </div>

        <div className={cl.type}>
          <ContentCard
            className={cl.typeCard}
            cardBgColor="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 35.94%, #F7E5FF 100%)"
          >
            <Typography variant="h6">Книжкові мінікурси</Typography>
            <Image
              src={getIconArtSrc("book1")}
              alt="Tori gate art"
              width={82}
              height={60}
            />
            <Typography variant="body2">
              Унікальні мініісторії японською мовою від кріейторів TanPoPo, які
              дозволять цікаво та з користю присвятити час читанню. Кайфова
              тематика не змусить тебе нудьгувати, запевняємо!
            </Typography>
          </ContentCard>
          <div className={cl.line}></div>
          <ContentCard
            className={cl.typeList}
            cardBgColor="linear-gradient(180deg, #F7E5FF 0%, rgba(247, 229, 255, 0.00) 100%)"
          >
            <Typography variant="subtitle1">
              • українсько-японська адаптація для засвоєння нового матеріалу
            </Typography>
            <Typography variant="subtitle1">
              • ефективні завдання для швидкої самоперевірки з ключами
            </Typography>
            <Typography variant="subtitle1">
              • завжди неочікувані сюжети та розгортання подій
            </Typography>
            <Typography variant="subtitle1">
              • зручний трекер слів за алфавітом для швидкого ознайомлення з
              новою лексикою
            </Typography>
            <Typography variant="subtitle1">
              • чарівний дизайн та кольорові ілюстрації, які закохають Вас у цей
              продукт
            </Typography>
          </ContentCard>
        </div>
      </div>

      <ContentCard className={cl.description} width="970px">
        <div className={cl.header}>
          <Typography variant="body1">Загальні аспекти</Typography>
          <Typography variant="h6">самостійних курсів:</Typography>
        </div>
        <Image
          src={getIconArtSrc("clock")}
          alt="Clock art"
          width={150}
          height={115}
        />

        <div className={cl.index}>
          <div className={cl.line}></div>
          <Typography variant="body1" className={cl.number}>
            1
          </Typography>
        </div>
        <Typography variant="body1" className={cl.text}>
          Надважливо практикувати вивчений матеріал, тому до кожного уроку
          самостійних курсів на навчальній платформі будуть прикріплені тести
          для самопервірки та завдання для тренування нових знань!
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
          Ми застосовуємо дієву техніку “Anki” для запамʼятовування лексичних та
          граматичних структур! Таким чином усі матеріали подаються чітко,
          зручно та структуровано для швидкого повторення слів та граматики!
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
          Усі навчальні матеріали по обраному курсу будуть зберігатися на
          навчальній платформі в Особистому Кабінеті учня протягом всього&nbsp;
          <Link href="/self-education">
            Навчального Періоду
          </Link>
          . Тому ви зможете повторювати весь матеріал та переглядати улюблені
          лекції досхочу!
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
        <Typography variant="body2">
          Наприкінці курсу проходьте фінальний тест, щоб підвердити ваші здобуті
          знання та навички та отримуйте сертифікат від TanPoPo про успішне
          проходження обраного курсу! А за допомогою унікального QR-коду, що
          знаходиться на сертифікаті можна в будь-який момент перевірити його
          автентичність, навіть після завершення вашого навчання!
        </Typography>
      </ContentCard>

      <StartSelfEducation />
    </main>
  );
}
