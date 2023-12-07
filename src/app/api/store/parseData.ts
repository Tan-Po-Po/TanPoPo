import { Data } from "./type";

export const parseData = (orderData: Data) => {
  const {name, surname, phone, email} = orderData
  const date = new Date().toLocaleDateString();
  
  return { 
    date,
    payment: "вид оплати", // ( тут просто писати слово: "реквізити" або "післяоплата" )
    goods: "товари", // назва х к-сть, назва х к-сть
    price: "сума", // 2000 1900
    promocode: "code", //abc123(-10%) 

    name,
    surname,
    phone,
    email,
    howToContact: "Email, Viber, SMS, Telegram",

    address: "",
    delivery: "",
    comment: "",
  };
};
