# Challenges

## Challenge 01

* Write a function that takes an integer minutes and converts it to seconds.
* Examples:
  * convert(5) ➞ 300
  * convert(3) ➞ 180
  * convert(2) ➞ 120

```js
function convertMinutesToSeconds(minutes) {
    let seconds = minutes * 60;
    console.log(`${minutes} minutes is ${seconds} seconds`);
    
    return seconds;
    // if want to re-use value later
}
 
convertMinutesToSeconds(5);
convertMinutesToSeconds(3);
convertMinutesToSeconds(2);

// if didn't want to log value and just wanted a re-useable value:
// function convertMinutesToSeconds(minutes) {
//     return minutes * 60;
// }

```

## Challenge 02

* Write a function that takes the base and height of a triangle and return its area.
* Examples:
  * triangleArea(3, 2) ➞ 3
  * triangleArea(7, 4) ➞ 14
  * triangleArea(10, 10) ➞ 50

```js
function findTriangleArea(base, height) {
    let triangleArea = (base * height) / 2;
    console.log(`Are of the triangle is ${triangleArea}`);

    return triangleArea;
    // if want to re-use value later
}

findTriangleArea(3, 2);
findTriangleArea(7, 4);
findTriangleArea(10, 10);

// if didn't want to log value and just wanted a re-useable value:
// function findTriangleArea(base, height) {
//     return (base * height) / 2;
// }
```

## Challenge 03

* You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
* Examples:
  * points(1, 1) ➞ 5
  * points(7, 5) ➞ 29
  * points(38, 8) ➞ 100

```js
function findFinalScore(twoPointers, threePointers) {
    let finalScore = (twoPointers * 2) + (threePointers * 3);
    console.log(`Final score is ${finalScore}`);

    return finalScore;
    // if want to re-use value later
}

findFinalScore(1, 1);
findFinalScore(7, 5);
findFinalScore(38, 8);


// if didn't want to log value and just wanted a re-useable value:
// function findFinalScore(twoPointers, threePointers) {
//     return (twoPointers * 2) + (threePointers * 3);
// }
```
