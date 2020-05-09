# React Quiz

In this activity, we will begin by installing a few helpful packages and then explore the React documentation to answer questions.

## Instructions

### Part 1

* Begin installing Create React App globally by running the following command in your terminal:

`npx create-react-app <appname>` where `<appname>` is what you want to name your app. Example: `npx create-react-app practiceapp`.

### Part 2

* While those are installing, work with your group to answer each of the following questions using the [ReactJS Documentation](https://facebook.github.io/react/):

1. In the previous section we installed Create React App. What is it for?

- create a front end build pipeline, so it can be used without any backend

2. What are some benefits of using ReactJS?

- fast learning curve
- component based
- learn once, write anywhere, the view layer of the MVC
- one way data flow, changes in the data result in an updated UI

3. What is a React component? Hint: Check the "Components and Props" section of the React documentation.

- repeatable units of code that returns an element to be written to the page, props (readonly) are the inputs (data passed from parent to child components)
- components can return other componenets, arrays strings etc

4. What is the significance of the `ReactDOM.render` method? Hint: Check the "ReactDOM" section of the documentation.

- renders a react element into DOM, returning a reference to the component.  Previously referenced elements will be updated, and the DOM will mutate to reflect the latest element
- separate package set up to render all react components to the DOM (think of it as the endpoint)

5. What is JSX? Why does Facebook recommend using it? Hint: Check the "Introducing JSX" section of the documentation.

- syntax ext for JS, looks like HTML, 

6. What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the "Installation" section of the React documentation.

- Create React App

7. What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the "Introducing JSX" section of the documentation.

- JS compiler

8. What is the significance of { } curly braces in JSX? Hint: Check the "Introducing JSX" section of the documentation.

- acts like {{}} much like handlebars

9. What is a component prop? Hint: Check the "Components and Props" section of the React documentation.

- function argument
