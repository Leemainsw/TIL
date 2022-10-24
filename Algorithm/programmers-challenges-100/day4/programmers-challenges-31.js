
// 가장 큰 수 찾기

function solution(array) {
    const maxNumber = array.slice().sort((a,b) => b-a)[0];
    const findIndex = array.findIndex((ele) => ele === maxNumber);
    
    return [maxNumber, findIndex]
}