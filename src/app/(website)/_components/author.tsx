import cl from "../page.module.scss";
import { IWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Typography } from "@/components";
import Image from "next/image";

export function Author({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet } = windowMatchMedia;

  if (isTablet) {
    return (
      <section className={cl.author}>
        <div className={cl.nameImageWrapper}>
          <div className={cl.text}>
            <Typography variant="h5">Авторська школа</Typography>
            <Typography variant="h4" align="center">
              Тетяни Селіверстової
            </Typography>
          </div>
          <Image
            className={cl.photo}
            src="/images/homeAuthor.png"
            alt="Тетяна Селіверстова"
            width={350}
            height={280}
            style={{ maxWidth: "300px", width: "100%", height: "auto" }}
          />
        </div>
        <Typography variant="body1" className={cl.about} align="justify">
          Після <b>2 років життя в Японії</b>, навчання в КНУ ім. Тараса
          Шевченка, Кіотському педагогічному університеті{" "}
          <span className={cl.jpn}>(京都教育大学)</span>, університеті Рюкю
          Дайґаку <span className={cl.jpn}>(琉球大学)</span> на острові Окінава,
          офіційно отримавши найвищий рівень японської мови <b>N1</b> у свої 25
          років, я вирішила не зупинятись та відкрити найкращу в Україні школу з
          вивчення японської мови - <b>TanPoPo!</b> І я безмежно вдячна, що можу
          поділитись своїми знаннями разом з вами!
        </Typography>
      </section>
    );
  }

  return (
    <section className={cl.author}>
      <div className={cl.text}>
        <Typography
          variant="h4"
          style={{ fontSize: "33px", lineHeight: "33px" }}
        >
          Авторська школа
        </Typography>
        <Typography
          variant="h3"
          style={{ fontSize: "40px", lineHeight: "45px" }}
        >
          Тетяни Селіверстової
        </Typography>
        <Typography
          variant="body1"
          className={cl.about}
          style={{
            marginTop: "42px",
            lineHeight: "23px",
            fontSize: "19px",
          }}
        >
          Після <b>2 років життя в Японії</b>, навчання в КНУ ім. Тараса
          Шевченка, Кіотському педагогічному університеті{" "}
          <span className={cl.jpn}>(京都教育大学)</span>, університеті Рюкю
          Дайґаку <span className={cl.jpn}>(琉球大学)</span> на острові Окінава,
          офіційно отримавши найвищий рівень японської мови <b>N1</b> у свої 25
          років, я вирішила не зупинятись та відкрити найкращу в Україні школу з
          вивчення японської мови - <b>TanPoPo!</b> І я безмежно вдячна, що можу
          поділитись своїми знаннями разом з вами!
        </Typography>
      </div>

      <Image
        className={cl.photo}
        src="/images/homeAuthor.png"
        alt="Тетяна Селіверстова"
        width={350}
        height={280}
        style={{ maxWidth: "350px", width: "100%", height: "auto" }}
      />
    </section>
  );
}
