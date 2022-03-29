'use strict';


let numOrStr = prompt('input number or string');
console.log(numOrStr);

// Task #1

if(numOrStr === null || numOrStr.trim() === '' || numOrStr === null || isNaN( +numOrStr )) {
    console.log('Ошибка');
} else {
    console.log('Ok!');
}


// Task #2

switch (true) {
    case (numOrStr === null):
        console.log('вы отменили');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('Ok!');
}