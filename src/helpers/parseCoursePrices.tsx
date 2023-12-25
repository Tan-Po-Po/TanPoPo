import { Typography } from "../components/typography/typography";
import cl from "./courseCard.module.scss"

export const parseCoursePrices = (
  price: {
    lessons: number;
    price: number;
  },
  index: number
) => {
  return {
    
    labelWhenSelected: `${price.lessons} ${
      index === 0 ? "уроки" : "уроків"
    } (${price.price}грн)`,
    value: `${price.lessons} ${index === 0 ? "уроки" : "уроків"} (${
      price.price
    }грн)`,
    label: (
      <Typography variant="body2">
        {price.lessons} {index === 0 ? "уроки" : "уроків"} (
        {price.price}
        грн){" "}
        <span className={cl.greyText}>
          ({Math.round(price.price / price.lessons)}грн)
        </span>
      </Typography>
    ),
  };
}
