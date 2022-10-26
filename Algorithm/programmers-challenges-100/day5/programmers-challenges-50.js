// 인덱스 바꾸기

function solution(my_string, num1, num2) {
    const myString = [...my_string]
    const tmp = myString[num1];
    myString[num1] = myString[num2];
    myString[num2] = tmp;
    return myString.join("");
}
