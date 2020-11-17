/*
Palyginimo salyga (if):
galimi operatoriai: < >, <=, >=, ==, != (nelygu), ===, !===
naudotini: < >, <=, >=, ===, !===
nenaudotini: ==, !=
draudziami: =>, =< - nera tokiu.
*/

/*
Galimos strukturos:
if () {}
if () {} else {} - jei tenkina, pirmi skliaustai, jei netenkina salyga, antri skliaustai
if () {} else if {} .... else if {}
if () {} else if {} .... else if {} else {}
*/

const accountBalance = 100;
const transfer = 200;

//if (accountBalance == transfer) {
  //  console.log('Banko zinute: saskaitoje truksta pinigu');
//}

//if (accountBalance >= transfer) {
  //  console.log('Banko zinute: pavedimas padarytas');
//}

if (accountBalance >= transfer) {
    console.log('Banko zinute: pavedimas padarytas');
} else {
    console.log('Banko zinute: saskaitoje truksta pinigu');
}

const akys = 'baltos';

if (akys == 'melynos') {
    console.log('Grazios sirdies zmogus');
} else if (akys == 'zalios') {
    console.log('Melagiai');
} else if (akys == 'raudonos') {
    console.log('Programuotojas');
} else {
    console.log('Ar tu turi akis?');
}

console.log('Pirmas bandymas baigtas. Kas toliau?...');

const akys2 = 'zalios';

if (akys2 == 'melynos') {
console.log('Grazios sirdies zmogus');
} else {
    if (akys2 == 'zalios') {
   console.log('Melagiai..');
} else {
        if (akys2 == 'raudonos') {
 console.log('Programuotojas...'); 
    } else {
        console.log('Ar tu turi akis');
    }
    }
}


const pirmas = 8;
const antras = '8';

if (pirmas == antras) {
    console.log(true);
} else {
    console.log(false);
}



const  zodis1 = 'babcandjsfds';
const zodis2 = 'bb';

if (zodis1 < zodis2) {
    console.log(true);
} else {
    console.log(false);
}
/*

Kintamieji
Salygos funkcijos
Ciklo funkcijos
Funkcijos
Event lisner'iai

*/

