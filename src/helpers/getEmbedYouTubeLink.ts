export const getEmbedYouTubeLink = (defaultLink: string) => {
  const id = defaultLink.split("=")[1];
  return `https://www.youtube.com/embed/${id}`;
};
