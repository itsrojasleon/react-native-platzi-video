export const _getMMSSFromMillis = (millis) => {
  const totalSeconds = millis / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalSeconds / 60);

  const padWithZero = number => {
    const string = number.toString();
    if (number < 10) {
      return `0${string}`;
    }
    return string;
  };
  return `${padWithZero(minutes)}:${padWithZero(seconds)}`;
}