// 피자 나눠 먹기 (2)

function solution(n) {
  return n / gcd(n, 6); 
}

const gcd = (a, b) => b ? gcd(b, a % b) : a;