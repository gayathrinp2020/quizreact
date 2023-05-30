import React from "react";
import Tabs from "../Components/TabComponent/Tabs";

function Javascript() {
  const Quiznames = {
    prop1: "Basics",
    prop2: "Data Types",
    prop3: "JQuiz3",
    prop4: "JQuiz4",
    prop5: "JQuiz5",
    prop6: "JQuiz6",
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
  ];
  return (
    <div>
      <Tabs Quiznames={Quiznames} Questionset={Questionset} />
    </div>
  );
}

export default Javascript;
