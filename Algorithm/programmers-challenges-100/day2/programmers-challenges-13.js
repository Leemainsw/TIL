// 짝수의 합

function solution(n) {
  let some = 0;
  for (let i = 1; i <= n; i++){
    some += i % 2 === 0 ? i : 0;   
  }
  return some
}