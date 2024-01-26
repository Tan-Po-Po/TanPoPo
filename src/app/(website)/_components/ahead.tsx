import cl from "../page.module.scss";
import { IWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { Typography } from "@/components";
import Image from "next/image";

export function Ahead({
  windowMatchMedia,
}: {
  windowMatchMedia: IWindowMatchMedia;
}) {
  const { isTablet } = windowMatchMedia;

  if (isTablet) {
    return (
      <section className={cl.ahead}>
        <div className={cl.imageTablet}>
          <Image
            className={cl.photo}
            src="/images/homeAhead.png"
            alt="Girl image"
            width={300}
            height={310}
          />
          <Typography variant="h4" align="center">
            Завжди,
            <br />
            попереду!
          </Typography>
        </div>
        <div className={cl.text}>
          <Typography variant="body1" align="justify">
            Наша команда TanPoPo невпинно працює над удосконаленням програми,
            враховуючи останні тенденції та досягнення в галузі швидкіскного
            вивчення мови. Саме тому ми впроваджуємо інноваційні методики,
            використовуємо зручну єдину електронну навчальну плафторму,
            розробляємо цікаві інтерактивні матеріали та завдання, щоб зробити
            процес навчання ще цікавішим та ефективнішим!
          </Typography>
        </div>
      </section>
    );
  }

  return (
    <section className={cl.ahead}>
      <Image
        className={cl.photo}
        src="/images/homeAhead.png"
        alt="Girl image"
        width={300}
        height={310}
      />
      <div className={cl.text}>
        <Typography variant="h2">Завжди попереду!</Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "19px", lineHeight: "21px" }}
          align="justify"
        >
          Наша команда TanPoPo невпинно працює над удосконаленням програми,
          враховуючи останні тенденції та досягнення в галузі швидкіскного
          вивчення мови. Саме тому ми впроваджуємо інноваційні методики,
          використовуємо зручну єдину електронну навчальну плафторму,
          розробляємо цікаві інтерактивні матеріали та завдання, щоб зробити
          процес навчання ще цікавішим та ефективнішим!
        </Typography>
      </div>
    </section>
  );
}
