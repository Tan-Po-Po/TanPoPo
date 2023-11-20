import Image from "next/image";
import { ContentCard, Typography } from "..";
import cl from "./advantages.module.scss";
import { textContent } from "./textContent";

const Advantages = () => {
  const gradient =
    "linear-gradient(91deg, rgba(255, 156, 156, 0.75) 0%, rgba(255, 239, 156, 0.75) 28.13%, rgba(156, 219, 255, 0.75) 71.35%, rgba(255, 156, 233, 0.75) 100%)";
  return (
    <main className={cl.advantagesMain}>
      <div className={cl.header}>
        <div className={cl.number}>6</div>
        <div className={cl.text}>
          <div className={cl.line1}>додаткових переваг</div>
          <div className={cl.line2}>нашого навчання!</div>
        </div>
      </div>

      <ContentCard width="fit-content" cardBgColor={gradient}>
        <Typography variant="body1">{textContent.title}</Typography>
      </ContentCard>

      <div className={cl.cards}>
        {textContent.cards.map((card, i) => (
          <ContentCard
            width="362px"
            key={i}
            index={i + 1}
            indexBgColor={card.indexBg}
            className={cl.card}
          >
            <Typography variant="h6">{card.title}</Typography>
            <Image
              alt=""
              src={card.image}
              width={500}
              height={300}
              style={{ width: "auto", maxHeight: "100px" }}
            />
            <Typography variant="body2">{card.caption}</Typography>
          </ContentCard>
        ))}
      </div>
    </main>
  );
};

export default Advantages;
