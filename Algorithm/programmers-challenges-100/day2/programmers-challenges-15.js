// 머쓱이보다 키 큰 사람

function solution(array, height) {
    return array.filter((ele) => ele > height).length;
}