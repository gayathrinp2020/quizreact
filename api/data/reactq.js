const reactq = [
  {
    tabKey: "prop1",
    questions: [
      {
        question: "What is a React component?",
        options: [
          "A JavaScript function or class that returns JSX",
          "A folder containing multiple React files",
          "A styling framework for React applications",
          "A data structure for storing component state",
        ],
        answer: "A JavaScript function or class that returns JSX",
      },
      {
        question: "What is the purpose of props in React?",
        options: [
          "To pass data from parent component to child component",
          "To define component styles and layout",
          "To handle user interactions and events",
          "To manage component state and lifecycle",
        ],
        answer: "To pass data from parent component to child component",
      },
      {
        question:
          "What is the lifecycle method used to fetch data from an API in a class component?",
        options: [
          "componentDidMount",
          "componentWillUnmount",
          "componentDidUpdate",
          "render",
        ],
        answer: "componentDidMount",
      },
      {
        question:
          "Which hook is used to manage state in a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useState",
      },
      {
        question: "What is the purpose of the virtual DOM in React?",
        options: [
          "To improve performance by minimizing direct manipulation of the actual DOM",
          "To enforce component encapsulation and reusability",
          "To handle component rendering and updates",
          "To manage component communication and data flow",
        ],
        answer:
          "To improve performance by minimizing direct manipulation of the actual DOM",
      },
    ],
  },
  {
    tabKey: "prop2",
    questions: [
      {
        question: "What is JSX in React?",
        options: [
          "A syntax extension for JavaScript that allows writing HTML-like code",
          "A JavaScript library for building user interfaces",
          "A package manager for React applications",
          "A state management solution in React",
        ],
        answer:
          "A syntax extension for JavaScript that allows writing HTML-like code",
      },
      {
        question: "How is JSX different from HTML?",
        options: [
          "JSX allows embedding JavaScript expressions within curly braces",
          "JSX supports a different set of tags and attributes than HTML",
          "JSX requires a different file extension (.jsx) than HTML",
          "JSX is not rendered directly by the browser",
        ],
        answer:
          "JSX allows embedding JavaScript expressions within curly braces",
      },
      {
        question: "Can JSX elements have children?",
        options: [
          "Yes, JSX elements can have nested child elements",
          "No, JSX elements cannot have any children",
          "JSX elements can only have text content as children",
          "JSX elements can have children, but they must be passed as props",
        ],
        answer: "Yes, JSX elements can have nested child elements",
      },
      {
        question: "What is the role of Babel in JSX?",
        options: [
          "Babel transpiles JSX code into plain JavaScript",
          "Babel handles the rendering of JSX elements in the browser",
          "Babel optimizes JSX code for better performance",
          "Babel enforces JSX syntax rules and conventions",
        ],
        answer: "Babel transpiles JSX code into plain JavaScript",
      },
      {
        question: "How can you add inline styles to JSX elements?",
        options: [
          "By using the style attribute with a JavaScript object",
          "By importing a separate CSS file and linking it to the JSX component",
          "By adding inline CSS using the <css> tag within JSX",
          "By using the className attribute to reference a CSS class",
        ],
        answer: "By using the style attribute with a JavaScript object",
      },
    ],
  },
  {
    tabKey: "prop3",
    questions: [
      {
        question: "What are props in React?",
        options: [
          "Properties that are passed from a parent component to a child component",
          "Internal data that is managed within a component",
          "Event handlers used to handle user interactions",
          "Methods used for fetching data from an API",
        ],
        answer:
          "Properties that are passed from a parent component to a child component",
      },
      {
        question: "How are props passed to a child component?",
        options: [
          "Using the parent component's state",
          "Using the child component's state",
          "Using the render method of the parent component",
          "By passing them as attributes in the JSX component",
        ],
        answer: "By passing them as attributes in the JSX component",
      },
      {
        question: "What is state in React?",
        options: [
          "Internal data that is managed within a component",
          "Properties that are passed from a parent component to a child component",
          "Event handlers used to handle user interactions",
          "Methods used for fetching data from an API",
        ],
        answer: "Internal data that is managed within a component",
      },
      {
        question: "How is state initialized in a class component?",
        options: [
          "Using the constructor method",
          "Using the render method",
          "Using the setState method",
          "By passing it as a prop from a parent component",
        ],
        answer: "Using the constructor method",
      },
      {
        question: "What is the difference between props and state?",
        options: [
          "Props are immutable and are passed from a parent component, while state is mutable and is managed within a component",
          "Props are used for functional components, while state is used for class components",
          "Props are used for data storage, while state is used for UI rendering",
          "Props and state are interchangeable terms in React",
        ],
        answer:
          "Props are immutable and are passed from a parent component, while state is mutable and is managed within a component",
      },
    ],
  },

  {
    tabKey: "prop4",
    questions: [
      {
        question: "What are React's lifecycle methods?",
        options: [
          "Methods that are invoked during the different stages of a component's life, such as mounting, updating, and unmounting",
          "Methods used to handle user interactions in a component",
          "Methods for fetching data from an API",
          "Methods for rendering JSX components",
        ],
        answer:
          "Methods that are invoked during the different stages of a component's life, such as mounting, updating, and unmounting",
      },
      {
        question:
          "Which lifecycle method is called immediately after a component is added to the DOM?",
        options: [
          "componentDidMount()",
          "componentWillMount()",
          "componentDidUpdate()",
          "componentWillUnmount()",
        ],
        answer: "componentDidMount()",
      },
      {
        question:
          "Which lifecycle method is called before a component is removed from the DOM?",
        options: [
          "componentWillUnmount()",
          "componentDidMount()",
          "componentWillUpdate()",
          "componentDidUpdate()",
        ],
        answer: "componentWillUnmount()",
      },
      {
        question:
          "Which lifecycle method is called whenever there is a change to a component's props or state?",
        options: [
          "componentDidUpdate()",
          "componentWillReceiveProps()",
          "shouldComponentUpdate()",
          "componentWillUpdate()",
        ],
        answer: "componentDidUpdate()",
      },
      {
        question:
          "Which lifecycle method is called before a component receives new props?",
        options: [
          "componentWillReceiveProps()",
          "componentDidMount()",
          "shouldComponentUpdate()",
          "componentWillUpdate()",
        ],
        answer: "componentWillReceiveProps()",
      },
    ],
  },
  {
    tabKey: "prop5",
    questions: [
      {
        question: "What is React Router?",
        options: [
          "A library for handling routing in React applications",
          "A tool for state management in React applications",
          "A utility for managing form data in React applications",
          "A package for styling React components",
        ],
        answer: "A library for handling routing in React applications",
      },
      {
        question: "Which component is used to define a route in React Router?",
        options: ["Route", "Link", "Router", "Switch"],
        answer: "Route",
      },
      {
        question:
          "Which component is used to navigate to different routes in React Router?",
        options: ["Link", "Route", "Router", "Switch"],
        answer: "Link",
      },
      {
        question:
          "Which component is used to render the first route that matches the current location in React Router?",
        options: ["Switch", "Route", "Link", "Router"],
        answer: "Switch",
      },
      {
        question:
          "What is the purpose of the `exact` prop in React Router's Route component?",
        options: [
          "To ensure that the route matches the location exactly (strict matching)",
          "To specify the order of the routes",
          "To enable animation for route transitions",
          "To handle authentication for the route",
        ],
        answer:
          "To ensure that the route matches the location exactly (strict matching)",
      },
    ],
  },
  {
    tabKey: "prop6",
    questions: [
      {
        question: "What is state in React?",
        options: [
          "A JavaScript object used to store and manage data within a component",
          "A method for updating the appearance of a component",
          "A built-in React component for managing data",
          "A technique for optimizing React performance",
        ],
        answer:
          "A JavaScript object used to store and manage data within a component",
      },
      {
        question: "Which method is used to update the state in React?",
        options: [
          "setState()",
          "updateState()",
          "modifyState()",
          "changeState()",
        ],
        answer: "setState()",
      },
      {
        question:
          "What is the recommended way to initialize state in a React component?",
        options: [
          "Inside the constructor using this.state",
          "Inside the render method using this.state",
          "Inside a separate initialization method",
          "State is automatically initialized in React components",
        ],
        answer: "Inside the constructor using this.state",
      },
      {
        question: "What is the role of props in React?",
        options: [
          "Props are used to pass data from a parent component to a child component",
          "Props are used to update the state of a component",
          "Props are used to handle user interactions in a component",
          "Props are used to define the structure of a component",
        ],
        answer:
          "Props are used to pass data from a parent component to a child component",
      },
      {
        question: "What is the difference between state and props in React?",
        options: [
          "State is mutable and controlled by the component, while props are immutable and passed from parent components",
          "State is used for functional components, while props are used for class components",
          "State is optional in React, while props are mandatory",
          "State and props are the same and can be used interchangeably in React",
        ],
        answer:
          "State is mutable and controlled by the component, while props are immutable and passed from parent components",
      },
    ],
  },
  {
    tabKey: "prop7",
    questions: [
      {
        question: "What are React Hooks?",
        options: [
          "Functions that allow you to use state and other React features in functional components",
          "Hooks are a new type of React component",
          "Hooks are used for styling in React",
          "Hooks are used for routing in React",
        ],
        answer:
          "Functions that allow you to use state and other React features in functional components",
      },
      {
        question: "Which hook is used to add state to a functional component?",
        options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
        answer: "useState()",
      },
      {
        question: "What is the purpose of the useEffect() hook?",
        options: [
          "To perform side effects in a functional component",
          "To define custom hooks in React",
          "To handle form submissions in React",
          "To create reusable components in React",
        ],
        answer: "To perform side effects in a functional component",
      },
      {
        question: "Which hook is used to handle context in React?",
        options: ["useContext()", "useReducer()", "useState()", "useEffect()"],
        answer: "useContext()",
      },
      {
        question: "What does the useReducer() hook do?",
        options: [
          "Allows you to manage state using a reducer function",
          "Allows you to define custom hooks",
          "Allows you to perform side effects",
          "Allows you to handle routing in React",
        ],
        answer: "Allows you to manage state using a reducer function",
      },
    ],
  },
];
module.exports = reactq;
