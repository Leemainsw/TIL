// 피자 나눠 먹기 (3)

function solution(slice, n) {
    return Math.floor(n / slice + (n % slice ? 1 : 0));
}