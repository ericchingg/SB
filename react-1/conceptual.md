### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a front-end libary that allows users to create applications/websites through the use of components.

- What is Babel?
  Babel allows JSX code to be used on web browsers.

- What is JSX?
  JSX allows a delveoper to write HTML in React.

- How is a Component created in React?
  A component is created through the a function that can be used independently.

- What are some difference begtween state and props?
  State is only available to use within the present component, while props can be passed down.

- What does "downward data flow" refer to in React?
  Passing down data or functions through props from a parent component to child.

- What is a controlled component?
  Controlled components are handled by React state through the use of input form data.

- What is an uncontrolled component?
  Uncontrolled components are handled directly from the DOM.

- What is the purpose of the `key` prop when rendering a list of components?
  The key prop is used as a unique identifier, allowing React to differentiate between listed elements.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  If an element is removed, all array indices will be updated.

- Describe useEffect. What use cases is it used for in React components?
  useEffect tells React that a component needs to run a specific function after its been rendered. It can be used for making API calls, timers, etc.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef stores values across renders without causing any re-render.

- When would you use a ref? When wouldn't you use one?
  When you want to reference information in a component without re-rendering.

- What is a custom hook in React? When would you want to write one?
  A custom hook can be reuseable logic that is shared as a function between components. One can use it to avoid duplicate code.
