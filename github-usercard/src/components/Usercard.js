import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class Usercard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.myProfile.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.myProfile.name}</Card.Header>
          <Card.Meta>
            <span className="date">
              Public Repos: {this.props.myProfile.public_repos}
            </span>
          </Card.Meta>
          <Card.Description>
            Always a student trying to achieve the never ending goal of master.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Followers {this.props.myProfile.followers}
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default Usercard;
