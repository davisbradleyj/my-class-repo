import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  
  state = {
    friends: friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  }

  return () {
    <Wrapper>
      <h1 className="title">Friends List</h1>
        {the.state.friends.map(friend => {
        <FriendCard
        removeFriend={this.removeFriend}
        id={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.occupation}
      />
      })}
    </Wrapper>
    }
}

export default App;
