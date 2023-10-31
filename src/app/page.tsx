import { Typography, ContentCard, Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import cl from "./page.module.scss";

export default function Home() {
  return (
    <main className={cl.main}>
      <Typography variant="h5" className={cl.header}>
        {" "}
        <Typography variant="h4">TanPoPo</Typography> - найкращий досвід
        вивчення японської мови!
      </Typography>
      <Image
        src="/images/homePage.png"
        alt="Home page"
        width={940}
        height={653}
      />
      <Typography variant="h6" className={cl.about}>
        Це місце для всіх, хто хоче вдосконалити свої знання японської мови!
        Наша навчальна онлайн-платформа забезпечує зручне, інтерактивне
        середовище для вивчення мови у спосіб, який найкраще підходить для
        кожної людини.
      </Typography>

      <ContentCard width="1132px" className={cl.opportunities}>
        <Typography variant="h5">
          Безмежні можливості разом з TanPoPo!
        </Typography>
        <Typography variant="body2">
          Лише відбірні та ефективні матеріали для вивчення японської мови:
        </Typography>

        <div className={cl.opportunityCards}>
          <ContentCard
            width="283px"
            height="260px"
            className={cl.opportunityCard}
          >
            <Image
              src="/icons/art/temple.png"
              alt="Temple icon"
              width={96}
              height={95}
            />
            <div>
              <Typography variant="h3">20+</Typography>
              <Typography variant="body2">
                навчальних курсів на вибір для усіх рівнів та форматів навчання!
              </Typography>
            </div>
          </ContentCard>

          <ContentCard
            width="300px"
            height="290px"
            className={cl.opportunityCard}
          >
            <Image
              src="/icons/art/clock.png"
              alt="Temple icon"
              width={137}
              height={106}
            />
            <Typography variant="h3">
              480+
              <Typography variant="body2">
                унікальних уроків на нашій інтерактивній платформі для
                бездоганного вивчення японської мови!
              </Typography>
            </Typography>
          </ContentCard>

          <ContentCard
            width="283px"
            height="260px"
            className={cl.opportunityCard}
          >
            <Image
              src="/icons/art/book1.png"
              alt="Temple icon"
              width={107}
              height={76}
            />
            <Typography variant="h3">
              160+
              <Typography variant="body2">
                додаткових корисних матеріалів в нашій Бібліотеці TanPoPo!
              </Typography>
            </Typography>
          </ContentCard>
        </div>
      </ContentCard>

      <section className={cl.author}>
        <div className={cl.text}>
          <Typography variant="h5">Авторська школа</Typography>
          <Typography variant="h4">Тетяни Селіверстової</Typography>
          <Typography variant="body1" className={cl.about}>
            Після 2 років життя в Японії, навчання в КНУ ім. Тараса Шевченка,
            Кіотському педагогічному університеті (京都教育大学), університеті
            Рюкю Дайґаку (琉球大学) на острові Окінава, офіційно отримавши
            найвищий рівень японської мови N1 у свої 25 років, я вирішила не
            зупинятись та відкрити найкращу в Україні школу з вивчення японської
            мови - TanPoPo! І я безмежно вдячна, що можу поділитись своїми
            знаннями разом з вами!
          </Typography>
        </div>

        <Image
          className={cl.photo}
          src="/images/homeAuthor.png"
          alt="Тетяна Селіверстова"
          width={350}
          height={280}
        />
      </section>

      <section className={cl.links}>
        <ContentCard className={cl.link}>
          <Typography variant="body2">
            Унікальні матеріали для ще цікавішого та ефекти-внішого вивчення
            мови:
          </Typography>
          <Image
            src="/icons/art/diamond.png"
            alt="Diamond icon"
            width={87}
            height={77}
          />
          <Button className={cl.button} variant="outlined" icon="video">
            Авторський Контент
          </Button>
        </ContentCard>

        <ContentCard className={cl.link}>
          <Typography variant="body2">
            Наша команда з якою ми разом формуємо якісний процес навчання:
          </Typography>
          <Image
            src="/icons/art/team.png"
            alt="Team icon"
            width={113}
            height={91}
          />
          <Button className={cl.button} variant="outlined" icon="person">
            Команда TanPoPo
          </Button>
        </ContentCard>

        <ContentCard className={cl.link}>
          <Typography variant="body2">
            Дізнайтеся, що кажуть наші учні про їхній досвід у школі TanPoPo:
          </Typography>
          <Image
            src="/icons/art/lamp.png"
            alt="Lamp icon"
            width={75}
            height={84}
          />
          <Button className={cl.button} variant="outlined" icon="personSpeak">
            Відгуки про Школу
          </Button>
        </ContentCard>
      </section>

      <section className={cl.ahead}>
        <Image
          className={cl.photo}
          src="/images/homeAhead.png"
          alt="Girl image"
          width={300}
          height={310}
        />
        <div className={cl.text}>
          <Typography variant="h4">Завжди попереду!</Typography>
          <Typography variant="body1">
            Наша команда TanPoPo невпинно працює над удосконаленням програми,
            враховуючи останні тенденції та досягнення в галузі швидкіскного
            вивчення мови. Саме тому ми впроваджуємо інноваційні методики,
            використовуємо зручну єдину електронну навчальну плафторму,
            розробляємо цікаві інтерактивні матеріали та завдання, щоб зробити
            процес навчання ще цікавішим та ефективнішим!
          </Typography>
        </div>
      </section>

      <ContentCard width="1122px" className={cl.formats}>
        <Typography variant="h5">Формати Навчання:</Typography>
        <Typography variant="body1">
          Наша освітня програма пропонує усі можливі формати вивчення японської
          мови, щоб кожний зміг обрати те, що йому імпонує найбільше!
        </Typography>

        <div className={cl.cards}>
          <ContentCard className={cl.card} width="283px" height="235px">
            <Image
              src="/icons/art/girlStudent.png"
              alt="Girl student"
              width={91}
              height={107}
            />
            <Typography variant="body2">
              Відеокурси та Аудіокурси для всіх прихильників{" "}
              <Link href="/">самостійного навчання.</Link>
            </Typography>
          </ContentCard>

          <ContentCard className={cl.card} width="300px" height="290px">
            <Image
              src="/icons/art/boyAndGirl.png"
              alt="Boy and girl with laptop"
              width={129}
              height={115}
            />
            <Typography variant="body2">
              <Link href="">Заняття у Міні-групах </Link>
              <br />в живому онлайн-форматі з сенсеєм. З інтерактивним та
              індивідуальним підходом до кожного учня!
            </Typography>
          </ContentCard>

          <ContentCard className={cl.card} width="283px" height="235px">
            <Image
              src="/icons/art/teacher.png"
              alt="Teacher with laptop"
              width={130}
              height={105}
            />
            <Typography variant="body2">
              <Link href="">Індивідуальні заняття</Link>
              <br />в живому онлайн-форматі разом з сенсеєм.
            </Typography>
          </ContentCard>
        </div>
      </ContentCard>

      <section className={cl.courses}>
        <Typography variant="h4">Усі можливі види курсів:</Typography>
        <div className={cl.cards}>
          <ContentCard
            className={cl.card}
            width="511px"
            height="210px"
            label={
              <Link href="">
                <Typography variant="h6" className={cl.label1}>
                  Олайн курси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  з сенсеєм
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#A6C4FF, #E8A6FF)"
          >
            <Image
              src="/icons/art/teacher.png"
              alt="Teacher with laptop"
              width={88}
              height={71}
            />
            <Typography variant="body1">
              Для тих, хто полюбляє живе спілкування та навчання разом з сенсеєм
              онлайн!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="511px"
            height="210px"
            label={
              <Link href="">
                <Typography variant="h6" className={cl.label1}>
                  Відеокурси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  для самостійного вивчення
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#FFFA8B, #FF6F6F)"
          >
            <Image
              src="/icons/art/camera.png"
              alt="Camera"
              width={86}
              height={65}
            />
            <Typography variant="body1">
              Навчайся у власному темпі за допомогою ефективних відеокурсів!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="511px"
            height="210px"
            label={
              <Link href="">
                <Typography variant="h6" className={cl.label1}>
                  Аудіокурси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  для самостійного вивчення
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#FDFF87, #6CFAA5)"
          >
            <Image
              src="/icons/art/headphones.png"
              alt="Headphones"
              width={68}
              height={70}
            />
            <Typography variant="body1">
              Чудовий спосіб вивчати японську мову просто слухаючи!
            </Typography>
          </ContentCard>

          <ContentCard
            className={cl.card}
            width="511px"
            height="210px"
            label={
              <Link href="">
                <Typography variant="h6" className={cl.label1}>
                  Книжкові мінікурси
                </Typography>
                <Typography variant="body1" className={cl.label2}>
                  для самостійного вивчення
                </Typography>
              </Link>
            }
            labelPosition="top"
            labelBgColor="linear-gradient(#FFDDA9, #E8B8FF)"
          >
            <Image
              src="/icons/art/book1.png"
              alt="Books"
              width={82}
              height={60}
            />
            <Typography variant="body1">
              Захоплюючі історії, інтерактивні завдання та тести на перевірку!
            </Typography>
          </ContentCard>
        </div>
      </section>

      <section className={cl.personalCabinet}>
        <Typography variant="h4">Заходь у свій Особистий Кабінет!</Typography>
        <Typography variant="h6">
          Усе навчання на єдиній інтерактивній платформі.
        </Typography>
        <Image
          src="/images/homeCabinet.png"
          width={966}
          height={438}
          alt="Boy with a laptop"
        />
      </section>

      <section className={cl.cabinetCards}>
        <ContentCard width="376px" height="343px">
          <Image
            src="/icons/art/house.png"
            alt="House"
            width={106}
            height={79}
          />
          <ul>
            <li>навчальні матеріали, презентації, посібники та інше;</li>
            <li>оголошення, рекомендації, комунікація з нашою школою;</li>
            <li>персональні промокоди та знижки на круті товари;</li>
            <li>ключ до Бібліотеки TanPoPo;</li>
            <li>зручна оплата курсів та уроків!</li>
          </ul>
        </ContentCard>

        <Image src="/icons/plus.svg" alt="Plus" width={30} height={30} />

        <ContentCard width="376px" height="343px">
          <Image
            src="/icons/art/calendar2.png"
            alt="Calendar"
            width={86}
            height={81}
          />
          <ul>
            <li>курси, уроки, власний розклад занять;</li>
            <li>домашні завдання, тести для самоперевірки;</li>
            <li>коментарі від сенсеїв до уроку або по домашній роботі;</li>
            <li>сертифікати від нашої школи;</li>
            <li>навчання з будь-якого девайсу!</li>
          </ul>
        </ContentCard>

        <Image src="/icons/plus.svg" alt="Plus" width={30} height={30} />

        <ContentCard width="376px" height="343px">
          <Image
            src="/icons/art/book1.png"
            alt="Book"
            width={100}
            height={74}
          />
          <ul>
            <li>завантаження навчальних матеріалів до курсу навчання;</li>
            <li>пряма комунікація з вчителем для онлайн-курсів з сенсеєм;</li>
            <li>зручні відеогайди для навігації;</li>
            <li>простий та інтуїтивний інтерфейс платформи;</li>
            <li>та багато іншого!</li>
          </ul>
        </ContentCard>
      </section>

      <ContentCard className={cl.freeCourse} width="840px" height="475px">
        <Typography variant="h4">
          Безкоштовний мінікурс для початківців!
        </Typography>
        <Image
          src="/icons/art/megaPresent.png"
          alt="Gift"
          width={144}
          height={138}
        />
        <Typography variant="body1">
          Скористайтесь всіма перевагами нашого навчання та спробуйте наш
          мінікурс просто зараз! Дізнайтесь більше про те, як розпочати навчання
          на інтерактивній платформі:
        </Typography>
        <Button variant="outlined">Дізнатись більше!</Button>
      </ContentCard>

      <ContentCard className={cl.start} width="1166px">
        <Typography variant="h4">Розпочати навчання - дуже просто!</Typography>
        <div className={cl.cards}>
          <ContentCard
            className={cl.card}
            width="290px"
            height="250px"
            index="1"
            indexBgColor="#CCE0FF"
          >
            <Image
              src="/icons/art/toriGate2.png"
              alt="Tore gate"
              width={96}
              height={96}
            />
            <Typography variant="body1">
              Обирайте навчальний курс за вашим бажанням, відповідним для вас
              рівнем мови та форматом навчання.
            </Typography>
          </ContentCard>

          <Image src="/icons/plus.svg" alt="Plus" width={30} height={30} />

          <ContentCard
            className={cl.card}
            width="290px"
            height="250px"
            index="2"
            indexBgColor="#DFFFD8"
          >
            <Image
              src="/icons/art/honeyJar.png"
              alt="Tore gate"
              width={96}
              height={96}
            />
            <Typography variant="body1">
              Переходьте на сторінку вартості курсів, обирайте формат, к-сть
              уроків та натискайте “Розпочати Навчання”.
            </Typography>
          </ContentCard>

          <Image src="/icons/plus.svg" alt="Plus" width={30} height={30} />

          <ContentCard
            className={cl.card}
            width="290px"
            height="250px"
            index="3"
            indexBgColor="#FFF4CC"
          >
            <Image
              src="/icons/art/tower2.png"
              alt="Tower"
              width={63}
              height={85}
            />
            <Typography variant="body1">
              Ознайомтесь із всією необхідною інформацію стосовно обраного курсу
              та розпочинайте навчання японської мови!
            </Typography>
          </ContentCard>
        </div>
      </ContentCard>

      <section className={cl.moreLinks}>
        <ContentCard className={cl.link} width="375px" height="345px">
          <Typography variant="body1">
            Бажаєте дізнатись детальніше про наші курси, заняття, відеоматеріали
            та багато іншого?
          </Typography>
          <Image
            src="/icons/art/temple.png"
            alt="Temple"
            width={97}
            height={98}
          />
          <Button
            className={cl.button}
            variant="outlined"
            icon="bookPlay"
            style={{ background: "linear-gradient(#CCE0FF1A, #CCE0FF)" }}
          >
            Курси
          </Button>
        </ContentCard>

        <ContentCard className={cl.link} width="375px" height="345px">
          <Typography variant="body1">
            Цікавить вартість курсів? Ми завжди намагаємось давати лише
            привабливі цінові пропозиції!
          </Typography>
          <Image
            src="/icons/art/coinsStack.png"
            alt="Stack of coins"
            width={109}
            height={84}
          />
          <Button
            className={cl.button}
            variant="outlined"
            icon="coinStack"
            style={{ background: "linear-gradient(#DFFFD81A, #DFFFD8)" }}
          >
            Вартість
          </Button>
        </ContentCard>

        <ContentCard className={cl.link} width="375px" height="345px">
          <Typography variant="body1">
            Маєте додаткові запитання? Тут, ми зібрали всю корисну інформацію,
            стосовно нашого навчання!
          </Typography>
          <Image
            src="/icons/art/oldPhone.png"
            alt="Phone"
            width={116}
            height={72}
          />
          <Button
            className={cl.button}
            variant="outlined"
            icon="contact"
            style={{ background: "linear-gradient(#FFF4CC1A, #FFF4CC)" }}
          >
            Контакти
          </Button>
        </ContentCard>
      </section>
    </main>
  );
}
