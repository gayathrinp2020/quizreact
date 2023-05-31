const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/api/pythonques", (req, res) => {
  const Questionset = [
    {
      tabKey: "prop1",
      questions: [
        {
          question: "What is Python?",
          options: [
            "A high-level programming language",
            "A type of snake",
            "A computer hardware",
            "A software development tool",
          ],
          answer: "A high-level programming language",
        },
        {
          question: "What is the syntax for printing in Python?",
          options: [
            "console.log()",
            "print()",
            "System.out.println()",
            "cout <<",
          ],
          answer: "print()",
        },
        {
          question:
            "What is the result of the expression '3 + 2 * 4' in Python?",
          options: ["9", "20", "11", "7"],
          answer: "11",
        },
        {
          question: "Which of the following is not a Python data type?",
          options: ["String", "Integer", "Boolean", "Float"],
          answer: "Boolean",
        },
        {
          question: "What is the correct way to create a function in Python?",
          options: [
            "function myFunction()",
            "def myFunction():",
            "create function myFunction():",
            "function = myFunction():",
          ],
          answer: "def myFunction():",
        },
      ],
    },
    {
      tabKey: "prop2",
      questions: [
        {
          question:
            "Which of the following is a Python data type for representing whole numbers?",
          options: ["String", "Integer", "Float", "Boolean"],
          answer: "Integer",
        },
        {
          question:
            "Which Python data type is used to represent a sequence of characters?",
          options: ["String", "Integer", "Float", "Boolean"],
          answer: "String",
        },
        {
          question:
            "What is the Python data type used to represent a true or false value?",
          options: ["String", "Integer", "Float", "Boolean"],
          answer: "Boolean",
        },
        {
          question:
            "Which Python data type is used to represent decimal numbers?",
          options: ["String", "Integer", "Float", "Boolean"],
          answer: "Float",
        },
        {
          question:
            "Which Python data type is used to represent a collection of elements, where each element can be accessed by its index?",
          options: ["String", "Integer", "List", "Boolean"],
          answer: "List",
        },
        {
          question:
            "What is the Python data type used to represent an unordered collection of unique elements?",
          options: ["String", "Integer", "Set", "Boolean"],
          answer: "Set",
        },
        {
          question:
            "Which Python data type is used to represent a key-value pair?",
          options: ["String", "Integer", "Dictionary", "Boolean"],
          answer: "Dictionary",
        },
      ],
    },
    {
      tabKey: "prop3",
      questions: [
        {
          question: "What is the purpose of the 'if' statement in Python?",
          options: [
            "To create a loop that iterates a specific number of times",
            "To define a block of code that gets executed only if a condition is true",
            "To convert a value to a boolean data type",
            "To perform arithmetic operations",
          ],
          answer:
            "To define a block of code that gets executed only if a condition is true",
        },
        {
          question: "What is the syntax for an 'if' statement in Python?",
          options: [
            "if (condition) { code }",
            "if condition { code }",
            "if [condition]: code",
            "if condition then code",
          ],
          answer: "if condition: code",
        },
        {
          question: "What is the purpose of the 'else' statement in Python?",
          options: [
            "To create an alternate condition for the preceding 'if' statement",
            "To repeat a block of code a specific number of times",
            "To specify the condition for the 'if' statement",
            "To define a block of code that gets executed when the 'if' condition is true",
          ],
          answer:
            "To define a block of code that gets executed when the 'if' condition is false",
        },
        {
          question: "What is the syntax for an 'else' statement in Python?",
          options: [
            "else { code }",
            "else: code",
            "else (condition) { code }",
            "else then code",
          ],
          answer: "else: code",
        },
        {
          question: "What is the purpose of the 'elif' statement in Python?",
          options: [
            "To create an alternate condition for the preceding 'if' statement",
            "To repeat a block of code a specific number of times",
            "To specify the condition for the 'else' statement",
            "To define a block of code that gets executed when a different condition is true",
          ],
          answer:
            "To define a block of code that gets executed when a different condition is true",
        },
        {
          question: "What is the syntax for an 'elif' statement in Python?",
          options: [
            "elif (condition) { code }",
            "elif condition { code }",
            "elif [condition]: code",
            "elif condition then code",
          ],
          answer: "elif condition: code",
        },
        {
          question: "What is the purpose of the 'for' loop in Python?",
          options: [
            "To define a block of code that gets executed only if a condition is true",
            "To create a loop that repeats a block of code a specific number of times",
            "To convert a value to a boolean data type",
            "To perform arithmetic operations",
          ],
          answer:
            "To create a loop that repeats a block of code a specific number of times",
        },
        {
          question: "What is the syntax for a 'for' loop in Python?",
          options: [
            "for (let i = 0; i < length; i++) { code }",
            "for (let item in list) { code }",
            "for (let item of list) { code }",
            "for i in range(length): code",
          ],
          answer: "for item in list: code",
        },
        {
          question: "What is the purpose of the 'while' loop in Python?",
          options: [
            "To define a block of code that gets executed only if a condition is true",
            "To create a loop that repeats a block of code a specific number of times",
            "To convert a value to a boolean data type",
            "To perform arithmetic operations",
          ],
          answer:
            "To create a loop that repeats a block of code as long as a condition is true",
        },
        {
          question: "What is the syntax for a 'while' loop in Python?",
          options: [
            "while (condition) { code }",
            "while condition { code }",
            "while [condition]: code",
            "while condition then code",
          ],
          answer: "while condition: code",
        },
      ],
    },
    {
      tabKey: "prop4",
      questions: [
        {
          question: "What is a function in Python?",
          options: [
            "A reserved keyword used for defining variables",
            "A collection of statements that performs a specific task",
            "A type of data structure in Python",
            "A way to comment out code in Python",
          ],
          answer: "A collection of statements that performs a specific task",
        },
        {
          question: "What is the syntax for defining a function in Python?",
          options: [
            "function myFunction() { code }",
            "def myFunction(): code",
            "create function myFunction(): code",
            "function = myFunction(): code",
          ],
          answer: "def myFunction(): code",
        },
        {
          question:
            "What is the purpose of the 'return' statement in a function?",
          options: [
            "To terminate the execution of the function",
            "To print a value to the console",
            "To indicate the input parameters of the function",
            "To specify the output value of the function",
          ],
          answer: "To specify the output value of the function",
        },
        {
          question: "What is a parameter in a function?",
          options: [
            "A variable used for storing the result of a function",
            "A value passed to the function when it is called",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "A value passed to the function when it is called",
        },
        {
          question: "What is an argument in a function?",
          options: [
            "A variable used for storing the result of a function",
            "A value passed to the function when it is called",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "A value passed to the function when it is called",
        },
        {
          question: "What is a default parameter value in a function?",
          options: [
            "A value that is automatically assigned to a parameter if no argument is provided",
            "A reserved keyword used for defining functions",
            "A variable used for storing the result of a function",
            "A data type used for specifying function behavior",
          ],
          answer:
            "A value that is automatically assigned to a parameter if no argument is provided",
        },
        {
          question: "What is recursion in Python?",
          options: [
            "A way to repeat a block of code multiple times",
            "A function calling itself directly or indirectly",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "A function calling itself directly or indirectly",
        },
        {
          question: "What is a lambda function in Python?",
          options: [
            "A function that accepts a variable number of arguments",
            "A function that returns multiple values",
            "An anonymous function that can be defined in a single line",
            "A function that performs mathematical operations",
          ],
          answer: "An anonymous function that can be defined in a single line",
        },
      ],
    },
    {
      tabKey: "prop5",
      questions: [
        {
          question: "What is a data structure in Python?",
          options: [
            "A way to store and organize data for efficient access and modification",
            "A type of variable used for arithmetic operations",
            "A reserved keyword used for defining functions",
            "A function that returns multiple values",
          ],
          answer:
            "A way to store and organize data for efficient access and modification",
        },
        {
          question: "What is a list in Python?",
          options: [
            "An ordered collection of elements",
            "A way to perform arithmetic operations",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "An ordered collection of elements",
        },
        {
          question: "How do you access an element in a list by its index?",
          options: [
            "list.get(index)",
            "list[index]",
            "list.access(index)",
            "list.getElement(index)",
          ],
          answer: "list[index]",
        },
        {
          question: "What is a tuple in Python?",
          options: [
            "An ordered collection of elements that is immutable",
            "A way to perform arithmetic operations",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "An ordered collection of elements that is immutable",
        },
        {
          question: "What is a dictionary in Python?",
          options: [
            "An unordered collection of key-value pairs",
            "A way to perform arithmetic operations",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "An unordered collection of key-value pairs",
        },
        {
          question: "How do you access a value in a dictionary using its key?",
          options: [
            "dict.access(key)",
            "dict[key]",
            "dict.getValue(key)",
            "dict.retrieve(key)",
          ],
          answer: "dict[key]",
        },
        {
          question: "What is a set in Python?",
          options: [
            "An unordered collection of unique elements",
            "A way to perform arithmetic operations",
            "A reserved keyword used for defining functions",
            "A data type used for specifying function behavior",
          ],
          answer: "An unordered collection of unique elements",
        },
        {
          question:
            "What is the difference between a list and a tuple in Python?",
          options: [
            "Lists are mutable, while tuples are immutable",
            "Lists can only store numeric values, while tuples can store any type of data",
            "Lists can have a variable length, while tuples have a fixed length",
            "Lists are ordered, while tuples are unordered",
          ],
          answer: "Lists are mutable, while tuples are immutable",
        },
      ],
    },
    {
      tabKey: "prop6",
      questions: [
        {
          question: "What is file handling in Python?",
          options: [
            "The process of reading and writing data to files",
            "A way to perform arithmetic operations on files",
            "A reserved keyword used for defining file-related functions",
            "A function that retrieves file metadata",
          ],
          answer: "The process of reading and writing data to files",
        },
        {
          question: "Which function is used to open a file in Python?",
          options: ["open()", "read()", "write()", "close()"],
          answer: "open()",
        },
        {
          question:
            "What is the default mode when opening a file using the open() function?",
          options: [
            "Read mode ('r')",
            "Write mode ('w')",
            "Append mode ('a')",
            "Binary mode ('b')",
          ],
          answer: "Read mode ('r')",
        },
        {
          question: "How do you read the contents of a file in Python?",
          options: [
            "file.read()",
            "file.write()",
            "file.read()",
            "file.append()",
          ],
          answer: "file.read()",
        },
        {
          question:
            "What is the purpose of the 'with' statement in file handling?",
          options: [
            "To ensure proper handling and closing of the file",
            "To specify the file access mode",
            "To read binary data from a file",
            "To append data to an existing file",
          ],
          answer: "To ensure proper handling and closing of the file",
        },
        {
          question: "How do you write data to a file in Python?",
          options: [
            "file.write()",
            "file.read()",
            "file.append()",
            "file.open()",
          ],
          answer: "file.write()",
        },
        {
          question:
            "What is the purpose of the 'close()' method in file handling?",
          options: [
            "To close the file and release system resources",
            "To delete the file from the file system",
            "To retrieve information about the file",
            "To rename the file",
          ],
          answer: "To close the file and release system resources",
        },
        {
          question: "How do you check if a file exists in Python?",
          options: [
            "os.exists()",
            "file.exists()",
            "file.exists()",
            "os.path.exists()",
          ],
          answer: "os.path.exists()",
        },
      ],
    },
    {
      tabKey: "prop7",
      questions: [
        {
          question: "What is exception handling in Python?",
          options: [
            "A way to handle and respond to runtime errors",
            "A method to suppress error messages",
            "A process of generating intentional errors",
            "A technique to bypass error handling mechanisms",
          ],
          answer: "A way to handle and respond to runtime errors",
        },
        {
          question: "Which keyword is used to handle exceptions in Python?",
          options: ["try", "except", "finally", "raise"],
          answer: "try",
        },
        {
          question:
            "What is the purpose of the 'except' block in exception handling?",
          options: [
            "To specify the code to be executed if an exception occurs",
            "To indicate the occurrence of an error",
            "To terminate the program execution",
            "To raise a new exception",
          ],
          answer: "To specify the code to be executed if an exception occurs",
        },
        {
          question:
            "What is the purpose of the 'finally' block in exception handling?",
          options: [
            "To specify the code to be executed regardless of whether an exception occurs or not",
            "To catch and handle specific types of exceptions",
            "To raise a new exception",
            "To terminate the program execution",
          ],
          answer:
            "To specify the code to be executed regardless of whether an exception occurs or not",
        },
        {
          question:
            "What is the purpose of the 'raise' keyword in exception handling?",
          options: [
            "To manually raise a specific exception",
            "To catch and handle exceptions",
            "To suppress error messages",
            "To terminate the program execution",
          ],
          answer: "To manually raise a specific exception",
        },
        {
          question:
            "Which of the following is not a built-in exception in Python?",
          options: [
            "ValueError",
            "TypeError",
            "SyntaxError",
            "NullPointerException",
          ],
          answer: "NullPointerException",
        },
        {
          question:
            "What is the purpose of the 'else' block in exception handling?",
          options: [
            "To specify the code to be executed if no exceptions occur",
            "To indicate the occurrence of an error",
            "To catch and handle specific types of exceptions",
            "To terminate the program execution",
          ],
          answer: "To specify the code to be executed if no exceptions occur",
        },
      ],
    },
    {
      tabKey: "prop8",
      questions: [
        {
          question: "What is encapsulation in object-oriented programming?",
          options: [
            "The process of hiding internal details and providing a public interface",
            "The process of reusing code from existing classes",
            "The process of defining multiple functions with the same name but different parameters",
            "The process of creating objects from classes",
          ],
          answer:
            "The process of hiding internal details and providing a public interface",
        },
        {
          question: "What is inheritance in object-oriented programming?",
          options: [
            "The process of creating objects from classes",
            "The process of defining multiple functions with the same name but different parameters",
            "The process of reusing code from existing classes",
            "The process of hiding internal details and providing a public interface",
          ],
          answer: "The process of reusing code from existing classes",
        },
        {
          question: "What is polymorphism in object-oriented programming?",
          options: [
            "The process of hiding internal details and providing a public interface",
            "The process of defining multiple functions with the same name but different parameters",
            "The process of creating objects from classes",
            "The process of reusing code from existing classes",
          ],
          answer:
            "The process of defining multiple functions with the same name but different parameters",
        },
        {
          question: "What is a class in object-oriented programming?",
          options: [
            "A blueprint for creating objects",
            "A collection of related functions",
            "A way to handle exceptions",
            "A way to define variables",
          ],
          answer: "A blueprint for creating objects",
        },
        {
          question: "What is an object in object-oriented programming?",
          options: [
            "A blueprint for creating classes",
            "A collection of related functions",
            "A way to handle exceptions",
            "An instance of a class",
          ],
          answer: "An instance of a class",
        },
        {
          question: "What is abstraction in object-oriented programming?",
          options: [
            "The process of defining multiple functions with the same name but different parameters",
            "The process of hiding internal details and providing a public interface",
            "The process of reusing code from existing classes",
            "The process of creating objects from classes",
          ],
          answer:
            "The process of hiding internal details and providing a public interface",
        },
      ],
    },
  ];
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
