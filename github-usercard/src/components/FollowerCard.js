import React from "react";
import axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";

class Usercard extends React.Component {
  state = {
    followerProfile: []
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.props.follower.login}`)
      .then(res => {
        this.setState({ followerProfile: res.data });
        console.log(res.data);
      })
      .catch(err => console.log("noooo: ", err));
  }

  render() {
    return (
      <Card>
        <Image src={this.state.followerProfile.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.state.followerProfile.name}</Card.Header>
          <Card.Meta>
            <span className="date">
              Public Repos: {this.state.followerProfile.public_repos}
            </span>
          </Card.Meta>
          <Card.Description>{this.state.followerProfile.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Followers {this.state.followerProfile.followers}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default Usercard;
