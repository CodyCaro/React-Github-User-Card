import React from "react";
import axios from "axios";
import "./App.css";
import FollowerCard from "./components/FollowerCard";
import Usercard from "./components/Usercard.js";

class App extends React.Component {
  state = {
    myProfile: [],
    myFollowers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/CodyCaro")
      .then(res => {
        this.setState({ myProfile: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("noooo: ", err));

    axios
      .get("https://api.github.com/users/CodyCaro/followers")
      .then(res => {
        this.setState({ myFollowers: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("noooo: ", err));
  }

  render() {
    return (
      <div className="App">
        <Usercard myProfile={this.state.myProfile} />
        <h1>Followers</h1>
        {this.state.myFollowers.map(follower => {
          return <FollowerCard follower={follower} />;
        })}
      </div>
    );
  }
}

export default App;
