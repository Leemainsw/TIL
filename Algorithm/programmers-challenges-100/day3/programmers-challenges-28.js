// 최대값 만들기 (1)

function solution(numbers) {
    const array = numbers.sort((a,b) => b - a);
    return array[0] * array[1]
}