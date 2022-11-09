// 배열 회전시키기

function solution(numbers, direction) {
    switch(direction) {
        case "right":
            return rightDirectionArray(numbers);

        case "left":
            return leftDirectionArray(numbers);
    }
}

const rightDirectionArray = (array) => {
    let tmp = array[array.length - 1];
    for(let i = array.length - 1; i > 0; i--){
        array[i] = array[i - 1];
    }
    array[0] = tmp;
    return array;
}

const leftDirectionArray = (array) => {
    let tmp = array[0];
    array = array.map((element, index) => {
        return array[index + 1];
    });
    array[array.length-1] = tmp;
    return array;
}