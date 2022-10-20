// 짝수 홀수 개수

function solution(num_list) {
  let odd = 0;
  let even = 0;
  
  num_list.forEach((ele) => {
    ele % 2 === 0 ? even += 1 : odd += 1;
  })
    
  return [even, odd]
}