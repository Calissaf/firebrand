# Module 6

## Content: Object Oriented Programming (OOP)

* OOP vs Procedural Programming
* Objects & Classes
* Inheritance
* Constructors
* Access Modifiers
* Encapsulation
* Abstraction
* Interfaces
* Enumerators

## OOP vs Procedural Programming

### Procedutral vs OOP

* Procedural (also know as functional/ structured):
  * program just calls one function after another
    * Do this
    * Then this
    * Then this
    * Then this
    * Then end
  * in real life we don't call functions
    * we interact with objects
  * procedural programming is close to the CPU and far away from real life

* Object Oreintated Programmin (OOP):
  * program runs a function onstartup which reacts to events and triggers methods to run on objects
    * On STARTUP run this FUNCTION
    * When this EVENT happens run this METHOD to this OBJECT
    * When this EVENT happens run this METHOD to this OBJECT
    * When this EVENT happens run this METHOD to this OBJECT
    * When this EVENT happens run this METHOD to this OBJECT
    * End

## Clases and Objects

* Class
  * is a template for devs to create their own types (objects)
    * class is a blueprint that defines a nature of a future object
    * i.e. for cars the class is car with attributes of model, color ect behaviour of accelerate and deccelerate THEN each Object will be an instance of that class ... with make bmw color grey
* classes describe attributes and behaviour
  * attributes of the class are stored in memory
  * methods in the class are processed by the CPU

```c#
 internal class Pizza
    {
        private float price = 9.0f;
        private string name = "Pizza1";
        private float cost = 2.1f;
        private int weight = 200;

        public void Calc_Profit()
        {
            float profit = price - cost;
            Console.WriteLine("The profit for this pizza is {0}", profit);
        }
    }

// all of the attributes in this class are private so they're NOT changeable/accessible when assigned to an object
// to make them changeable they need to be public:

internal class Pizza
    {
        public float price;
        public string name;
        public float cost;
        public int weight;

        public void Calc_Profit()
        {
            float profit = price - cost;
            Console.WriteLine("The profit for this pizza is {0}", profit);
        }
    }

```

* Objects
  * instances of a class

```c#
static void Main(string[] args)
{
    Pizza Pepperoni = new Pizza(); // creates a new object which inherits the class pizza behaviours and attributes

    // if attributes are public and variable you can change them

    Pizza Pepperoni = new Pizza();

    Pepperoni.name = "Pepperoni";
    Pepperoni.cost = 1.5f;
    Pepperoni.price = 9.8f;
    Pepperoni.weight = 250;
}
```

### Constructors

* A special method that's called when you create an object of a class
* it has the SAME NAME as the class and DOES NOT have a return type
* it's only called by the .net environment
* and allows you to pass values when the object is being instanciated

```c#
 internal class Pizza
{
    public float price = 9.0f;
    public string name = "Pizza1";
    public float cost = 2.1f;
    public int weight =200;

    public Pizza() // constructor that takes no input 
    {
        
    }

    public Pizza(float price, string name, float cost, int weight) // constructor that allows you to setup price, name, cost and weight when instanciating the object
    {
        price = price;
        name = name;
        cost = cost;
        weight = weight;
    }

    public void Calc_Profit()
    {
        float profit = price - cost;
        Console.WriteLine("The profit for this pizza is {0}", profit);
    }
}
internal class Program
{
    static void Main(string[] args)
    {
        Pizza Pepperoni = new Pizza(); // setup up through constructor that takes no values so has same values as class
        Pizza Margherita = new Pizza(9.0f,"Margherita", 1.0f,200); // set up through constructor that takes price, name, cost and weight

    }

}

```

#### Note

* if you don't have any constructors you class will create a default constructor automatically from .net
  * this is a basic blank constructor
  * it allows you to instantiate an object
* As soon as you provide any other instructor this automatic one from .net will no longer be provided
  * you'll need to add it into the class yourself
  
```c#
public Pizza() // default constructor that takes no input 
    {
        
    }
```

## Inheritance

* Classes can inherit the attributes of another class that it needs but can also add its own attributes
  * i.e.
    * for a pizza parlour the overarching class is food with price, cost and weight attributs and a calculate profit method
    * other classes are pizza, side orders and drinks which are all types of food and can inherit the class attributes and behaviours from food and add their own specific attributes
    * so the pizza class could add base size, sauce, crust, topping1 and topping2 to its attributes

