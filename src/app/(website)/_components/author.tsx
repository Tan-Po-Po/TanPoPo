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
            style={{ maxWidth: "350px", width: "100%", height: "auto" }}
          />
        </div>
        <Typography
          variant="body1"
          className={cl.about}
          style={{ textAlign: "justify" }}
        >
          Після 2 років життя в Японії, навчання в КНУ ім. Тараса Шевченка,
          Кіотському педагогічному університеті (京都教育大学), університеті
          Рюкю Дайґаку (琉球大学) на острові Окінава, офіційно отримавши
          найвищий рівень японської мови N1 у свої 25 років, я вирішила не
          зупинятись та відкрити найкращу в Україні школу з вивчення японської
          мови - TanPoPo! І я безмежно вдячна, що можу поділитись своїми
          знаннями разом з вами!
        </Typography>
      </section>
    );
  }

  return (
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
        style={{ maxWidth: "350px", width: "100%", height: "auto" }}
      />
    </section>
  );
}
