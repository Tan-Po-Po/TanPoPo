"use client";
import { ContentCard, Typography, Advantages } from "@/components";
import cl from "./page.module.scss";
import Image from "next/image";
import { getIconArtSrc } from "@/helpers";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormCode, IPromoCodeInput } from "@/components/formCode/formCode";
import { toast } from "react-toastify";
import { setLibraryKeyToCookies, validateKey } from "../actions";
import Link from "next/link";

const Password = () => {
  const formReturn = useForm({ defaultValues: { code: "" } });

  const onSubmit: SubmitHandler<IPromoCodeInput> = async (data) => {
    const isKeyValid = await validateKey(data.code);
    if (!isKeyValid) {
      toast("Ключ не підходить");
      formReturn.reset();
      return;
    }
    setLibraryKeyToCookies(data.code);
  };

  return (
    <div className={cl.password}>
      <section className={cl.formBlock}>
        <div className={cl.left}>
          <Typography variant="h6" className={cl.caption}>
            Вивчай японську разом з нами та отримуй <br /> <b>повний доступ</b>{" "}
            до Бібліотеки TanPoPo!
          </Typography>

          <ContentCard width="509px">
            <Typography variant="h5">Ключ до Бібліотеки TanPoPo</Typography>
            <Image
              alt=""
              src={getIconArtSrc("lock")}
              width={300}
              height={500}
              style={{ width: "70px", height: "auto" }}
            />

            <FormCode
              formReturn={formReturn}
              label="Введіть ключ сюди!"
              onSubmit={onSubmit}
              inputClassName={cl.input}
            />
            <Typography variant="body2">
              Ти можеш знайти ключ на платформі нашої школи у своєму{" "}
              <Link
                href={""}
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                {" "}
                Особистому Кабінеті
              </Link>{" "}
              учня!
            </Typography>
          </ContentCard>
        </div>
        <div className={cl.right}>
          <Image
            alt=""
            src="/images/library.png"
            width={541}
            height={541}
            style={{
              maxWidth: "541px",
              width: "100%",
              height: "auto",
              minWidth: "320px",
            }}
          />
        </div>
      </section>

      <Advantages />
    </div>
  );
};
export default Password;