```c#
namespace IntroductionToOOP
{
    internal class Food
    {
        public string name = "null";
        public float price = 9.99f;
        public float cost = 1.5f;
        public int weight = 300;

        public void Calc_Profit()
        {
            float profit = price - cost;
            Console.WriteLine("The profit for this item is {0}", profit);
        }
    }
    internal class Pizza : Food // denotes inheritance
    {
        public string base_size = "Large";
        public string sauce = "Tomato";
        public string crust = "Itallian";
        public string firstTopping = "Pepperoni";
        public string secondTopping = "Pepperoni";

        public Pizza()
        {
            
        }

        public Pizza(string base_size, string sauce, string crust, string firstTopping, string secondTopping)
        {
            base_size = this.base_size;
            sauce = this.sauce;
            crust = this.crust;
            firstTopping = this.firstTopping;
            secondTopping = this.secondTopping;
        }
    }

    internal class Drinks : Food // denotes inheritance
    {
        public string name = "diest coke";
        public int volumeInML = 250;
        public string container = "medium";
        public bool isDiet = true;

        public Drinks()
        {

        }

        public Drinks(string name, int volumeInML, string container, bool isDiet)
        {
            this.name = name;
            this.volumeInML = volumeInML;
            this.container = container;
            this.isDiet = isDiet;
        }
    }

    internal class Side_Order : Food // denotes inheritance
    {
        public int numberOfPieces = 0;
        public string dippingSauce = "Garlic and Herb";
        bool isVegan = false;

        public Side_Order()
        {

        }

        public Side_Order(int numberOfPieces, string dippingSauce, bool isVegan)
        {
            this.numberOfPieces = numberOfPieces;
            this.dippingSauce = dippingSauce;
            this.isVegan = isVegan;
        }
    }
}
```

* You CANNOT implicitly inherit constructors!!
* You have to use the base keyword in the constructor to tell it to inherit the constructor from the super class (the class it inherits from)

```c#
internal class Food
{
    public string name = "null";
    public float price = 9.99f;
    public float cost = 1.5f;
    public int weight = 300;

    public void Calc_Profit()
    {
        float profit = price - cost;
        Console.WriteLine("The profit for this item is {0}", profit);
    }
    public Food(string name, float price, float cost, int weight)
    {
        this.name = name;
        this.price = price;
        this.cost = cost;
        this.weight = weight;
    }

    public Food()
    {

    }
}
internal class Pizza : Food
{
    public string base_size = "Large";
    public string sauce = "Tomato";
    public string crust = "Itallian";
    public string firstTopping = "Pepperoni";
    public string secondTopping = "Pepperoni";

    public Pizza()
    {
        
    }

    public Pizza(string name, float price, float cost, int weight) : base(name, price, cost, weight)        //base(name, price, cost, weight) is calling Food(name, price, cost, weight)
    {

    }

    // You can also add in the unique attributes of pizza to the constructor alongside base
    public Pizza(string name, float price, float cost, int weight, string base_size, string sauce, string crust, string firstTopping, string secondTopping) : base(name, price, cost, weight)        //base(name, price, cost, weight) is calling Food(name, price, cost, weight)
    {
        this.base_size = base_size;
            this.sauce = sauce;
            this.crust = crust;
            this.firstTopping = firstTopping;
            this.secondTopping = secondTopping;
    }

}
```

## Abstraction

* hides the internal details and shows only the functionality
* it indicates an incomplete implementation
  * alludes to the idea of a class or method existing without knowing the details
* it's used before the class or method to declare the class or method as abstract
* you CANNOT create objects from abstract classes
* abstract classes and methods CANNOT be private
  
```c#
abstract public class Food
    {
        /*
        public string name = "null";
        public float price = 9.99f;
        public float cost = 1.5f;
        public int weight = 300;

        public void Calc_Profit()
        {
            float profit = price - cost;
            Console.WriteLine("The profit for this item is {0}", profit);
        }
        public Food(string name, float price, float cost, int weight)
        {
           this.name = name;
           this.price = price;
           this.cost = cost;
           this.weight = weight;
        }

        public Food()
        {

        }
        */

        abstract public void makeFood();
    }
    internal class Pizza : Food
    {
        public string base_size = "Large";
        public string sauce = "Tomato";
        public string crust = "Itallian";
        public string firstTopping = "Pepperoni";
        public string secondTopping = "Pepperoni";

        public Pizza(string name, float price, float cost, int weight, string base_size, string sauce, string crust, string firstTopping, string secondTopping)
        {
            this.base_size = base_size;
            this.sauce = sauce;
            this.crust = crust;
            this.firstTopping = firstTopping;
            this.secondTopping = secondTopping;
        }

        public override void makeFood()
        {
            Console.Writeline("Put the Pizza in the oven for 10mins");
        }
    }
```

