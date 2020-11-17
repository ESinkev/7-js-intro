function numLenght(num) {
// input validation
if (typeof num !== 'number') {
    return 'Pateikta netinkamo tipo reiksme.';
}
if ('' + num === 'NaN') {
    return 'Pateikta netinkamo tipo reiksme';
}

// logic
const textNum = '' + num;
let size = textNum.length;

if (num < 0) {
console.log('radau minusa');
size--;
}
if (num % 1 !== 0) {
    size--;
}

// return
 return size;
}

console.log(numLenght(true));
console.log(numLenght('asd'));
console.log(numLenght(NaN));

console.log(numLenght(5), '->', 1);
console.log(numLenght(781), '->', 3);
console.log(numLenght(37060123456), '->', 11);
console.log(numLenght(-5), '->', 1);

console.log('.....');


console.log(numLenght(2.2), '->', 2);
console.log(numLenght(3.1415), '->', 5);
console.log(numLenght(-3.1415), '->', 5);


console.log('.......');

console.log(numLength(infinity), '->', '');