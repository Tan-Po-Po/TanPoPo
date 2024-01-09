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
      <Link href={links[0]}>
        <Card image={images[0]} className={cl.left} />
      </Link>
      <Link href={links[1]}>
        <Card image={images[1]} className={cl.center} />
      </Link>
      <Link href={links[2]}>
        <Card image={images[2]} className={cl.right} />
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
      <Image alt="" src={image} fill />
    </ContentCard>
  );
}
