In this activity we will practice using the `useRef` Hook by creating a Todo list application.

# Instructions

* Create a `reducer` that handles Todo creation.

* This time, instead of passing a string as an argument to the `dispatch` method, `action` should be an object with the following properties:

  * `type`: The string that will be used to identify each action.

  * `name`: The string that is passed in through your input field.

* The second argument in `useReducer` should be an empty array.

* Each case should return a _new_ array with the updated properties. 

* **BONUS**: Update the component so that there is a button next to each list item called `remove` that removes that Todo from the list. You will need to create a new case in your reducer method that returns a _new_ array without the removed Todo. ***HINT***: You may want to pass a unique identifier as an argument in the `dispatch` method.
