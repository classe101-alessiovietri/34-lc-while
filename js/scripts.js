const animals = [
    'gatto',
    'cane',
    'coniglio',
    'pappagallo',
    'tartaruga',
];

console.log('--------------');
console.log('FOR');
console.log('--------------');
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

console.log('--------------');
console.log('WHILE');
console.log('--------------');
let j = 0;
while (j < animals.length) {
    console.log(j, animals[j]);

    j++;
}

/* 
    Prima iterazione:
    j = 0 => 0 < animals.length (5)? => SI => Entra nel while e lo esegue

    Seconda iterazione:
    j = 1 => 1 < 5? => SI => Entra nel while e lo esegue

    Terza iterazione:
    j = 2 => 2 < 5? => SI => Entra nel while e lo esegue

    Quarta iterazione:
    j = 3 => 3 < 5? => SI => Entra nel while e lo esegue

    Quinta iterazione:
    j = 4 => 4 < 5? => SI => Entra nel while e lo esegue

    Sesta iterazione:
    j = 5 => 5 < 5? => NO => Esce dal while

*/

// let userAnimal = prompt('Quale animale vuoi cercare?');
// console.log('userAnimal', userAnimal, typeof userAnimal);

// while (userAnimal.length < 3) {
//     // alert('Conosci animali con nome più corto di 3 caratteri?');
//     userAnimal = prompt('Nome non valido. Quale animale vuoi cercare?');
// }

let userAnimal = 'gatto';
let promptText = 'Quale animale vuoi cercare?';

do {
    userAnimal = prompt(promptText);
    promptText = 'Nome non valido. Quale animale vuoi cercare?';
} while (userAnimal.length < 3);

console.log('userAnimal', userAnimal, typeof userAnimal);

let foundAnimal = false;

// for (let index = 0; index < animals.length; index++) {
//     const singleAnimal = animals[index];

//     console.log(singleAnimal);
    
//     if (singleAnimal == userAnimal) {
//         foundAnimal = true;
//     }
// }

let index = 0;
// while (index < animals.length && !foundAnimal) {
while (
    index < animals.length      // Non sei arrivato alla fine
    &&  
    foundAnimal == false        // E non hai trovato quello che cercavi
) {
    const singleAnimal = animals[index];

    console.log(singleAnimal);

    if (singleAnimal == userAnimal) {
        foundAnimal = true;
    }

    index++;
}

if (foundAnimal) {
    alert('Animale trovato');
}
else {
    alert('Animale NON trovato');
}

















if (animals.indexOf(userAnimal) > -1) {
    alert('INDEXOF - Animale trovato');
}
else {
    alert('INDEXOF - Animale NON trovato');
}