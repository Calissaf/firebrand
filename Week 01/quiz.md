# Questions

## Question 01

* How do we decide if a number is odd or even?
  
```ts
let number: number = 2;

if (number % 2 == 0) {
    console.log("Even");
    
} else {
    console.log("Odd");
    
}
// number % 2 will always either be 0 or 1, 0 means number is even and 1 means number is odd
```

## Question 02

* Without executin the code, what do you think will be the output of the following operation:

```code
print(5 / 0)
```

* is an error you can't divide by 0
* depending on the language you could it may return: i
  * infinity (which can be positive or negative based on the sign of the x when x / 0)
  * ZeroDivisionError
  * NaN which means not a number
