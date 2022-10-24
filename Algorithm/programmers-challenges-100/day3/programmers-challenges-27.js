// 제곱수 판별하기

function solution(n) {
    const num = Math.sqrt(n);
    return num % 1 === 0 ? 1 : 2
}