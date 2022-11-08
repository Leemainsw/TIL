// 암호 해독

function solution(cipher, code) {
  return [...cipher].filter((element, index) => ((index+1) % code) === 0).join("")
}