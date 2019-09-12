import React from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

import FollowerCard from "./components/FollowerCard";
import Usercard from "./components/Usercard.js";

const FlexCenter = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const FollowCardContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const H2 = ({ className, children }) => (
  <h2 className={className}>{children}</h2>
);

const StyledH2 = styled(H2)`
  border-bottom: solid black;
  margin: 25px auto;
  width: 10%;

  &:first-child {
    margin-top: 25px;
  }
`;

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
        <StyledH2>My Profile</StyledH2>
        <FlexCenter>
          <Usercard myProfile={this.state.myProfile} />
        </FlexCenter>
        <StyledH2>Followers</StyledH2>
        <FlexCenter>
          {this.state.myFollowers.map(follower => {
            return (
              <FollowCardContainer>
                <FollowerCard follower={follower} />
              </FollowCardContainer>
            );
          })}
        </FlexCenter>
      </div>
    );
  }
}

export default App;
