function pickLetters() {

// input validation
if (typeof text !== 'string') {
    return 'ERROR: pirmoji reiksme ne teksto tipo.';
}
if (typeof step !== 'number') {
    return 'ERROR: antroji reiksme ne skaiciaus tipo.';
}
const size = text.length;

if (step > size) {
    return 'ERROR: zingsnis yra per didelis lyginant su teksto ilgiu';
}
if (step === 0) {
    return 'ERROR: zingsnis negali buti nulinis';
}
// logic
let rez = '';

for (let i = step - 1; i < size; i+=step) {
   // if (i % step === step -1) {
        rez += text[i];
    }
}

// post logic validation

// return
return rez;

}

console.log(pickLetters('abcdefg', 2), '->', 'bdf');
console.log(pickLetters('abcdefghijkl', 3 ), '->', 'cfil' );

console.log(pickLetters( 'abc', 0 ));
console.log(pickLetters( 'abc', 4 ) );
console.log(pickLetters( 1561, 2 ) );
console.log(pickLetters( '1561', 2 ) );


/*

step: 3

_ _ _ _
abcdefgijkl  -> cfil
--------



*/