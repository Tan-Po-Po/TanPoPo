export const getEmbedYouTubeLink = (defaultLink: string) => {
  const split = defaultLink.split("=")[1].split("&");

  const id = split[0];

  return `https://www.youtube.com/embed/${id}`;
};
