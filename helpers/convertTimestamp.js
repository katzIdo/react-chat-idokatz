export const convertTimestamp = (timestamp) => {
  const time = new Date(timestamp);

  const fixFormat = (val) => val < 10 ? `0${val}` : val;

  return `${fixFormat(time.getHours())}:${fixFormat(time.getMinutes())}`
}