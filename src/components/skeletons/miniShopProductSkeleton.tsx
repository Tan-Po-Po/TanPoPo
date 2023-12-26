import ContentLoader from "react-content-loader";

const MiniShopProductSkeleton = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={270}
      viewBox="0 0 280 270"
      backgroundColor="#d6d6d6"
      foregroundColor="#fde543"
      {...props}
    >
      <rect x="65" y="190" rx="10" ry="10" width="150" height="60" />
      <rect x="100" y="118" rx="30" ry="30" width="80" height="60" />
      <rect x="20" y="42" rx="0" ry="0" width="240" height="60" />
      <rect x="90" y="0" rx="10" ry="10" width="100" height="25" />
      <rect x="0" y="10" rx="0" ry="0" width="2" height="260" />
      <rect x="278" y="10" rx="0" ry="0" width="2" height="260" />
      <rect x="0" y="10" rx="0" ry="0" width="280" height="2" />
      <rect x="0" y="268" rx="0" ry="0" width="280" height="2" />
    </ContentLoader>
  );
};

export { MiniShopProductSkeleton };
