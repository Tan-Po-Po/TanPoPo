export const generateLiqpayLink = (data: string, signature: string) => {
  return `https://www.liqpay.ua/api/3/checkout?data=${data}&signature=${signature}`;
};