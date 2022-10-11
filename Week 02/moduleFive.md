# Module 5

## Content: Sorting Algorithms

* What is Sorting
* Bubble Sort Algorithm
* Quick Sort Algorithm
* Comparing Bubble and Quick

## Sorting

* need to sort data into numerical or alphabetical order.
* data could be in an Array, a linked list or even in a file.

* two  methods for sorting data into order:
  * bubble-sort
    * easy to code but gives the CPU more work to do
  * quick-sort
    * is more complex to code but is much more efficient for the CPU to process

### Bubble sort

* compares each number to its neighbour in the sequence and if left is bigger than right they swap
* takes several passes to fully sort list
* items you are sorting will bubble up through the list slowly at each pass hence bubble sort
* Technical method:
  * Swaps of two adjacent elements in order to put them in right place

### Quick sort

* splits the sequence into smaller chunks then sorts those
* then stiches the sequence back into a larger chunks and sorts that
* until you have fully sorted list
* Technical method:
  * Split and win algorithm technique into which a pivotal element becomes the focal point of division around the given array.

### Comparing Quick and Bubble sort

* time complexity:
  * quick sort is much faster
  * quick sort: O(n log n)
  * bubble sort: O(n^2)
* code complexity:
  * quick sort is very complex to code
  * bubble sort very simple to code
* performance:
  * quick sort is recursive, faster
  * bubble sort is slower, iterative
* time consumption:
  * quick sort takes less Time Consumption to run an algorithm
  * bubble sort takes more Time Consumption to run an algorithm
* usefulness:
  * quick sort
    * considered to be more useful
    * good for large sequences
  * bubble sort
    * considered to be less useful
    * okay for short sequences
