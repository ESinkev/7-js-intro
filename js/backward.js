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

