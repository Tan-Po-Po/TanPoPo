import { ContentCard } from "@/components";
import cl from "./authorContentCards.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getValidClassNames } from "@/helpers";

interface Props {
  links: string[];
  images: string[];
}

export const AuthorContentCards: React.FC<Props> = ({ links, images }) => {
  return (
    <div className={cl.cards}>
      <Link href={links[0]} target="_blank" className={cl.left}>
        <Card image={images[0]} />
      </Link>
      <Link href={links[1]} target="_blank" className={cl.center}>
        <Card image={images[1]} />
      </Link>
      <Link href={links[2]} target="_blank" className={cl.right}>
        <Card image={images[2]} />
      </Link>
    </div>
  );
};

function Card({ image, className }: { image: string; className?: string }) {
  return (
    <ContentCard
      width="169px"
      className={getValidClassNames(cl.card, className)}
    >
      <Image
        alt="Author content"
        src={image}
        quality={100}
        width={360}
        height={680}
        style={{ width: "100%", height: "100%" }}
      />
    </ContentCard>
  );
}
