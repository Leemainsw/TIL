// 아이스 아메리카노

function solution(money) {
    const COFFIE_PRICE = 5500;
    const count = Math.floor(money / COFFIE_PRICE);
    const changes = Math.floor(money % COFFIE_PRICE)
    return [count, changes];
}
