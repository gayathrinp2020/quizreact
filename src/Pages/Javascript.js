import React from "react";
import Tabs from "../Components/TabComponent/Tabs";

function Javascript() {
  const Quiznames = {
    prop1: "Basics",
    prop2: "Data Types",
    prop3: "Control Flow",
    prop4: "Function",
    prop5: "Arrays",
    prop6: "OOPs Concepts",
    prop7: "DOM and Event Handling",
    prop8: "Asynchronous JavaScript",
    prop9: "Regular Expressions",
  };
  const Questionset = [
    {
      tabKey: "prop1",
      questions: [
        {
          question: "What is Java?",
          options: [
            "A programming language",
            "A type of coffee",
            "A database management system",
            "A software development framework",
          ],
          answer: "A programming language",
        },
        {
          question: "What is the syntax for printing in Java?",
          options: [
            "console.log()",
            "System.out.println()",
            "print()",
            "cout <<",
          ],
          answer: "System.out.println()",
        },
        {
          question: "What is the result of the expression '3 + 2 * 4' in Java?",
          options: ["9", "20", "11", "7"],
          answer: "11",
        },
        {
          question: "Which of the following is not a Java data type?",
          options: ["String", "Integer", "Boolean", "Float"],
          answer: "Boolean",
        },
        {
          question: "What is the correct way to declare a variable in Java?",
          options: [
            "variable myVariable;",
            "myVariable = 10;",
            "int myVariable = 10;",
            "var myVariable = 10;",
          ],
          answer: "int myVariable = 10;",
        },
      ],
    },
    {
      tabKey: "prop2",
      questions: [
        {
          question:
            "What is the data type used to represent whole numbers in Java?",
          options: ["int", "float", "boolean", "String"],
          answer: "int",
        },
        {
          question:
            "Which data type is used to represent a single character in Java?",
          options: ["char", "byte", "long", "double"],
          answer: "char",
        },
        {
          question:
            "Which data type is used to represent true or false values in Java?",
          options: ["boolean", "String", "int", "double"],
          answer: "boolean",
        },
        {
          question:
            "What is the data type used to represent decimal numbers with single precision in Java?",
          options: ["float", "double", "char", "long"],
          answer: "float",
        },
        {
          question: "Which data type is used to represent text in Java?",
          options: ["String", "int", "boolean", "byte"],
          answer: "String",
        },
      ],
    },
    {
      tabKey: "prop3",
      questions: [
        {
          question: "What is the purpose of an if statement in JavaScript?",
          options: [
            "To declare a new variable",
            "To loop through an array",
            "To execute a block of code conditionally",
            "To define a function",
          ],
          answer: "To execute a block of code conditionally",
        },
        {
          question:
            "What is the syntax for an if-else statement in JavaScript?",
          options: [
            "if (condition) { // code block } else { // code block }",
            "if (condition) { // code block } else if (condition) { // code block }",
            "if (condition) { // code block }",
            "if (condition) { // code block } else",
          ],
          answer: "if (condition) { // code block } else { // code block }",
        },
        {
          question: "What is the purpose of a switch statement in JavaScript?",
          options: [
            "To declare a new variable",
            "To iterate over an object",
            "To execute a block of code repeatedly",
            "To perform different actions based on different conditions",
          ],
          answer: "To perform different actions based on different conditions",
        },
        {
          question: "What is the syntax for a switch statement in JavaScript?",
          options: [
            "switch (expression) { case value: // code block break; default: // code block }",
            "switch (expression) { case value: // code block default: // code block break; }",
            "switch (expression) { case value: // code block break; default: // code block }",
            "switch (expression) { case value: // code block break; default: // code block break; }",
          ],
          answer:
            "switch (expression) { case value: // code block break; default: // code block }",
        },
        {
          question: "What is the purpose of a for loop in JavaScript?",
          options: [
            "To declare a new variable",
            "To execute a block of code conditionally",
            "To perform a task repeatedly",
            "To define a function",
          ],
          answer: "To perform a task repeatedly",
        },
      ],
    },
    {
      tabKey: "prop4",
      questions: [
        {
          question: "What is a function in JavaScript?",
          options: [
            "A data type for storing values",
            "A way to perform mathematical calculations",
            "A block of reusable code that performs a specific task",
            "A type of loop in JavaScript",
          ],
          answer: "A block of reusable code that performs a specific task",
        },
        {
          question: "How do you declare a function in JavaScript?",
          options: [
            "function myFunction()",
            "var myFunction = function()",
            "let myFunction = () =>",
            "All of the above",
          ],
          answer: "All of the above",
        },
        {
          question: "What is a parameter in a function?",
          options: [
            "A variable that stores the return value of a function",
            "A value passed to a function when it is called",
            "A condition that determines whether the function executes or not",
            "A keyword used to define a function",
          ],
          answer: "A value passed to a function when it is called",
        },
        {
          question: "What is a return statement in a function?",
          options: [
            "A statement that stops the execution of a function",
            "A statement that outputs a value from a function",
            "A statement that defines a function",
            "A statement that loops through a block of code",
          ],
          answer: "A statement that outputs a value from a function",
        },
        {
          question:
            "What is the purpose of the arguments object in a function?",
          options: [
            "To store the arguments passed to the function",
            "To store the variables declared inside the function",
            "To store the return value of the function",
            "To store the function itself",
          ],
          answer: "To store the arguments passed to the function",
        },
      ],
    },
    {
      tabKey: "prop5",
      questions: [
        {
          question: "What is an array in JavaScript?",
          options: [
            "A way to store multiple values in a single variable",
            "A loop that iterates over a set of values",
            "A data type for storing boolean values",
            "A conditional statement in JavaScript",
          ],
          answer: "A way to store multiple values in a single variable",
        },
        {
          question: "How do you declare an array in JavaScript?",
          options: [
            "var myArray = []",
            "let myArray = {}",
            "const myArray = () =>",
            "All of the above",
          ],
          answer: "var myArray = []",
        },
        {
          question: "How do you access elements in an array?",
          options: [
            "By using their index",
            "By using a loop",
            "By using a conditional statement",
            "By using the 'array' keyword",
          ],
          answer: "By using their index",
        },
        {
          question: "What is the length property of an array?",
          options: [
            "The total number of elements in the array",
            "The maximum value in the array",
            "The minimum value in the array",
            "The average value of all elements in the array",
          ],
          answer: "The total number of elements in the array",
        },
        {
          question: "How do you add elements to an array?",
          options: [
            "Using the push() method",
            "Using the pop() method",
            "Using the slice() method",
            "Using the concat() method",
          ],
          answer: "Using the push() method",
        },
      ],
    },
    {
      tabKey: "prop6",
      questions: [
        {
          question: "What is encapsulation in OOP?",
          options: [
            "It is the process of combining data and methods into a single unit",
            "It is the process of hiding data and methods within an object",
            "It is the process of breaking a program into smaller parts",
            "It is the process of creating objects from classes",
          ],
          answer:
            "It is the process of combining data and methods into a single unit",
        },
        {
          question: "What is inheritance in OOP?",
          options: [
            "It is the process of hiding data and methods within an object",
            "It is the process of creating objects from classes",
            "It is the process of breaking a program into smaller parts",
            "It is the process of reusing existing code and creating a hierarchy of classes",
          ],
          answer:
            "It is the process of reusing existing code and creating a hierarchy of classes",
        },
        {
          question: "What is polymorphism in OOP?",
          options: [
            "It is the process of breaking a program into smaller parts",
            "It is the process of creating objects from classes",
            "It is the process of hiding data and methods within an object",
            "It is the ability of an object to take on many forms and respond differently based on the context",
          ],
          answer:
            "It is the ability of an object to take on many forms and respond differently based on the context",
        },
        {
          question: "What is abstraction in OOP?",
          options: [
            "It is the process of combining data and methods into a single unit",
            "It is the process of hiding data and methods within an object",
            "It is the process of creating objects from classes",
            "It is the process of breaking a program into smaller parts",
          ],
          answer:
            "It is the process of hiding data and methods within an object",
        },
        {
          question: "What is a class in OOP?",
          options: [
            "It is a blueprint for creating objects",
            "It is an instance of an object",
            "It is a method within an object",
            "It is a data structure for storing values",
          ],
          answer: "It is a blueprint for creating objects",
        },
      ],
    },
    {
      tabKey: "prop7",
      questions: [
        {
          question: "What does DOM stand for?",
          options: [
            "Document Orientation Model",
            "Document Object Model",
            "Data Output Mechanism",
            "Document Order Method",
          ],
          answer: "Document Object Model",
        },
        {
          question: "What is the purpose of the DOM in JavaScript?",
          options: [
            "To style web pages",
            "To handle server-side logic",
            "To manipulate HTML and XML documents",
            "To optimize JavaScript performance",
          ],
          answer: "To manipulate HTML and XML documents",
        },
        {
          question: "What is an event in JavaScript?",
          options: [
            "A piece of code that performs a specific task",
            "A function that creates an object",
            "A specific action that occurs as a result of user interaction",
            "A variable that holds multiple values",
          ],
          answer:
            "A specific action that occurs as a result of user interaction",
        },
        {
          question:
            "Which method is used to add an event listener in JavaScript?",
          options: [
            "addEventListener()",
            "attachEvent()",
            "addEvent()",
            "bindEvent()",
          ],
          answer: "addEventListener()",
        },
        {
          question:
            "Which property is used to access the text content of an HTML element?",
          options: ["innerText", "innerHTML", "textContent", "textValue"],
          answer: "textContent",
        },
      ],
    },
    {
      tabKey: "prop8",
      questions: [
        {
          question: "What is asynchronous JavaScript?",
          options: [
            "A JavaScript library for handling asynchronous operations",
            "The ability of JavaScript to perform multiple tasks simultaneously",
            "The process of executing JavaScript code in a sequential manner",
            "The concept of JavaScript functions with no return value",
          ],
          answer:
            "The ability of JavaScript to perform multiple tasks simultaneously",
        },
        {
          question:
            "Which keyword is used to declare an asynchronous function in JavaScript?",
          options: ["async", "await", "asynchronous", "sync"],
          answer: "async",
        },
        {
          question:
            "What is the purpose of Promises in asynchronous JavaScript?",
          options: [
            "To handle errors and exceptions",
            "To improve code readability",
            "To handle asynchronous operations and their results",
            "To enforce strict data typing",
          ],
          answer: "To handle asynchronous operations and their results",
        },
        {
          question:
            "Which method is used to handle the result of a resolved Promise?",
          options: ["then()", "catch()", "finally()", "await()"],
          answer: "then()",
        },
        {
          question:
            "Which statement is used to pause the execution of an asynchronous function until a Promise is resolved?",
          options: ["await", "pause", "stop", "hold"],
          answer: "await",
        },
      ],
    },
    {
      tabKey: "prop8",
      questions: [
        {
          question: "What is a regular expression?",
          options: [
            "A sequence of characters that forms a search pattern",
            "A function for replacing text in a string",
            "A method for splitting a string into an array of substrings",
            "A data structure for storing and manipulating text",
          ],
          answer: "A sequence of characters that forms a search pattern",
        },
        {
          question:
            "Which character is used to denote the start of a regular expression pattern?",
          options: ["/", "@", "#", "$"],
          answer: "/",
        },
        {
          question: "What does the 'g' flag do in a regular expression?",
          options: [
            "Performs a global search (finds all matches rather than stopping after the first match)",
            "Performs a case-insensitive search",
            "Performs a search with Unicode characters",
            "Performs a search on multiple lines",
          ],
          answer:
            "Performs a global search (finds all matches rather than stopping after the first match)",
        },
        {
          question:
            "Which method is used to test if a pattern is found in a string using a regular expression?",
          options: ["test()", "match()", "replace()", "split()"],
          answer: "test()",
        },
        {
          question:
            "What character is used to represent any character (except newline) in a regular expression?",
          options: [".", "*", "+", "?"],
          answer: ".",
        },
      ],
    },
  ];
  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Javascript;
