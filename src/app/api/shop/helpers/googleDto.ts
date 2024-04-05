import { Data } from "../type";

export const googleDto = (orderData: Data) => {
  const {
    name,
    surname,
    phone,
    email,
    items,
    promoCode,
    region,
    department,
    address,
    comment,
    totalPrice,
  } = orderData;
  const { label } = orderData.city;
  const date = new Date();

  const howToContact = `${orderData.telegram ? "Телеграм, " : ""}${
    orderData.viber ? "Вайбер, " : ""
  }${orderData.sms ? "SMS, " : ""}${orderData.onlyEmail ? "Email" : "Email"}`;

  const goods = items
    .map((item, index) => {
      return `${index + 1}) ${item.name.replace("\n", " ")} - ${item.label} x ${
        item.amount
      }`;
    })
    .join("\n");

  return {
    date: date.toLocaleDateString("uk") + ` (${date.toLocaleTimeString("uk")})`,
    payment: orderData.payAfter ? "післяоплата" : "онлайн",
    goods,
    price: `${totalPrice.original}\n${totalPrice.final}`,
    promoCode: promoCode ? `${promoCode?.code}(-${promoCode?.perCent}%)` : "",

    name,
    surname,
    phone,
    email,
    howToContact,

    address: label && region ? `${label} / ${region}` : "",
    delivery: department || address,
    comment,
  };
};
