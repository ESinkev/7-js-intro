const kiek = 5;

for (let  i= 0; i <= kiek; i++) {
    // logika
    console.log('Labas rytas!', i);
}

console.log('pabaiga');

let number = 7;
console.log(number);

number = number + 1;
console.log(number);

number--;
console.log(number);

number--;
console.log(number);

number++;
console.log(number);

console.log('..........');

/*
Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
*/

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    pajamos = pajamos + alga;
console.log(`${i}) ${pajamos} pinigu.`);
}

console.log('.........');

/*
Parasyti skaicius nuo 8 iki 4 imtinai.
*/

for (let i=8; i>=4; i--) {
    console.log(i);

}

console.log('.......');

/*
Isvardinti ciferblato skaicius nuo duotos valandos iki galo.
*/

const valanda = 3;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
console.log(val + 'val');
}

/*
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname: 
Aplankiau: "Miesto pavadinimas."
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];

// console.log(`Aplankiau: ${miestai[0]}.`);
// console.log(`Aplankiau: ${miestai[1]}.`);
// console.log(`Aplankiau: ${miestai[2]}.`);
// console.log(`Aplankiau: ${miestai[3]}.`);


for (let i = 0; i < miestai.length; i++) {
console.log(`Aplankiau: ${miestai[i]}.`);
}

console.log('.........');

/*

*/