// 양꼬치

function solution(n, k) {
    const SHEEP_PRICE = 12000;
    const DRING_PRICE = 2000;

    const drinkEvnetDiscount = parseInt(n / 10);

    return (n * SHEEP_PRICE) + (k * DRING_PRICE) - (drinkEvnetDiscount * DRING_PRICE)
}