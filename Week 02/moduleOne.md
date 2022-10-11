# Module 1

## Content

* Desktop apps
* Distributed apps
* Designing software
* Algorithms

## Desktop apps

* console apps
  * takes user input from the command line
* form apps
* anything that runs on your local server: server side program

## Distributed apps

* runs on the client side
* needs internet connection to run
* any remote service that you access through the internet:
  * web apps
  * web services
  * databases
  * api's

## Designing software

* mulitple stakeholders involved in software creation process:
  * Buisness owner
    * pays for developement of software
    * has final say
  * Business Analyst
    * works with owner
    * looks at what the software needs to do to solve the problems it's targetting
  * Solution Architect
    * uses info from analyst and translates it into funtional specifics, designs and plans:
      * functional design
      * architechtural design
      * high level & low level design
      * test plan
      * implementation plan
    * Software Developer
      * implments the design provided by solution architect
      * write code
      * write documentation that goes alongside the code

## Algorithms

* Types:
  * Flowchart
  * Decision tables
  * ER diagrams
  * Function charts
  * Pseudo code
* More precise than natural laguages, less formal than code

### Decision tables

* useful for comparing large number of conditions
* i.e:

```c#
Condition 1 Y N N N
Condition 2 Y Y N N
Condition 3 Y Y Y N
Decision 1  X - X -
Decision 2  - X - X
```

* appears in code as if statements:

```c#
  if (quantity >= 100) {
 discount = 0.2
} else if (quantity >= 50) {
discount = 0.15
} else if (quantity >= 50) {
discount = 0.1
} else {
discount = 0
}
```

### Flowchart

* data flow diagrams:
  * always has a start and an end noted by oval
  * any processes or compuational operation are noted in rectangles
  * input or out operations are denoted inside parallelograms
  * questions/ decisions are denoted in a diamond

### Entity relationship (ER) diagrams

* shows different types of relationships:
  * one to one
  * one to many
  * many to many
* we used them in mySQL to show database relationships

## Design artefacts

* Design Documents - given to developers to specifiy how the software should work
