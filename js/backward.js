const text = 'abcdef';

let back = '';

//for (let i = 0; i < text.length; i++) {
//    const letter = text[i];
//    back = letter + back;
// }

//for (let i = text.length - 1; i >= 0; i--) {
//  const letter = text[i];
//    back = back + letter;
// }

// for (let i = 0; i < text.length; i++) {
//     const letter = text[text.length - i - 1];
//     back = back + letter;
// }

// for (let i = 1; i <= text.length; i++) {
//     const letter = text[text.length - i];
//     back = back + letter;
// }



console.log(text, '->', back);

/*
backward array


einame per zodziu sarasa
pasiimu viena konkretu zodi 
pasiruosiu kintamaji naujam atvristiniam zodziui
einu per to zodzio raides 
pasiimu to zodzio raide
pasidedu is priekio atvirstiniam zodziui
spausdinu atvirkstini zodi
*/

const wordlist = ['labas', 'rytas', 'Lietuva'];

for (let w=0; w < wordlist.length; w++) {
const word = wordlist[w];
let backward = '';

for (let r =0; r < word.length; r++) {
    const letter = word[r];
    backward = letter + backward;
}
console.log(backward);
}

/* 
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

const nuo = 0;
const iki = 11;

const daliklis = 7;

let kiekis = 0;

// % - automatinis operatorius, dalybos liekana

for (let i= nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
kiekis++;
}
}


console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, 
besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`);


/* FUNKCIJOS

// rez -> 0, 11, 3
// rez -> 0, 11, 5
// rez -> 0, 11, 7
// rez -> 6, 14, 5
// rez -> 6, 14, 7

*/

/*
funkcija kvadratu

funkcija: duoto skaiciaus kelimas kvadratu
pvz. 2  -> 4
pvz 3 -> 9
pvz -4 -> 16
*/

function kvadratu(num) {
const  rez = num * num;
//console.log(num, '->', rez);
return rez;
}


kvadratu(2);
kvadratu(3);
kvadratu(-4);

console.log(kvadratu(-8));

/*
funkcija, kuri duota skaiciu pakelia norimu laipsniu
*/

function kubu(num) {
const rez = num * num * num;
console.log(num, '->', rez);
return rez;
}

kubu(2);
kubu(3);
kubu(-4);

console.log(kubu(-5));
/*
ddf
*/
function laipsnis(base, power) {
    let rez = 1;
    //return base ** power;
    //return Math.pow(base, power);


    for (let i = 0; i < power; i++) {
        rez = rez * base;
    }

    return rez;
}

const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->', -125);

/*
gffgg
*/

function faktorialas(n) {
   let rez = 1;

   for (let i =1; i <= n; i++) {
       if (i % 2 === 0) {
           rez = rez * i;
       }
    rez = rez * i;
}
return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);

console.log(f0, '->', 1);
console.log(f1, '->', 2);
console.log(f3, '->', 3);