// 가위 바위 보

function solution(rsp) {
  return [...rsp].map((value) => getWinNumber(Number(value))).join("");
 }
 
const getWinNumber = (number) => {
    switch(number) {
        case 2:
            return 0;
        case 0: 
            return 5;
        case 5:
            return 2;
    }
}
 