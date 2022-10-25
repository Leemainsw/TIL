// 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, "");
    return [...result].reduce((prev, curt) => Number(prev) + Number(curt), 0) 
  }