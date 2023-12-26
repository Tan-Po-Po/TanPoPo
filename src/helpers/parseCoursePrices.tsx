import { Typography } from "../components/typography/typography";

export const parseCoursePrices = (
  price: {
    lessons: number;
    price: number;
    link: string;
  },
  index: number
) => {
  return {
    labelWhenSelected: `${price.lessons} ${index === 0 ? "уроки" : "уроків"} (${
      price.price
    }грн)`,
    value: `${price.lessons} ${index === 0 ? "уроки" : "уроків"} (${
      price.price
    }грн)`,
    label: (
      <Typography variant="body2">
        {price.lessons} {index === 0 ? "уроки" : "уроків"} ({price.price}
        грн){" "}
        <span
          style={{
            color: "rgba(163, 163, 163, 1)",
            marginLeft: "5px",
            fontSize: "0.9rem",
          }}
        >
          ({Math.round(price.price / price.lessons)}грн)
        </span>
      </Typography>
    ),
    link: price.link,
  };
};
