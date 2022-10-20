// 자릿수 더하기

function solution(n) {
    return [...String(n)].reduce((prev, current) => Number(prev) + Number(current), 0);
}