### Side Notes Abstraction

* the opposite of anstract is sealed
* you can't inherit from a sealed class

## Access Modifiers

* restricts acces to classes, methods and/or members
  * Data and methods held in the computer’s memory can potentially be accessed by other applications.
  * By applying access modifier key words to Classes, Methods and/or Members we can restrict this access.

### Public access modifiers

* makes the class, method or mambers accessible to all programs
  * When the public access modifier is specified on a CLASS:
    * METHODS: are available to any program.
    * MEMBERS: can be read by any program, on the computer.

### Internal access modifiers

* all methods in that program have access
  * When the PROTECTED access modifier is specified on a CLASS:
    * METHODS: are available only to instances of from that Assembly. (All the methods in that program)
    * MEMBERS: can only be read by METHODS of that Assembly. (All the methods in that program).

### Protected access modifier

* When the PROTECTED access modifier is specified on a CLASS:
  * METHODS: are available only to instances of objects of that class OR objects inherited from that class.
  * MEMBERS: can only be read by METHODS of that class OR methods inherited from that class.

### Private access modifier

* only accessible within the class
  * When the public access modifier is specified on a CLASS:
    * METHODS: are available to any program.
    * MEMBERS: can be read by any program, on the computer.

```c#
abstract public class Food
    {
        private string name = "null";
        private float price = 9.99f;
        private float cost = 1.5f;
        protected int weight = 300;

        public void Calc_Profit()
        {
            float profit = price - cost;
            Console.WriteLine("The profit for this item is {0}", profit);
        }

        public Food()
        {

        }

        abstract public void makeFood();
    }
    internal class Pizza : Food
    {
        public string base_size = "Large";
        public string sauce = "Tomato";
        public string crust = "Itallian";
        public string firstTopping = "Pepperoni";
        public string secondTopping = "Pepperoni";

        public Pizza(string name, float price, float cost, int weight, string base_size, string sauce, string crust, string firstTopping, string secondTopping)
        {
            this.base_size = base_size;
            this.sauce = sauce;
            this.crust = crust;
            this.firstTopping = firstTopping;
            this.secondTopping = secondTopping;
        }

        public override void makeFood()
        {
            weight = 250; // this is accessible as weight is protected and Pizza is a child class of Food
            cost = 9.0f // this will error as cost is private within Food class so cannot be accessed outside that class
            Console.WriteLine("Put the Pizza in the oven for 10 minutes");

        }
    }
```

### Side Note access

* best practice:
  * data should ALWAYS be private
    * can use protected if you want to be able to change the value in a child class
    * or you can use properties to allow changes to be made to the data
  * methods and constructors can be public

## Encapsulation

* We encapsulate methods inside of classes
* this allows:
  * better control of class members
  * fields can be made read-only or write-only
  * more flexible
  * increased scurity of data

* we can use encapsulation to create a public accessible version of a private item
  * SUPER SUPER SUPER important as all data should be private but we need a way to access it securly

```c#
abstract public class Food
    {
        private string name = "null";
        private float price = 9.99f;
        private float cost = 1.5f;

        public int Weight { get; set; } = 300; // resharper uses this format converts weight private to Weight encapsulated public in the same line
        public float Price {get => price; set => price = value; } // visual studio without resharper defaults to this
        public float Cost { get => cost; set => cost = value; }

        public void Calc_Profit()
        {
            float profit = price - cost;
            Console.WriteLine("The profit for this item is {0}", profit);
        }
        public Food(string name, float price, float cost, int weight)
        {
           this.name = name;
           this.price = price;
           this.cost = cost;
           this.Weight = weight;
        }

        public Food()
        {

        }

        abstract public void makeFood();
    }
    public class Pizza : Food
    {
        private string base_size = "Large";
        private string sauce = "Tomato";
        private string crust = "Itallian";
        private string firstTopping = "Pepperoni";
        private string secondTopping = "Pepperoni";

        public Pizza()
        {
            
        }
        public Pizza(string name, float price, float cost, int weight, string base_size, string sauce, string crust, string firstTopping, string secondTopping)
        {
            this.base_size = base_size;
            this.sauce = sauce;
            this.crust = crust;
            this.firstTopping = firstTopping;
            this.secondTopping = secondTopping;
        }

        public override void makeFood()
        {
            Price = 9.0f;
            Cost= 3.0f;
            Weight = 250;
            Console.WriteLine("Put the Pizza in the oven for 10 minutes");

        }
    }
```

### Side Note Encapsulation

