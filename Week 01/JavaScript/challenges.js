function convertMinutesToSeconds(minutes) {
    let seconds = minutes * 60;
    console.log(`${minutes} minutes is ${seconds} seconds`);
    
    return seconds;
    // if want to re-use value later
}
 
convertMinutesToSeconds(5);
convertMinutesToSeconds(3);
convertMinutesToSeconds(2);

function findTriangleArea(base, height) {
    let triangleArea = (base * height) / 2;
    console.log(`Are of the triangle is ${triangleArea}`);

    return triangleArea;
    // if want to re-use value later
}

findTriangleArea(3, 2);
findTriangleArea(7, 4);
findTriangleArea(10, 10);

function findFinalScore(twoPointers, threePointers) {
    let finalScore = (twoPointers * 2) + (threePointers * 3);
    console.log(`Final score is ${finalScore}`);

    return finalScore;
    // if want to re-use value later
}

findFinalScore(1, 1);
findFinalScore(7, 5);
findFinalScore(38, 8);

