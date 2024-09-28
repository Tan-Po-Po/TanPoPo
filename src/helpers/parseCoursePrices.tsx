import { ICourse } from "@/models/Course";
import { Typography } from "../components/typography/typography";

export const parseCoursePrices = (
  price: {
    lessons: number;
    price: number;
    discountPrice?: number;
    link: string;
  },
  courseType?: ICourse["type"]
) => {
  const { lessons, discountPrice, link } = price;
  if (courseType && ["book", "audio", "video"].includes(courseType)) {
    return {
      labelWhenSelected: (
        <Typography
          variant="body2"
          style={{
            whiteSpace: "nowrap",
            textAlign: "start",
          }}
        >
          <span
            style={{
              color: discountPrice ? "#ff1c1c" : "black",
              fontWeight: "800",
              fontSize: "1.15rem",
              marginLeft: "0px",
            }}
          >
            {discountPrice ? discountPrice : price.price}грн
          </span>

          {discountPrice && (
            <span
              style={{
                color: "rgb(127 113 113)",
                marginLeft: "8px",
                fontSize: "1.04rem",
                textDecoration: "line-through",
                textDecorationColor: "#938989",
                textDecorationThickness: "2px",
              }}
            >
              {price.price}грн
            </span>
          )}
        </Typography>
      ),
      value: JSON.stringify({
        lessons,
        price: discountPrice || price.price,
      }),
      // value: { lessons, price: discountPrice || price.price },
      label: (
        <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
          <span
            style={{
              color: discountPrice ? "#ff1c1c" : "black",
              fontWeight: "800",
              fontSize: "1.1rem",
            }}
          >
            {discountPrice ? discountPrice : price.price}грн
          </span>

          {discountPrice && (
            <span
              style={{
                color: "rgb(127 113 113)",
                marginLeft: "5px",
                fontSize: "1rem",
                textDecoration: "line-through",
                textDecorationColor: "#938989",
                textDecorationThickness: "2px",
              }}
            >
              {price.price}грн
            </span>
          )}
        </Typography>
      ),
      link,
    };
  }

  return {
    labelWhenSelected: `${lessons} ${lessons < 5 ? "уроки" : "уроків"} (${
      price.price
    }грн)`,
    value: `${lessons} ${lessons < 5 ? "уроки" : "уроків"} (${
      price.price
    } грн)`,
    label: (
      <Typography variant="body2">
        {lessons} {lessons < 5 ? "уроки" : "уроків"} ({price.price}
        грн){" "}
        <span
          style={{
            color: "rgba(163, 163, 163, 1)",
            marginLeft: "5px",
            fontSize: "0.9rem",
          }}
        >
          ({Math.round(price.price / lessons)}грн)
        </span>
      </Typography>
    ),
    link,
  };
};
