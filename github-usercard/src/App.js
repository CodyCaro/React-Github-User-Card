import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    myProfile: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/CodyCaro")
      .then(res => {
        this.setState({ myProfile: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("noooo: ", err));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
