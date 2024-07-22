### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React router allows user to implement page routing in a react application.

- What is a single page application?
  A website or app that utilizes a single web page that can update and change dynamically based on server request.

- What are some differences between client side and server side routing?
  Client side routing only makes a request to the server once. While server side requires making a request to the server on every subsequence URL change.

- What are two ways of handling redirects with React Router? When would you use each?
  useNavigate hook for redirecting after a form submission or logging in a user. using redirect before rendering any code.

- What are two different ways to handle page-not-found user experiences using React Router?
  Using a custom 404 page or using a redirect.

- How do you grab URL parameters from within a component using React Router?
  useParams hook can access the value of a URL parameter.

- What is context in React? When would you use it?
  Context is a way to pass data down components without having to pass the data as props on each level.
  If a user has many nested components, and one requires the use of a state in the parent, Context will allow access on levels.

- Describe some differences between class-based components and function components in React.
  Function components are simple JS functions, while class components are more complex and consist of multiple functions.

- What are some of the problems that hooks were designed to solve?
  Hooks allow users to utilize React features without using a class. An example would be the useState hook.
