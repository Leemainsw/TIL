// 모음 제거

function solution(my_string) {
    const VOWEL = ['a', 'e', 'i', 'o', 'u'];
    return [...my_string].map((ele) => VOWEL.includes(ele) ? '' : ele).join("");
}