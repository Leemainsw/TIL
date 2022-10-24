// 개미 군단

function solution(hp) {
    const lev1 = Math.floor(hp / 5);
    const lev2 = Math.floor((hp % 5) / 3);
    const lev3 = Math.floor(((hp % 5) % 3));

    return lev1 + lev2 + lev3;
}