import { Typography } from "../components/typography/typography";

export const parseCoursePrices = (
  price: {
    lessons: number;
    price: number;
    link: string;
  },
  courseType?: string
) => {
  return {
    labelWhenSelected: `${price.lessons} ${
      price.lessons < 5 ? "уроки" : "уроків"
    } (${price.price}грн)`,
    value: `${price.lessons} ${price.lessons < 5 ? "уроки" : "уроків"} (${
      price.price
    } грн)`,
    label:
      courseType === "book" ? (
        <Typography
          variant="body2"
          style={{ whiteSpace: "nowrap", marginLeft: "-10px" }}
        >
          {price.lessons} {price.lessons < 5 ? "посібника" : "посібників"} (
          {price.price}
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
      ) : (
        <Typography variant="body2">
          {price.lessons} {price.lessons < 5 ? "уроки" : "уроків"} (
          {price.price}
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
