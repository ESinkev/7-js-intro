/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 - 0  = 0
0 - 4  = 10
0 - 100 = 5050
574 - 815 = didelis teigiamas sveikas skaicius 
-50 - 50 = 0
-70 - 30 = santykinai mazas neigiamas skaicius
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

/*
0-4
*/

const nuo = 0;
const iki = 4;

let sum = 0;



for (let i = nuo; i <= iki; i = i++) {
    sum = sum + i;
    
}

console.log(`Skaiciu intervale tarp ${nuo} ir ${iki} suma yra ${sum}`);

//nuo > iki
//nuo < iki

if (nuo < iki) {
    for (let i = nuo; i <= iki; i++) {
sum = sum + i;
}
} else {
    for (let i = iki; i <= nuo; i++) {
        sum = sum + i;
    }
}
