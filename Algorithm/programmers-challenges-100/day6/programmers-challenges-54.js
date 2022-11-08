// 외계행성의 나이

function solution(age) {
  return [...String(age)].map(num => String.fromCharCode('a'.charCodeAt(0) + +num)).join('');
}