import React, { Component } from "react";
import API from "../api";

class discover extends Component {
  state = {
    image: "",
    results: []
  };

  // When this component mounts, search the Dog API for pictures of kittens
  componentDidMount() {
    this.searchDogs();
  }

  searchDogs = () => {
    API.getDog()
      .then(res =>
        this.setState({ image: res.data.message }))
      .catch(err => console.log(err));
  };

  // When the form is submitted, search the Dog API for `this.state.search`
  handleButton = event => {
    this.searchDogs(this.state.search);
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Can a dog be a good boy if it's female?</h1>
        <h3 className="text-center"> What do you think of this dog? </h3>
        <img className="align-center" src={this.state.image} />
        {/*  Thumbsdown */}     {/*  Thumbs up  */}
        {/*  fetch button */} {/*  fetch button  */}
        {/* Thumbs up initiates a math random x 5 to allow a match if random number */}
        {/* that indicates a sucessful match if random number = 5.  Output text is..*/}
        {/* "You matched!" */}
      </div >
    );
  }
}
  export default discover;