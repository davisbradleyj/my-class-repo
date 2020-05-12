In this activity we will practice using the useContext Hook in React by creating a global state for our articles.

  # Instructions

  * Update this application to accomplish the following:

  * Combine all of the `useState` Hooks that are relevant to the information retreived from the Wikipedia article into a single `useState` Hook.
check
  * Create a Context Object that will be used to store the state of the article called `ArticleContext`.
check
  * Wrap the components that will need access to the Context Object with a Context Provider.
check
  * Update the `SearchResults` component with the `useContext` Hook to to elimintate the need for props.