const vardas = 'Vardenis';
const pasisveikinimas = "Labas rytas, Lietuva!";

console.log(pasisveikinimas);

// do not -> don't

const neiginys = "don't";

console.log(neiginys);

// Jis pasake: "Labas".
const fraze = 'Jis pasake: "Labas".';
console.log(fraze);

// Mother said: "Don't do it!".
const mother1 = "Mother said: \"Don't do it!\".";

const mother2 = 'Mother said: "Don\'t do it!".';

console.log(mother1);
console.log(mother2);

/*
<div>
<p>Lorem upsum</p>
<a href="#">Click me</a>
<div>
*/

const html = '<div>\n\
<p>Lorem upsum</p>\n\
<a href="#">Click me</a>\n\
</div>';
console.log(html);

/*
'<div>
<p>Lorem upsum its amet</p>
<a href="#">Don't click me</a>
<div>'
*/

const html2 = `<div>
<p>Lorem upsum its amet</p>
<a href="#">Don't click me</a>
<div>`;
console.log(html2);

// Joniukas ir Gretute ejo i miska.
const berniukas = 'Joniukas';
const mergaite = 'Gretute';
const vieta = 'lauka';
const judejimoBudas = 'bego';

const pasaka = `${berniukas} ir ${mergaite} ${judejimoBudas} i ${vieta}.`;

console.log(pasaka);

// Chuck Norris (80).
const heroName = 'Chuck';
const heroLast = 'Norris';
const birth = 1940;

const heroSays = `${heroName} ${heroLast} (${2020 - birth}).`;
console.log(heroSays);



