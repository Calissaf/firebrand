const main = require("./main"); // imports specified variables from main

test("that the person object's employer name is Deloitte", () => {
    expect(main.person.employer).toBe("Deloitte");
})


// TODO: Write a test OR two... testing thst you can retrieve a value from the object car

test("that the car object's make is BMW", () => {
    expect(main.car.make).toBe("BMW");
})

test("that the car object's color is army green", () => {
    expect(main.car.color).toBe("army green");
})
