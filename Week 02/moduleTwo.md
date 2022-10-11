# Module 2

## Content

* Data
* Datatypes
* Variables
* Decisions
* Loops
* Exceptions

## Agenda

* Visual studio
* Intro to C#
* Variables
* Console output
* Console input
* If statements
* Switch statements
* Exception handling

### Visual studio

* an IDE for writing .NET frameworks
* .NET was created by microsoft
  * it acts as an intermediate language between visual basic, C++ and C#
  * allows devs to code in any of those languages and link there code together
    * i.e. front end in vb, payments systems in C++ and security systems C# can all talk to each other seamlessly

### Programming

* Different types of programming languages
  * lowest level is binary/machine code which is read by hardware but not human readable
  * machine language
  * assembly language
  * C, C++ : high / middle level languages
  * Python, Javascript : highest level/ scripting/ interpreted language
* all the code you write is translated into binary/machine code by a compiler

#### Structure of C# program

* keywords:
  * using
    * allows you to access a library
  * namespace
    * holds a collection of similar functions
  * class
    * allows you to create objects with similar attributes, it contains data and behavour
  * static void Main(strings[] args)
    * declares the core/main area of code

### Datatypes and Variables

#### Datatypes

* key datatypes:
  * integers - whole number (4 bytes)
  * long - whole number larger than bounds of integer (8 bytes)
  * floats - number with a decimal point (4 bytes)
  * double - number with a decimal point larger than the bounds of float (8 bytes)
  * byte - (1 byte)
  * string - several ASCI characters (2 bytes per character)
  * characters - single ASCI character (2 bytes)
  * boolean - true or false (1 bit)

#### Variables

* Variables are memory locations where you store data
* there are object and primative variables
* Primitive:
  * intergers
  * characters
  * doubles
* Objects:
  * strings

```c#
int x = 90; // assign value 90 to x
char gender = 'F';
string firstName = "Calissa";
bool toggle = false;
float price = 25.99f;
// floats need to be followed by an f otherwise compiler will think they are a double
double price2 = 25.99;
long distance = 8989898;

Console.WriteLine(x); // write to console what is stored at location x
```

#### Arrays

* collection of variables with similar types
* arrays are 0 indexed
  * the first item in an array is index 0
  * you access items in the array using the indexS
* arrays in c# are immutable
  * you have to set a length at declaration which is then fixed
  * you can't change the length of an array in c#

```c#
int[] ages = { 27, 28, 21, 22 };
string[] names = {"Mary", "Fred ", "John", "James"};
char[] vowels = {'a', 'e', 'i', 'o', 'u'};

Console.WriteLine(ages[0]);
// will write first item in ages array which is 27

double[] prices = new double[4]; // declares new/empty array with length 4 and type double

prices[0] = 0.75;
prices[1] = 4.99;
prices[2] = 7.99;
prices[3] = 1.0;
```

### Operators

* mathmatic operators:
  * addition: +
  * subtraction: -
  * division: /
  * multiplication: *
  * modulus: %

### Methods

* reuseable piece of code / grouped piece of code

```c#
CalculateCostOfOrder () {
    OrderTotal = 
}
```

### If statements

* allows decisions to be made based on conditions
* if statements evaluate to a boolean
  * answer will either be true or false
* for multiple conditions use else if (see below)

```c#
 if (x > y)
{
    Console.WriteLine("x is greater than y");
}
else
{
    Console.WriteLine("y is greater than x");
}

```

### Else if statements

* allows multiple different decisions to be made based multiple different conditions
* else if also evaluate to a boolean

```c#
        static void GetDiscount(int quantity)
        {
            int discount = 0;

            if (quantity >= 100)
            {
                discount = 20;
            } else if(quantity >= 50)
            {
                discount = 15;
            }
            else if(quantity >= 10)
            {
                discount = 10;
            }
            else
            {
                discount = 5;
            }

            Console.WriteLine(String.Format("your discount is: {0}", discount));
        }
```

### Switch statements

* replaces chains of else if statements
* checks if a case occurs in the key and executes code based on that (like an if statement)
* can't use comparison in switch statments only used for if key == x || key == y
* you can nest switch statements just like if statements

