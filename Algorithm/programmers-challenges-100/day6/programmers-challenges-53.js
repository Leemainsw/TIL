// 주사위의 개수

function solution(box, n) {
    const result = box.map((element) => Math.floor(element/n))
    .reduce((arr, current) => arr * current, 1)
    return result;
}