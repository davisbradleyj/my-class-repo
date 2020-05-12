import React from "react";
// more imports from hangar
// input
// boolean
// number

function Survey() {
  // more const variables
  // referencing the imports

  const handleSubmit = () => {
    const form = {
      // key:value pairs for assorted items
    }
    console.log(form)
  }

  return (
    <div className="container">
      <h1>Use this form to provide feedback for our product!</h1>
      <h4>What was your favorite thing about our product?</h4>
      {/* add a text area?  */}
      <h4>How would you rate our product?</h4>
      <div className="form-group" >
        <input type="radio" name="rating-1" />1
        <input type="radio" name="rating-1" />2
        <input type="radio" name="rating-1" />3
        <input type="radio" name="rating-1" />4
        <input type="radio" name="rating-1" />5
      </div>
      
      <h4>How did our product make you feel?</h4>
      <div className="form-group emoji" >
        <span role="img" aria-label="angry">
          {/* some sort of action? */}
            😠
        </span>
        <span role="img" aria-label="indifferent">
          {/* some sort of action? */}
            😒
        </span>
        <span role="img" aria-label="happy">
          {/* some sort of action? */}
            😄
        </span>
        <div className="response">
          {/* some sort of action? */}
        </div>
        <div>
      </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Survey;