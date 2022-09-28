# TypeScript

## JSON

* Key : value pair documents
  * Color is the key
  * Red is the value
  * "color" : "red"

* package.json is a file that we create to start our projects (this is also true for JS)
* To create our package.json, rub the following code in the root folder of our project in the terminal

```npm
npm init -y
```

* The 'npm' stands for Node Package Manager
* init stands for initialisation
* -y stands for 'yes' to all options

## Note for when downloading projects from a git repo

* When a package.json has dependencies, you will to install those packages to run the project. To do this, you run the following code:

```npm
npm install
OR 
npm i
```

## Uninstall a package

* Sometimes, you don't need a package anymore... or it's been installed incorrectly. To uninstall a package, you run the following code:

```npm
npm uninstall *package_name*
```

## Assignment

* Explicit assignment
  * declaring the type, so typescript doesn't have to figure it out

* Implicit assignment
  * we don't declare the type, typescript has to guess

* typescript is a strongly typed language once a datatype is defined it can't be redefined unless it is parsed
* so if myName = "Calissa" myName can't then = 123 unless we parse the type to int

## DRY Principle

* Don't repeat yourself
* Don't repeat yourself
* Don't repeat yourself

## Funtions

* A block of code that we write once and call whenever we want
* We have different options for our functions:
  * we can return a value to be used later on
  
    ```ts
    function subtraction(numberOne: number, numberTwo: number) {
        return numberOne - numberTwo;
        // this value can be used but we have to store it somewhere
    }
    ```

  * we can reutrn no value using the **void** keyword and display information using the console log
  
    ```ts
    function birthday(): void {
        console.log("It is your birthday.");
        myAge++;
    }

    function addition(numberOne: number, numberTwo: number) {
        console.log(numberOne + numberTwo);
    }
    // this will also work even though we haven't specified void
    ```

  * we can declare a type for the function

### Keywords

* **void** means the function returns no value
* **return** means the function returns a value tthat can be used elsewhere

### Parameters

* variables that are passed through functions

```ts
function information(firstName: string, lastName: string, age: number, location: string) {
    console.log("Hi I am " + firstName + " " + lastName + ". I am " + age + " years old. I live in " + location + ".");
    
    console.log(`Hi I am ${firstName} ${lastName}. I am ${age} years old. I live in ${location}.`);
    // internal string concatination with variables is much more readible than manually concatinating strings and variables together
}

information("Calissa", "Fairburn", 23, "Ipswich");
```

### Arrays

* They are collections of variables to be displayed

```ts
let person01: string = "Jacob";
let person02: string = "Moaaz";
let person03: string = "Elena";
let person04: string = "Tambo Tambo";

// redundant

const listOfPeople = ["Jacob", "Moaaz", "Elena", "Tambo Tambo"];
// despite fact this is const the items in the array can change AND you can append the arrat the only thing that's const is the fact it is an array

const favouriteThings = ["James Blunt", 4, "cheese", true, undefined];
// you can have multiple data types in an array UNLESS you explicitly declare the array type
// very weird :/

console.log(listOfPeople[0]);
// remeber arrays are 0 indexed so the first element of an array is 0th element

console.log(listOfPeople.length);
// .length counts number of items 
// so for this array it will be 4


listOfPeople.push("Odelette");
// push adds a new item to the end of the array

listOfPeople.pop();
// pop removes the last element in the array

for (let i = 0; i < listOfPeople.length; i++) {
    console.log(listOfPeople[i]);
}
// use for loops to iterate through an array
// for loops have 3 sections:
// 1. Initialser
// 2. Condition
// 3. Iterator (increment && || decrement)

console.log(listOfPeople);
// can log the whole array it will then display like this: ["Jacob", "Moaaz", "Elena", "Tambo Tambo"]

let favouriteNumber = 40;

do {
    console.log("Less than 10");
    favouriteNumber++;
} while (favouriteNumber < 10)
// dowhile ALWAYS runs at least once before checking the while condition
// so above will log "Less than 10" once even though 40 is NOT less than 10 
```

## OOP - Object orientated programming

### 4 principles

* Abstraction
* Polymorphism
* Encapsulation
* Inheritance

## Procedural programming

## Event-Driven programming

## Functional programming