```c#
Console.WriteLine("Enter first number");
            int num1 = Convert.ToInt32(Console.ReadLine()); // best implementation would to handle any exceptions on convert to int

            Console.WriteLine("Enter second number");
            int num2 = Convert.ToInt32(Console.ReadLine()); // best implementation would to handle any exceptions on convert to int

            Console.WriteLine("Enter operator {+ - / * %}");
            string ops = Console.ReadLine();

            int answ;

           /*
            if (ops.Equals("+"))
            {
                answ = num1 + num2;
                Console.WriteLine(answ);
            } 
            else if (ops.Equals("-"))
            {
                answ = num1 - num2;
                Console.WriteLine(answ);
            } 
            else if (ops.Equals("/"))
            {
                answ = num1 / num2;
                Console.WriteLine(answ);
            }
            else if (ops.Equals("*"))
            {
                answ = num1 * num2;
                Console.WriteLine(answ);
            } 
            else if (ops.Equals("%"))
            {
                answ = num1 % num2;
                Console.WriteLine(answ);
            }
            else
            {
                Console.WriteLine("Error operator not recognised");
            }
           */

            switch (ops)
            {
                case "+":
                    answ = num1 + num2;
                    Console.WriteLine(answ);
                    break;
                case "-":
                    answ = num1 - num2;
                    Console.WriteLine(answ);
                    break;
                case "/":
                    answ = num1 / num2;
                    Console.WriteLine(answ);
                    break;
                case "*":
                    answ = num1 * num2;
                    Console.WriteLine(answ);
                    break;
                case "%":
                    answ = num1 % num2;
                    Console.WriteLine(answ);
                    break;
                default:
                    Console.WriteLine("Error operator not recognised");
                    break;
            }

            Console.ReadLine(); // pauses the program
```

### Loops

* Four types of loop:
  * While
  * Do-while
  * For
  * For each

#### While loop

* while a conditional statement is true execute code below
* must be careful not to create an infinite loop!!
  * at some point the condition MUST change to false
  * otherwise you'll crash the system as it will try to run forever then quickly run out of space :0
* often used when you don't know how long you need to loop over a piece of code

```c#
int i = 0;

while (i <= 4)
{
    Console.WriteLine("The value of i is {0} squared {1}", i, i * i);
    i++; // must increment i so it moves towards condition otherwise you'll end up in an infinite loop!!!
}

Console.Read();
```

#### Do while loop

* execute code whilst a statement is true
* do while loop will always allow the code to run once BEFORE checking the condition!!!!
  * as do sits above while so complier will read the do before it hits the condition

```c#
int j = 6;

do // runs a piece of code at least once before checking
{
    Console.WriteLine("The value of j is {0}", j);
    j++; // must increment j so it moves towards condition otherwise you'll end up in an infinite loop!!!
} while (j < 5);

Console.Read();
```
  
#### For loop

* interates over a piece of code for a set length
* use for instead of a while loop when you know how long the loop should run for
* flexible don't have to iterate over every element in a collection
  * i.e. i = o: i < collection lenght : i + 3

```c#
string[] fiveADay = {"Apple", "PineApple", "Orange", "Pear", "Banana" };

    for (int k = 0; k < fiveADay.Length; k++)
    {
        Console.WriteLine(fiveADay[k]);
    }

    Console.Read();
```

#### For each loop

* used when you don't want to / don't have an index to iterate through
* instead iterates over each value in a collection
* quite rigid HAVE to iterate over each element in the collection
* safer than for loop if you want to iterate over EACH item: removes human error as you can't accidentally try and access data outside of the bounds of the collection

```c#
string[] fruits = { "Apple", "PineApple", "Orange", "Pear", "Banana" };

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}

Console.Read();
```

### Recursion

* allows methods to call themselves
* recursive methods needs to be terminated, otherwise they will end up calling themseleves endlessly
  * needs a terminal condition
* not often used in daily code
  * uses a lot of memory

```c#
public static int CalculateSumRecursively(int n, int m)
{
    int sum = n;
    if(n < m)
    {
        n++;
        return sum += CalculateSumRecursively(n, m);
    }
    return sum;
}

static void Main(string[] args)
{
    Console.WriteLine("Enter number n: ");
    int n = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Enter number m: ");
    int m = Convert.ToInt32(Console.ReadLine());

    int sum = CalculateSumRecursively(n, m);

    Console.WriteLine(sum);

    Console.ReadKey();
}
```

### Exception Handling

* Examples of exceptions:
  * try to open a file that doesn't exist
  * try to connect to a locked file
  * try to connect to a database that is offline
  * try to send a HTTP request to a sever that doesn't respond
  * ask user for a number and they return a string so convert to int function crashes

#### Try - catch

* method of exception handling
* trys a piece of code if it doesn't work your handed back an error in the console and doesn't excute the code in the system

```c#
public static void ExceptionTest()
{
    StreamReader sr = null; // StreamReader is used to read characters to a stream in a specified encoding
    try
    {
        sr = File.OpenText(@"c:\data.txt);
        Console.Writeline(sr.ReadToEnd());
    }
    catch (...)
    {

    }
}
```

##### The Finally block

* implements a piece of code that will run regardless of whether there's unexpected events or exceptions that may occur during an application's execution
* is intended to release resources, such as database connections; which are usually available in limited quantities, at the end of the apps execution