* VS shortcut for encapsulation
  * you can right click on a elements name and hit refactor then encapsulate to automatically encapsulate that element

## Polymorphism

* allows you to out a child class into a parent class
* there are multiple types of polymorphism
  
```c#
namespace Polymorphism
{
    class Animal // Base class (parent) 
    {
        public virtual void makeSound() // can be used or overridden
        {
            Console.WriteLine("The animal makes a sound");
        }
    }
    class Pig : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The pig says: wee wee");
        }
    }
    class Dog : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The dog says: bow wow");
        }
    }
    class Cat : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The cat says: meow");
        }
    }
    class Fish : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The fish says: bloop");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal animal = new Animal(); // Create a Animal object
            Animal pig = new Pig(); // Create a Pig object
            Animal dog = new Dog(); // Create a Dog object
            Animal cat = new Cat();
            Animal fish = new Fish();
            animal.makeSound();
            pig.makeSound();
            dog.makeSound();
            cat.makeSound();
            fish.makeSound();

            // with polymorphism you can have an array of pets
            Animal[] pets = { pig, dog, cat, fish };

            foreach (Animal pet in pets)
            {
                pet.makeSound();
            }

            Console.Read();

        }
    }
}

```

## Interfaces

* Are completely "abstract classes", which can only contain abstract methods and properties
* They don't have a body and you can't create objects from them
* They can contain properties and methods, but not fields/variables
* You implement interfaces you DONOT inherit them but the dennotion is the same
* You can implement multiple interfaces whereas you can only inherit one class
  * so interfaces allow you to implment many different abstract methods that would sit outside of the scope of the class you may have inherited from

```c#
namespace Polymorphism
{
    class Animal // Base class (parent) 
    {
        public virtual void makeSound() // can be used or overridden
        {
            Console.WriteLine("The animal makes a sound");
        }
    }
    class Pig : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The pig says: wee wee");
        }
    }
    class Dog : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The dog says: bow wow");
        }
    }
    class Cat : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The cat says: meow");
        }
    }
    class Fish : Animal // Derived class (child) 
    {
        public override void makeSound()
        {
            Console.WriteLine("The fish says: bloop");
        }
    }
    public interface IDance
    {
        void dance();
    }
    public class Robot : IDance // this denotes implementation NOT inheritance -- you CANNOT inherit interfaces
    {
        public void dance()
        {
            Console.WriteLine("I am a dancing robot");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal animal = new Animal(); // Create a Animal object
            Animal pig = new Pig(); // Create a Pig object
            Animal dog = new Dog(); // Create a Dog object
            Animal cat = new Cat();
            Animal fish = new Fish();
            animal.makeSound();
            pig.makeSound();
            dog.makeSound();
            cat.makeSound();
            fish.makeSound();

            Cat dancingKitty = new Cat();
            Robot robot = new Robot();

            IDance[] dancing = { robot, dancingKitty };

            foreach (IDance dancer in dancing)
            {
                dancer.dance();
            }
            

            // with polymorphism you can have an array of pets
            Animal[] pets = { pig, dog, cat, fish };

            foreach (Animal pet in pets)
            {
                pet.makeSound();
            }

            Console.Read();

        }
    }
}
```

## Enumerators

* are a group/list of constants
* enum values:
  * by default the first item in an enum has the value 0 (the same as array indexes)
  * you can assign enum values
    * when doing this all the subsequent enumbs in the list will have values counting on from the newly set value

```c#
enum Level 
{
  Low, // value = 0
  Medium, // value = 1
  High // value = 2
}

Level myVar = Level.Medium;
Console.WriteLine(myVar); // this will print medium

enum Months
{
  January,    // 0
  February,   // 1
  March = 5,  // 5
  April,      // 6
  May,        // 7
  June,       // 8
  July        // 9
}

static void Main(string[] args)
{
  int myNum = (int) Months.April;
  Console.WriteLine(myNum); // this will print 6
}
```

## Side Notes

### Methods

* Why use methods
  * Avoids duplication of code
  * Allows you to make a piece of code public so it can be called from anywhere
  * Running Unit test
    * unit tests can only be run on isolated pieces of code i.e. methods
  
* Layout of Methods:
* name
* return type
  * if use void keyword means the method doesn't return anything
* pair of ()
  * These can either be blank or take a parameter
* body {}
* optional return keyword

* You can't nest methods inside one another
  * Methods can only sit inside a class!

```c#
// method layout examples:
void name1() // void means the method doesn't return anything
{

}

int name2(string firstName)
{
    return 1;
}
```
