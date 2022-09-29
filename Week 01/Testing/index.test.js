// toBe and toContain are matchers! These are the methods we use to test our code in different ways/scenarios!

let myArray = [1, 2, 3, 4, 5, 6]

test("that my name is Calissa", () => {
    // assertion is something that we believe to be true

    let name = "Calissa"
    expect(name).toBe("Calissa"); // this should be true
})

test("that myArray contains the value 3", () => {
    expect(myArray).toContain(3);
})

test("that myArray length is 6", () => {
    expect(myArray.length).toBe(6);
})