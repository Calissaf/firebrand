# Challenges

## Challenge 01

* Create an array with your favourite Music artists, up to 10
* Create a for Loop to display these artists in a list
* Create a for While to display these artists in a list

* STRETCH: Explore a different type of loop in JS / TS (for/in, for/of and replicate)

## Challenge 02

* Explore different methods / functions inside if an array
  * used push and pop
  * there is also reverse, shift, splice and others
  * MDN JavaScript Array Methods (exploration)
  * use these methods on your favourite artists array

## Challenge 03

* Used functions inside of TypeScript. JavaScript has a couple of different ways to create functions, one is called arrow syntax function, how can we write the same functions as earlir in arrow syntax?

```ts
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
// index Required.
//  The position to add/remove items.
//  Negative value defines the position from the end of the array.
// howmany Optional.
//  Number of items to be removed.
// item1, ..., itemX Optional.
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
```

## Challenge 04

* My electricity bills for the last six months have been 23, 32, 45, 59, 31 and 64 GBP.
* What is the average monthly electricity bill over the six months period?
* Write an expression to calculate the average, and store the result in a variable called 'averageElectricityBill'.

### Extension

* Please create 6 variables to hold these values. For example, month1, month2, month3, month4, month5, and month6.
* Now, make the following changes to the monthly bill values before calculating the average bi-yearly bill:
* Increase the first month's bill to 3 times
* Add 10GBP to fifth month's bill
* Divide the last month's bill by 0.375

```ts
function findAverage(billPrices: Array<number>) {
    let averageElectricityBill: number = 0;
    for (let i = 0; i < billPrices.length; i++) {
        averageElectricityBill += billPrices[i];
    }
    return averageElectricityBill / billPrices.length;
}

const billPrices: Array<number> = [23, 32, 45, 59, 31, 64]

let averageElectricityBill: number = findAverage(billPrices)

console.log(`bill £${averageElectricityBill.toFixed(2)}`);

// Extension

// billPrices[0] *= 3;
// billPrices[4] += 10;
// billPrices[(billPrices.length - 1)] /= 0.375;

let indexMonthOne: number = 0;
let indexMothTwo: number = 1;
let indexMonthThree: number = 2;
let indexMonthFour: number = 3;
let indexMonthFive: number = 4;
let indexMonthSix: number = 5;

billPrices[indexMonthOne] *= 3;
billPrices[indexMonthFive] += 10;
billPrices[indexMonthSix] /= 0.375;


averageElectricityBill = findAverage(billPrices)
console.log(`new bill £${averageElectricityBill.toFixed(2)}`);
```

## Challenge 05

* got two tile sections first has height 7 and width 9 tiles, second has height 7 and width 6 tiles
* how many tiles will be needed to cover both sections?
* tiles come in packs of 6, you buy 17 packs
* how many tiles will remain after you've tiled the sections?

```ts
let sectionOneTileWidth = 9;
let sectionOneTileHeight = 7;
let sectionTwoTileWidth = 5;
let sectionTwoTileHeight = 7;
let tilePackageSize = 6;

let sectionOneTileArea = sectionOneTileWidth * sectionOneTileHeight;
let sectionTwoTileArea = sectionTwoTileWidth * sectionTwoTileHeight;

let totalTileArea = sectionOneTileArea + sectionTwoTileArea;
console.log(`Total tile area ${totalTileArea} tiles`);


let purchasedTiles = 17 * tilePackageSize;
let leftOverTiles = purchasedTiles - totalTileArea;

console.log(`Remaining tiles ${leftOverTiles}`);
```
