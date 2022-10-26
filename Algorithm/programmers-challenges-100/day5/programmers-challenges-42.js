// 중앙값 구하기

function solution(array) {
    const index = Math.floor(array.length / 2);
    return array.sort((a,b)=> a-b)[index];
}