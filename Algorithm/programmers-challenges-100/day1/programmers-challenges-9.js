// 배열의 평균값

function solution(numbers) {
  const ave = numbers.reduce((prev, current) => prev + current);
  return ave / numbers.length
}