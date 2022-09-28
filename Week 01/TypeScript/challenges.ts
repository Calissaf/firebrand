// Challenge 01

const favouriteMusicArtists = ["Foo Fighters", "Miley Cyrus", "U2", "Aqua", "Coldplay", "Hot Chocolate", "Seal", "Boyzone", "Hanson", "Meat Loaf"];

// For loop
for (let i = 0; i < favouriteMusicArtists.length; i++) {
    console.log(favouriteMusicArtists[i]);
}
console.log("For loop ends");


// While loop
let i = 0;
while (i < favouriteMusicArtists.length) {
    console.log(favouriteMusicArtists[i]);
    i++;
}
console.log("While loop ends");

// ForIn loop
for (const name in favouriteMusicArtists) {
    console.log(favouriteMusicArtists[name]);
}
console.log("ForIn loop ends");

// ForOf loops
for (const name of favouriteMusicArtists) {
    console.log(name);
}
console.log("ForOf loop ends");

// Challenge 02

// reverse
favouriteMusicArtists.reverse();
// reverses the order of the items in an array
console.log(`reverse: ${favouriteMusicArtists}`);

// shift
favouriteMusicArtists.shift();
// removes the first item in an array
console.log(`shift: ${favouriteMusicArtists}`);

// splice
favouriteMusicArtists.splice(7,1,"Korn");
//Adds/Removes items from an array
// above removed 1 item after 7th position and added value Korn
// array.splice(index, howmany, item1, ....., itemX)
// index	Required.
//  The position to add/remove items.
//  Negative value defines the position from the end of the array.
// howmany	Optional.
//  Number of items to be removed.
// item1, ..., itemX	Optional.
//  New item(s) to be added.
console.log(`splice: ${favouriteMusicArtists}`);

// toString
let textFavouriteMusicArtists = favouriteMusicArtists.toString();
// converts an array to a string, and returns the result
console.log(`toString: ${textFavouriteMusicArtists}`);
console.log(typeof textFavouriteMusicArtists);

// Sort
favouriteMusicArtists.sort();
// sorts items in array alphbetically
console.log(`sort: ${favouriteMusicArtists}`);

// Sort from z to a
favouriteMusicArtists.sort().reverse();
console.log(`z to a: ${favouriteMusicArtists}`);

// Slice
console.log(`slice: ${favouriteMusicArtists.slice(4)}`);
//returns a of a portion of an array after the nth item (NOT index... ITEM) that is in the slice brackets

// Challenge 03

// traditional function
function subtractionTS(numberOne: number, numberTwo: number) {
    return numberOne - numberTwo;
}

// arrow function

const subtractionArrowTS = (numberOne: number, numberTwo: number) => numberOne - numberTwo;

console.log(subtractionArrowTS(5, 2));
// Arrow function syntax: const *function_name* = (parameters) => return;

// self challenge: convert birthday func from traditional to arrow syntax
let myAgeTS = 23;

function birthdayTS(): void {
    console.log("It is your birthday.");
    myAgeTS++;
}

const birthdayArrowTS = () => myAgeTS++; console.log("It is your birthday.");

birthdayArrowTS();

console.log(myAgeTS);



