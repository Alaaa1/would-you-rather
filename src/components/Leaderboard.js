import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  componentDidMount() {
    const users = this.props.users;
  }

  render() {
    return (
      <Card>
        <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
