// 합성수 찾기

function solution(n) {
  let count = 0;
  for(let i = 1; i <= n; i++) {
      const divisorCount = getCountDivisor(i);
      if(divisorCount >= 3) count ++;
  }

  return count;
}

const getCountDivisor = (number) => {
  let count = 0;
  for(let i = 1; i <= number; i++) {
      if(number % i === 0) {
          count ++;
      }
  }
  return count;
}