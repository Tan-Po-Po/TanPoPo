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
    isDepartmentDelivery,
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
    price: totalPrice.final,
    date:
      date.toLocaleDateString("uk", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        timeZone: "Europe/Kiev",
      }) +
      ` (${date.toLocaleTimeString("uk", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Kiev",
      })})`,
    status: "Початковий",
    goods,
    fullPrice: `${totalPrice.original}\n${totalPrice.final}`,
    promoCode: promoCode ? `${promoCode?.code}(-${promoCode?.perCent}%)` : "",

    name,
    surname,
    phone,
    email,
    howToContact,

    address: label && region ? `${label} / ${region}` : "",
    delivery: isDepartmentDelivery ? department : address,
    comment,
    payment: orderData.payAfter ? "післяоплата" : "онлайн",
  };
};
