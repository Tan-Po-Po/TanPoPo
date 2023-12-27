export const getEmbedYouTubeLink = (
  defaultLink: string,
  autoplay?: "0" | "1" | null
) => {
  const split = defaultLink.split("=")[1].split("&");

  const id = split[0];

  return `https://www.youtube.com/embed/${id}?autoplay=${autoplay || "0"}`;
};
