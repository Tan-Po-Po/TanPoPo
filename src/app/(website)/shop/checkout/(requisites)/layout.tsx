import { Divider, Typography } from "@/components";
import cl from "../page.module.scss"

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={cl.checkoutMainResult}>
      <Divider firstRow="Замовлення успішно прийнято!" className={cl.divider} />

      <Typography
        variant="body1"
        style={{ textAlign: "center", fontWeight: "400" }}
      >
        Всю інформацію стосовно вашого замовлення було <br /> щойно надіслано на
        вашу електронну скриньку!
      </Typography>

      <section className={cl.resultBlock}>
        {children}
      </section>

      <Typography variant="h6">Дякуємо, що обрали TanPoPo💛</Typography>
    </main>
  );
}
