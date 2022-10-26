// 문자열 정렬하기(1)

function solution(my_string) {
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, "");
    return [...result].map((el)=>Number(el)).sort((a,b)=> Number(a)-Number(b));
}