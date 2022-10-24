// 배열 자르기

function solution(numbers, num1, num2) {
    let array = [];
    numbers.forEach((ele, index) => {
        if (num1 <= index && index <= num2) {
            array.push(ele);
        }
    })
    return array;
}