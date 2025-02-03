# 300 Days - Fullstack Developer's Stretegy

Welcome to my repository where I'll share my progress with you on how I will, by the end of November, God willing, become a mini fullstack developer and will have mastered:
1. JavaScript (60 Days: 1 - 60) 
2. Reactjs (60 Days: 61 - 120)
3. Typescript (60 Days: 121 - 150) 
4. Node.js (60 Days: 151 - 210) 

Check my daily progress here on X or [Twitter](https://x.com/sheCodezArt) 


### ARRAYS

1. Reverse an Array
Write a function that takes an array as input and returns a new array with the elements reversed.


2. Find the Largest Number
Create a function that takes an array of numbers and returns the largest number.


3. Remove Duplicates
Write a function that removes duplicate values from an array.


4. Merge and Sort Arrays
Merge two arrays into one and return a sorted version of the combined array.


5. Find Common Elements
Create a function to find common elements between two arrays.




---

### FUNCTIONS

6. Calculator Function
Write a function calculator(a, b, operation) that performs addition, subtraction, multiplication, or division based on the operation parameter.


7. Factorial
Write a function that calculates the factorial of a given number using recursion.


8. Fibonacci Sequence
Create a function to generate the first n numbers in the Fibonacci sequence.


9. Check Palindrome
Write a function to check if a given string is a palindrome (reads the same backward and forward).


10. Custom Array Filter
Implement a function that mimics the behavior of the Array.filter() method.




---

### CLASSES AND OBJECTS

11. Car Class
Create a Car class with properties like make, model, and year. Add a method to calculate the car's age.


12. Bank Account Class
Design a BankAccount class with methods for deposit, withdrawal, and checking the balance.


13. Library System
Create a Book class with properties like title and author. Build a library object to store and search for books.


14. Game Character
Create a Character class with attributes like name, health, and strength. Add methods for attacking and healing.


15. Inventory Management
Design an Inventory class where items can be added, removed, or displayed in a list.




---

### METHODS AND LOOPS

16. Prime Numbers
Write a function to display all prime numbers up to a given number using a loop.


17. Sum of Array
Create a function to calculate the sum of all numbers in an array using a for loop.


18. Guess the Number Game
Write a simple guessing game where the computer generates a random number, and the player guesses until they’re correct.


19. Word Count
Write a function that takes a sentence as input and returns the number of words in it.


20. Rock, Paper, Scissors
Create a simple "Rock, Paper, Scissors" game against the computer using if statements and a while loop.




---

### Objects & Classes

#### Exercises

1. Create an object called `person` with properties `name`, `age`, and `occupation`. Log each property to the console.
2. Write a function that takes an object as an argument and returns the sum of all its numeric properties.
3. Create an object called `car` with properties `make`, `model`, and `year`. Add a method called `honk` that logs "Honk honk!" to the console.
4. Write a function that takes an object and a property name as arguments, and returns the value of that property.
5. Create an array of objects, where each object represents a book with properties `title`, `author`, and `pages`. Log the title of each book to the console.
6. Write a function that takes an array of objects and returns a new array with only the objects that have a certain property.
7. Create a class called `Dog` with properties `name`, `breed`, and `age`. Add a method called `bark` that logs "Woof!" to the console.
8. Write a function that takes a class and a property name as arguments, and returns the value of that property for a new instance of the class.
9. Create an object called `rectangle` with properties `width` and `height`. Add a method called `area` that returns the area of the rectangle.
10. Write a function that takes an object and returns a new object with the same properties, but with all property names converted to uppercase.

#### Mini-Games
1. *Guess the Property*: Create an object with several properties, and then write a function that takes a property name as an argument and returns the value of that property. Test the function by guessing different property names.
2. *Object Scavenger Hunt*: Create an object with several nested objects and arrays. Write a function that takes a property path as an argument (e.g. "person.address.street") and returns the value at that path.
3. *Classy Cars*: Create a class called `Car` with properties `make`, `model`, and `year`. Create several instances of the class and store them in an array. Write a function that takes the array as an argument and returns the average year of all the cars.
4. *Dog Show*: Create a class called `Dog` with properties `name`, `breed`, and `age`. Create several instances of the class and store them in an array. Write a function that takes the array as an argument and returns the oldest dog.
5. *Rectangle Rodeo*: Create an object called `rectangle` with properties `width` and `height`. Add a method called `area` that returns the area of the rectangle. Write a function that takes the rectangle object as an argument and returns a new rectangle object with the same area, but with different dimensions.

#### Challenges
1. *Deep Copy*: Write a function that takes an object as an argument and returns a deep copy of the object (i.e. a new object with the same properties and values, but with no shared references).
2. *Object Merge*: Write a function that takes two objects as arguments and returns a new object that combines the properties of both objects.
3. *Class Inheritance*: Create a class called `Animal` with properties `name` and `age`. Create a subclass called `Dog` that inherits from `Animal` and adds a property `breed`. Create an instance of the `Dog` class and log its properties to the console.
4. *Object Prototype*: Write a function that takes an object as an argument and returns its prototype chain (i.e. the sequence of objects that the original object inherits from).
5. *Class Composition*: Create a class called `University` with properties `name` and `departments`. Create a subclass called `Department` that has properties `name` and `courses`. Create an instance of the `University` class and add several departments to it. Log the university's departments and their courses to the console.

______________

### Weekend Games

1. Hangman
2. Countdown
3. Tic Tac Toe
4. Guess the word
5. Timer
6. Calculator

10 exercises and 10 theory questions on closures:

Exercises
1. *Counter*: Create a function `createCounter` that returns a counter function. Each time the counter function is called, it increments and returns the current count.
2. *Private Variables*: Implement a `BankAccount` class using closures. The class should have private variables for `balance` and `accountNumber`, and public methods for `deposit`, `withdraw`, and `getBalance`.
3. *Data Hiding*: Create a function `createSecretMessage` that returns a function. The returned function takes a message as an argument and returns the message encrypted with a secret key. The secret key should be hidden from the outside scope.
4. *Callback Functions*: Implement a `setTimeout` function using closures. The function should take a callback function and a delay as arguments and execute the callback function after the specified delay.
5. *Function Factory*: Create a function `createAdder` that returns a function. The returned function takes a number as an argument and returns the sum of the number and a fixed value.
6. *Closure Chain*: Implement a function `createChain` that returns a function. The returned function takes a value as an argument and returns a new function that takes another value as an argument. The chain should continue until a terminal value is reached.
7. *Memoization*: Create a function `createMemoizer` that returns a function. The returned function takes a function as an argument and returns a memoized version of the function.
8. *Event Handler*: Implement a function `createEventHandler` that returns a function. The returned function takes an event type as an argument and returns a new function that handles the event.
9. *Generator*: Create a function `createGenerator` that returns a function. The returned function generates a sequence of numbers on each call.
10. *Logger*: Implement a function `createLogger` that returns a function. The returned function logs messages to the console with a prefix.

Theory Questions
1. What is a closure in JavaScript, and how is it created?
2. What is the difference between a closure and a regular function?
3. How do closures interact with the outer scope, and what are the implications?
4. Can you explain the concept of "data hiding" in the context of closures?
5. How do closures enable the creation of private variables and functions?
6. What is the relationship between closures and higher-order functions?
7. Can you describe a scenario where a closure would be useful for managing state?
8. How do closures differ from object-oriented programming concepts like encapsulation?
9. Can you explain the concept of a "closure chain" and provide an example?
10. How do closures impact the performance and memory usage of a JavaScript application?


Basic DOM Manipulation (1-5)
1. Select an element by its ID and change its text content.
2. Select all elements with a specific class and change their background color.
3. Create a new paragraph element and add it to the end of the document body.
4. Remove the first child element of the document body.
5. Replace an existing element with a new one.

DOM Traversal (6-10)
6. Select all child elements of a specific parent element.
7. Get the next sibling element of a given element.
8. Get the previous sibling element of a given element.
9. Select all elements that are descendants of a specific element.
10. Get the parent element of a given element.

DOM Events (11-15)
11. Add an event listener to a button that alerts a message when clicked.
12. Create a form and add an event listener to the submit event.
13. Add an event listener to a mouseover event that changes the background color of an element.
14. Create a dropdown menu that toggles visibility on click.
15. Add an event listener to a keydown event that logs the pressed key.

Advanced DOM Manipulation (16-20)
16. Create a to-do list app that allows adding, removing, and editing items.
17. Build a simple image gallery with navigation buttons.
18. Create a dynamic table that allows adding and removing rows.
19. Build a simple accordion menu that toggles visibility on click.
20. Create a weather app that displays the current weather and forecast.

