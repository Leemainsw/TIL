// 숫자 찾기

function solution(num, k) {
    const result = [...String(num)].findIndex((el)=>el===String(k));
    return result === -1 ? -1 : result + 1;
}