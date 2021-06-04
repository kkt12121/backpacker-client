export const reorder = <T>(
  list: T[][],
  startIndex: number,
  endIndex: number,
  currentDay: number
): T[][] => {
  const result = [...list];
  // console.log("뭔지 봐봐", result);
  const [removed] = result[currentDay].splice(startIndex, 1);
  // console.log("이거는", removed);
  result[currentDay].splice(endIndex, 0, removed);

  return result;
};
