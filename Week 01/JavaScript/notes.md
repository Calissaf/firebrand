# Javascript

* Contents
  * Fundamentals
    * Variables / Constants
    * Conditionals
    * Loops
    * Switch cases
  * Functions / Methods

## The Language

* no.1 / no.2 most popular language with python and C#
* Javascript Flavors
  * **Vanilla JS**
  * React.js
  * **Angular.js**
  * Node.js
  * Ember.js
  * Vue.js
  * Deno.js
  * Express JS
  * and many more.....
* all these flavours are what help make JS so popular as anyone who can code in one of these flavors counts as a JS developer

## Software Developement

* The fundamentals remain the same throughout many languages
  * i.e. Java avd JavaScript are different lanuguages but all the core concepts are the same conditonaals, for loops ect...
* JS allows devs to update HTML (web) content dynamically

### Variables

#### variables.js

```js
let myName = "Calissa";
// variable is created called myName
// in this variable we stored the value Calissa

// JS is a Softly-typed language: which means you don't have to explicitly delcare variable data types

// JS data types: strings, numbers, bools, undefined

let myAge = 23;
let lightOn = true;
let noValue = undefined;

// a variable is a value that can change
// JS is less strict than other languages...
// it allows you to change between data types i.e. myAge could be set to "Calissa"

// Thinking about variables:
// variables on the journey to work
// weather, traffic, transport, money, tiredness, happiness

// Thinking about constants
// constants on the journey to work
// destination

// there's often a lot of variables but very few constants

const dateOfBirth = "01/01/2000";
// many possible formats for dates dd/mm/yyyyy, dd/mm/yy, mm/dd/yyyy 
// remeber y2k where 01/01/00 could be 1st of jan 1900 or 1st jan 2000

// need to remeber users will always do the thing you haven't accounted for
// for date of birth we can force user to conform by using a dropdown where we provide the data format 
// try to avoid just giving the user a text box for these things 

// const means the data cannot change
// i.e. dateOfBirth can't now = "05/01/2000" complier will error out


console.log(myName);
// console log adds things to the console for devs to see users won't see this unless they have permissions to inspect the webpage and click concole

console.log(myAge) ;

myAge++ ;
// increments myAge by 1

console.log(myAge);

myAge--;
// decrements myAge by 1
```

### Naming Convention

* camel casing
  * Each new word except the first has a capital letter to start
  * eachNewWordExceptTheFirstHasACapitalLetterToStart
* pascal casing
  * Every word starts with a Capital letter
  * EveryWordStartsWithACapitalLetter
* snake casing
  * Each word is seperated by a "_" and is all lower case
  * each_word_is_seperated_by_a_"_"_and_is_all_lower_case
* There are special instances where the formatting of these cases change i.e. when naming a class
* camel is normal preference for JS and TypeScript

### Conditionals

* A block of code to make a decision based on a condition given to the block
* If a condition is true, a certain piece of code is run,

#### conditionals.js

```js
let myAge = 35;

if (myAge < 18) {
    console.log("You are not allowed in the club.");
} else if (myAge < 30) {
    console.log("You are eligible for the young person's discount.");
} else if (myAge < 50) {
    console.log("You are allowed in the club. Full price.");
} else if (myAge < 90) {
    console.log("You are allowed in the club. Senior price.");
} else {
    console.log("You are allowed in the club for free");
}
// if you were to set myAge = "cheese" the console would log the final else statement as the final else allows anything that doesn't meet the first 2 conditions in, despite the fact you're comparing a string to a number

let myName = "Noah";

if (myName == "Calissa" || myName == "Noah" || myName == "Steve") {
    console.log("Hello %s.", myName);
} else {
    console.log("Name not recognised");
}

switch (myName) {
    case "Calissa":
    case "Noah":
    case "Steve":
        console.log("Hello %s.", myName);
        break;
    default:
        console.log("Name not recognised");
        break;
}

// favourite colour checker:
// we need a variable defining the favourite colour
// we need an if to check colour given against our options
// we need a switch statement to check the colour given against our options
// minimum of 3 colours to be checked in each condition (if and switch statements)

let myFavouriteColour = "Purple";
// ideally this would be user prompt

if (myFavouriteColour == "Red") {
    console.log("Nice choice, Red is my fav too!");
} else if (myFavouriteColour == "Blue") {
    console.log("Nice choice, Blue is my fav too!");
} else if (myFavouriteColour == "Yellow") {
    console.log("Nice choice, Yellow is my fav too!");
} else {
    console.log("Ah I guess %s is okay", myFavouriteColour);
}
// inefficient :(

if (myFavouriteColour == "Green" || myFavouriteColour == "Orange" || myFavouriteColour == "Purple") {
    console.log("Nice choice, %s is my fav too!", myFavouriteColour);
} else {
    console.log("Ah I guess %s is okay", myFavouriteColour);
}
// better

switch (myFavouriteColour) {
    case "Chartreuse":
    case "Amber":
    case "Magenta":
        console.log("Nice choice, %s is my fav too!", myFavouriteColour);
        break;
    default:
        console.log("Ah I guess %s is okay", myFavouriteColour);
        break;
}
// best :)
```

