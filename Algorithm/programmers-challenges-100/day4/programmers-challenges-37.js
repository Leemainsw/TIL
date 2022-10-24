// 짝수는 싫어요

function solution(n) {
    let array = [];
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0) array.push(i);
    }
    return array;
}