let person01HairColor: string = "brunette";
let person01EyeColor: string = "green";
let person01Height: string = "180cm";
let person01Weight: string = "140lbs";

const employee01 = {
    employeeNumber : 1,
    firstName : "Trey",
    lastName : "Smith",
    strength : 100,
    tiredness : 0,
    health : 100,

    fight() {
        this.health -= 40;
        this.tiredness += 20;
    },
    // this is a method: which is a function inside of a class or object

    sleep() {
        this.health += 20;
    }
}
// this is an object

console.log(employee01);
console.log(employee01.firstName);


employee01.fight();
console.log(employee01.health, employee01.tiredness);

employee01.sleep();
console.log(`${employee01.firstName}'s health is ${employee01.health}`);