### Loops

#### loops.js

```js
// while loops: 

let myAge = 4;

while (myAge < 97) {
    console.log("Happy Birthday!");
    myAge++;
}
// whilst myAge is less than 97 console will continuosly log "Happy Birthday!" then we increment myAge by 1
```

### Operators

* Operators are symbols that are used to ensure efficiency in code and allow the dev to perform  mathamatical operators to our program

#### Arithmatic

* +, -, /, *, ++, --, %
  * ++ increment: increments value by 1
  * -- decrement: decrements value by 1
  * % modulus: reutrns the remainder of a divisional calculation
    * 10 % 3 = 1  --> 3 goes into 10 3 times as a whole number 3 * 3 = 9, so remainder is 1
    * 11 % 3 = 2  --> 3 goes into 11 3 times as a whole number 3 * 3 = 9, so remaindert is 2
    * 12 % 3 = 0  --> 3 goes into 12 exactly 4 times with no remainder, so remainder is 0
    * 15 % 4 = 3
    * 16 % 5 = 1
    * 17 % 6 = 5

```js
let myAge = 57;
myAge++; // my age is now 58
myAge++; // my age is now 59
myAge++; // my age is now 60

myAge--; // my age is now 59
myAge--; // my age is now 58
myAge--; // my age is now 57

```

#### Assignment

* +=, -=, /=, *=, %=
* performs the math operator then assigns that new value to the variable

```js
let myNumber = 10;
myNumber += 20; //myNumber is now 30
myNumber += 20; //myNumber is now 50
myNumber += 20; //myNumber is now 70

// same as writing myNumber = myNumber + 20 but is much simpler to write

myNumber -= 30; //myNumber is now 40

myNumber *= 10; //myNumber is now 400

```

#### Comparison

* <, >, <=, >=, ==, ===
  * < less than
  * > greater than
  * <= less than or equal to
  * >= greater than or equal to
  * == equal to
  * === strictly equal to
* The comparison operators return either true or false values
  * 10 < 20 //true
  * 10 == 20 //false
  * 10 <= 20 //true
  * 20 > 19 //true
  * 20 >= 20 //true

``` js
let myAge = "57";

if (myAge == 57) {
    console.log("values are equal");
}
// this will be true as == only looks at values NOT datatypes

if (myAge === 57) {
    console.log("values are equal");
}
// this will be false as === is strictly equal so looks to see if value AND datatype are equal
```

#### Side Note

* JS lets you do weird things with data types
* you can add string value and numbers together but remember strings take precident over numbers
  
```js
let myString = "1";
let myNumber = 1;

let answer;
answer = myString + myNumber;

console.log(answer);
// this will log "11" as it concatinates "1" and 1 together in a string

answer -= 5;
console.log(answer);
// this will log 6 as a number can't be removed from a string so answer is converted to a number then 5 is subtracted 

answer += "41";
console.log(answer);
// this will log "641" as it concatinates "41" and 6 together in a string
```

* adding floats together can sometimes end up with imprecise numbers

```js
console.log(0.2 + 0.1);
// this logs 0.30000000000000004
console.log(0.1 + 0.1);
// this logs 0.2
console.log(0.2 + 0.2);
// this logs 0.4

if (0.2 + 0.1 == 0.3) {
    console.log("The answer is 0.3");
} else {
    console.log("huh?");
}
// this will log "huh?" as 0.30000000000000004 is NOT equal to 0.3
```
