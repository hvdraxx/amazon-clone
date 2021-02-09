export const numberWithCommas = (randNumber: number): string => {
  return randNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const convertStars = (stars: number): string | undefined => {
  let result = ''
  for (let i = 0; i < stars; i++) {
    result += '⭐'
  }
  return result
}