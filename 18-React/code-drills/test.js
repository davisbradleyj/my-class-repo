imageClicked = id => {
    
    // get the ID of the card that is clicked on
    const imageClick = id
    // console.log(imageClick)
    const status = this.state.clickers
    // console.log(status)
    //grab the cards array off state
    const clicked = this.state.clickers
    // console.log(clicked)

    // this gets reassigned
    let indexOfCardClicked;

    // if statement is fired off when an item is clicked on

    //find the card object on state 
    clicked.find(function(element, index) {
      if (element.id === imageClick) {
        
        // console.log("if statement fired off")

        // write our if statement that will return true if clicked

        // console.log("ID: " + id)
        // console.log("image Clicked: " + imageClick)
        // console.log("element: " + element.id)


        // the if statement below works when its changed to true. We just need 
        // to now figure out how the if statment will see if both have been clicked


        // if statement that we are trying to see matches.
        // if (id === imageClick) {
        //   console.log("clicked same one fired off")

        // status[index].buttonClicked = false;
        // }
        // we need to compair if the item has been clicked already.
          // we need to get the ids of whats been clicked:

        console.log("id: " + id)
        
        // This loop will loop over our array of items clicked and compair them.
        for(var i = 0; i < alreadyClicked.length; i++) {

          // this is returning the id of the items in the array (WORKING)
          console.log("returned from array: " + alreadyClicked[i])

          if (alreadyClicked[i] === alreadyClicked[i]) {
            console.log("Working?")
          }
        }
        alreadyClicked.push(id)

        // if (element.id === element.id) {
        //   console.log("Working")
        // }
        // return the index that was clicked
        // index will become the "returnedArray"
        indexOfCardClicked = index;
        return index;


      } else {

        return false;
      }
    });


    // console.log showing "true" or "false"
    // console.log(clicked[indexOfCardClicked].buttonClicked)


    // const test = clicked[indexOfCardClicked].buttonClicked
    // console.log(test)

// see if it has been clicked
// if its === true (has been clicked) call "gameOver" & reset
if (clicked[indexOfCardClicked].buttonClicked === true) {
      
      // Call the game over function
      console.log("if its true statement is working")
      // this.gameOver()
      
    } else {
    // Adding 1 to the score for each click
    this.setState({score : this.state.score + 1})
    // console.log(this.state.score)

    //shuffle the clickers
    this.state.clickers.sort(() => Math.random() - 0.5)
      
  
    }
  }
