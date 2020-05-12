import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};
