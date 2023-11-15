import { socialLinks } from "@/config/config";
import { IconLink } from "@/components";

export function getSocialIconsLinks(height?: string) {
  const icons = [];
  for (const key in socialLinks) {
    icons.push(<IconLink icon={key} key={key} height={height} />);
  }
  return icons;
}
