// 369게임

function solution(order) {
  const GAME_NUMBERS = [3, 6, 9];
  return [...String(order)].filter((ele)=>GAME_NUMBERS.includes(Number(ele))).length;
}