// 최댓값 만들기 (2)

function solution(numbers) {
  const sortingNumberArray = numbers.sort((a, b) => a-b);
  const length = sortingNumberArray.length;

  return Math.max(sortingNumberArray[0] * sortingNumberArray[1], sortingNumberArray[length -1] * sortingNumberArray[length - 2]);
}