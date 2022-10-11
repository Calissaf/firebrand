# Module 4

## Content: Data Structures

* variables
* constants
* arrays
* heap vs stack RAM
* queues
* stacks
* linked lists

## Variables

* example data types:
  * int
    * whole numbers (no decimal points)
  * float
    * number with a decimal point
  * char
    * single character
  * string
    * collection of characters
  * bool
    * true or false

* values can be changed

## Constants

* value can't be changed

## Memory: Heap vs Stack

* two memory types:
  * Heap
  * Stack

* Heap
  * Disorganised
  * Inefficient use of space
  * Easy to add to a heap
    * new stores always added to the top
  * Hard to find anything in it
  * memory allocated in any random order
  * allocation and deallocation has to be done manually by the programmer
  * high cost
  * easy to implement
  * slow to access
  * biggest issues: memory fragmentation
  * flexible: resizing is possible

* Stack
  * Organised
  * Minimal wasted space
  * Hard to add to a heap
    * new stores always added to the bottom
  * Easy to find things in it
  * memory allocated in a contiguous block
  * allocation and deallocation is automatically done by complier
  * low cost
  * hard to implement
  * fast access time
  * biggest issue: shortage of memory
  * not flexible: fixed size og memory

## Queues

* has a first in first out policy
  * reads from oldest to newest
  * oldest item is the one you can access and change
* similar to an array but it's not immutable
  * you can add and remove items from a queue
* unlike an arrays queues are heterogenous
  * you can store different data types within the same queue
* special case: generic queues
  * unlike standard queues these are constrained to be homogeneous
  * you can only store one datatype within the queue

* commands:
  * Enqueue:
    * Adds an item to the tail end of the queue
  * Dequeue:
    * Removes the current element at the head of the queue
  * Peek:
    * Access the current item at the head position without actually removing it from the queue
  * Contains:
    * Determines whether a particular item exists in the queue

```c#
static void Main(string[] args)
{
    Queue<string> que = new Queue<string>(); // generic queue inside Generics namespace -- has a fixed datatype so DON'T need to Cast back when dequeing

    string cust1 = que.Dequeue();

    Queue oldschque = new Queue(); // inside the collections namespace -- can take multiple diff dataypes in the same queue

    // all items in the queue are saved as objects so need to convert them (Cast back) to make them useable variables

    oldschque.Enqueue(1);
    oldschque.Enqueue('A');
    oldschque.Enqueue(true);
    oldschque.Enqueue(new Customer());

    // int firstItem = oldschque.Dequeue(); this won't work as assigning object to int
    int firstItem = (int)oldschque.Dequeue(); // this converts object to an int

    string secondItem = (string)oldschque.Dequeue();
    bool thirdItem = (bool)oldschque.Dequeue();
}

class Customer
{
}

```

## Stacks

* has a last in first out policy
  * reads from newest to oldest
  * most recent item is the one you can access and change
* commands:
  * Push:
    * Adds item to the top of the stack.
  * Pop:
    * Removes the element at the top of the stack.
  * Peek:
    * Access the current item at the top of the stack without actually removing it from the stack.
  * Contains:
    * Determines whether a particular item exists in the stack.

```c#
Stack stk = new Stack();
stk.Push(1);
stk.Push("40");
stk.Push('B');
stk.Push(45.9);

foreach (var itemsInStack in stk)
{
    Console.WriteLine(itemsInStack);
}

Console.Read();
```

## Linked lists

### Single linked list

* a data structure that contains 2 values
  * a value
  * and a pointer which points to the next value in the list

* commands:
  * Add:
    * Adds an item to a linked list.
  * Remove:
    * Removes a given node from the linked list.
  * Find:
    * Finds a node with a given value in the linked list.

### Double linked list

* a data structure that contains 3 values
  * a pointer which points to the previous value in the list
  * a value
  * a pointer which points to the next value in the list

* commands (same as for single linked lists):
  * Add:
    * Adds an item to a linked list.
  * Remove:
    * Removes a given node from the linked list.
  * Find:
    * Finds a node with a given value in the linked list.

## Extra Notes

* For more on collections covered and the other types of collections in C# got to:
  * <https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections>
