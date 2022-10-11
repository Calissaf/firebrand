// toBe and toContain are matchers! These are the methods we use to test our code in different ways/scenarios!

let myArray = [1, 2, 3, 4, 5, 6];
let myNumber = 0;

test("that my name is Calissa", () => {
    let name = "Calissa"
    // assertion is something that we believe to be true
    expect(name).toBe("Calissa"); // this should be true
})

test("that myArray contains the value 3", () => {
    expect(myArray).toContain(3);
})

test("that myArray length is 6", () => {
    expect(myArray.length).toBe(6);
})

test("that myNumber after incrementing is equal to 1", () => {
    myNumber++; // increments myNumber by 1 globally
    expect(myNumber).toBe(1);
    // re-set myNumber to 0 after test has finished so that it can be reused in other tests : teardown process
    myNumber = 0;
})

test("that myNumber after decrementing is equal to -1", () => {
    myNumber--;
    expect(myNumber).toBe(-1);
    myNumber = 0;
})