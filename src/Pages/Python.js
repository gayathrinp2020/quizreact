import React from "react";
import Tab1 from "../Components/TabComponent/Tab1";

function Python() {
  const Quiznames = {
    prop1: "Basics",
    prop2: "Data Types",
    prop3: "Quiz3",
    prop4: "Quiz4",
    prop5: "Quiz5",
    prop6: "Quiz6",
    prop7: "Quiz7",
    prop8: "Quiz8",
    prop9: "Quiz9",
    prop10: "Quiz10",
  };
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
  ];
  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Python;
