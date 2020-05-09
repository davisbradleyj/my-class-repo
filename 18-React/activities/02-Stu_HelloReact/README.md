# Hello React

In this activity, we will dissect a simple React application.

## Instructions

* If you haven't already, generate a starter React app using Create React App. You can do this by running `npx create-react-app reactpractice`. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules.

* Once you have a `reactpractice` React app generated, delete the `src` folder inside of your starter app and replace it with the [src](Unsolved/src) provided with this activity.

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

### HelloReact.js

* Then go into the `src` folder and with your partner, try to answer the following questions:

  * What's happening inside of `src/components/HelloReact.js`? How does it relate to the content being rendered to the browser?

  - declares the "<p> Hello World <p>" component, then exporting that component, function returns some JSX

### App.js

* Open the `src/App.js` file, what's going on in this file? Try to answer the following questions:

  * What does the `App` function return?

  - Imports the component HelloReact to return the "<p> Hello World <p>" declared in HelloReact.js, another component defined

  * Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?

  - Likely tied into the data flow dependencies to keep react in scope throughout the process, required anytime there is a component for react (like require) 

### index.js

* Open the `src/index.js` file and go over the code. Notice that we're importing the `ReactDOM` library. Try to answer the following questions:

  * Do you remember what the purpose of `ReactDOM.render` is? What is it doing?

  - Rendering the components of HelloReact and App to the page

  * Is this where our components are rendered to the DOM?

  - Yes

  * Instead of splitting our files up into `App`, `components/HelloReact` and `index`, is it possible to just write our entire Hello World app in the `index.js` file?

  - Unsure, does not feel like we could reference existing components if everything in one file. Yes, react is unopinionated
