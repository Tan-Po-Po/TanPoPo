import ContentLoader from "react-content-loader";

const ShopPartnerSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={385}
    height={820}
    viewBox="0 0 385 820"
    backgroundColor="#d6d6d6"
    foregroundColor="#fde543"
    {...props}
    style={{marginTop: "-80px"}}
  >
    <rect x="0" y="805" rx="0" ry="0" width="385" height="2" /> 
    <rect x="0" y="100" rx="0" ry="0" width="385" height="2" /> 
    <rect x="383" y="100" rx="0" ry="0" width="2" height="705" /> 
    <rect x="0" y="100" rx="0" ry="0" width="2" height="705" /> 
    <rect x="75" y="70" rx="10" ry="10" width="230" height="60" /> 
    <circle cx="73" cy="205" r="48" /> 
    <rect x="144" y="187" rx="0" ry="0" width="180" height="31" /> 
    <rect x="42" y="295" rx="0" ry="0" width="300" height="15" /> 
    <rect x="42" y="315" rx="0" ry="0" width="300" height="15" /> 
    <rect x="42" y="335" rx="0" ry="0" width="300" height="15" /> 
    <rect x="26" y="389" rx="10" ry="10" width="147" height="147" /> 
    <rect x="202" y="389" rx="10" ry="10" width="147" height="147" /> 
    <rect x="26" y="546" rx="10" ry="10" width="147" height="147" /> 
    <rect x="202" y="546" rx="10" ry="10" width="147" height="147" /> 
    <rect x="26" y="719" rx="10" ry="10" width="69" height="20" /> 
    <rect x="106" y="718" rx="10" ry="10" width="130" height="20" /> 
    <rect x="250" y="719" rx="10" ry="10" width="95" height="20" /> 
    <rect x="26" y="754" rx="10" ry="10" width="120" height="20" /> 
    <rect x="162" y="754" rx="10" ry="10" width="120" height="20" /> 
    <rect x="297" y="754" rx="10" ry="10" width="50" height="20" /> 
    <rect x="75" y="795" rx="10" ry="10" width="235" height="20" /> 
    <rect x="42" y="275" rx="0" ry="0" width="300" height="15" />
  </ContentLoader>
);

export { ShopPartnerSkeleton };
