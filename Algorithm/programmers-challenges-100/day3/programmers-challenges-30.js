// 대문자와 소문자

function solution(my_string) {
    return [...my_string].map((ele) => ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()).join('')
}