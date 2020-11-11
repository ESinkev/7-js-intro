// spausdiname sveikaji skaiciu
console.log(1991);

// du skaiciai vs desimtainis - kaip veikia ir koks yra kablelis 
console.log(3, 14);
console.log(3.14);

// kaip spausdinamas tekstas?
console.log("Labas rytas");
console.log('Labas rytas');


/**********************
* KINTAMIEJI 
***********************/
/*
Iniciavimo budai:
   const - default, tai musu pirmasis pasirinkimas
   let - galima, tik jei yra reikalas keisti reiksme (keiciam reiksme, kai yra poreikis)
   var - nenaudotinas  
*/

/*
Kintamuju tipai:
skaiciai (number) - 2020, 3.14. -7, -5.144
tekstai (string) - "labas", 'ka tu?', ";)"
logines (boolean) - true, false
sarasai (array) - []
objektai (objects) - {}
*/


const pirmasSkaicius = 7;
const antrasSkaicius = 3;

console.log("Pirmasis skaicius turetu buti 2.");
console.log(pirmasSkaicius);

console.log("Antrasis skaicius turetu buti 3.");
console.log(antrasSkaicius);

const suma = pirmasSkaicius + antrasSkaicius;

console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const vardas = 'Vardenis';
const amzius = 99;
console.log(vardas);
console.log(amzius);

// Vardenis yra 99 metu amziaus.
const sakinys = vardas + ' yra ' + amzius + ' metu amziaus.';
console.log(sakinys);

const suo = 'Rikis';
const maistas = 'kaulas';

// Rikis megstamas maistas yra kaulas.
const sakinys2 = suo + ' megstamas maistas yra ' + maistas + '.';

console.log(sakinys2);

const heroName = 'Chuck';
const heroLastname = 'Norris';
const birth = 1940;
const currentYear = 2021;
const age = currentYear - birth;

// Chuck Norris (80)
// Jo vardas: Chuck.
const sakinys3 = heroName + ' ' + heroLastname + ' (' + age +')';
console.log(sakinys3);

const sakinys4 = 'Jo vardas ' + heroName + '.';
console.log(sakinys4);

let pinigine = 7;
const sausis = 100;
const vasaris = 200;
const kovas = 70;

// 100
// 300
// 370
pinigine = pinigine + sausis;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);

pinigine = pinigine + kovas;
console.log(pinigine);
