// 순서쌍의 개수

function solution(n) {
    let sum = 0;
    for(let i = 0; i <= n/2; i++) {
      if(n % i === 0) sum += 1;
    }
    return sum + 1;
}