// 문자 반복 출력하기

function solution(my_string, n) {
    let answer = '';
    [...my_string].forEach((ele) => {
        for(let i=0; i<n; i++) answer += ele;
    })
    return answer;
}