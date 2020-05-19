# Multiple Contexts
In this activity we will continue to practice using the Context API in React. This activity continues where the last activity left off. To help strengthen your Context API skills, you will introduce another Context Object to your application.

## Instructions

* Update this application to include the following:

  * Create a separate Context Object for the languages.

  * Update the application so that data pertaining to the user is stored in a nested object within the Gallery state.

  * Uncomment the `<CardContainer />` and check to see if your card functions properly.

  * Add the ability to select a different language.

  * Ensure that data pertaining to the language is stored in a different nested object within the Gallery state.

  * If a new language is selected, the card should be updated with the information of the first user of the selected language.

### Hints

* Try to get the user functionality working before moving on to the language selector.

* Make sure you call `loadUser` whenever the language changes.
