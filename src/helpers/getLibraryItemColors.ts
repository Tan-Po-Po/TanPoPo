export function getColor(colors: string | undefined) {
  if (!colors) {
    return `linear-gradient(180deg, #FFDADA 0%, #FFF1E0 100%)`;
  }

  const color = colors.split(" ");

  if (color.length > 1) {
    return `linear-gradient(180deg, ${color[0]} 0%, ${color[1]} 100%)`;
  }

  return colors;
}
