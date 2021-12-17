import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class LeaderBoard extends Component {
  render() {
    const users = this.props.users;
    const userID = Object.keys(users).sort((a, b) => {
      console.log(
        users[b].questions.length + Object.keys(users[b].answers).length
      );
      let score =
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        (users[a].questions.length + Object.keys(users[a].answers).length);
      return score;
    });
    console.log(userID);
    return (
      <>
        <Navbar />
        <h2
          style={{
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Leaderboard
        </h2>
        <Card.Group
          style={{
            textAlign: "center",
            margin: "0 auto",
            width: "25%",
          }}
        >
          <Card>
            <Card.Content>
              <Image floated="right" src={users[userID[0]].avatarURL} />
              <Card.Header>1. {users[userID[0]].name}</Card.Header>
              <Card.Description>
                Answered Question:{" "}
                {Object.keys(users[userID[0]].answers).length}
                <br />
                Created Questions: {users[userID[0]].questions.length}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui">
                <p>
                  Score:{" "}
                  {users[userID[0]].questions.length +
                    Object.keys(users[userID[0]].answers).length}
                </p>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image floated="right" src={users[userID[1]].avatarURL} />
              <Card.Header>2. {users[userID[1]].name}</Card.Header>
              <Card.Description>
                Answered Question:{" "}
                {Object.keys(users[userID[1]].answers).length}
                <br />
                Created Questions: {users[userID[1]].questions.length}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui">
                <p>
                  Score:{" "}
                  {users[userID[1]].questions.length +
                    Object.keys(users[userID[1]].answers).length}
                </p>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image floated="right" src={users[userID[2]].avatarURL} />
              <Card.Header>3. {users[userID[2]].name}</Card.Header>
              <Card.Description>
                Answered Question:{" "}
                {Object.keys(users[userID[2]].answers).length}
                <br />
                Created Questions: {users[userID[2]].questions.length}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui">
                <p>
                  Score:{" "}
                  {users[userID[2]].questions.length +
                    Object.keys(users[userID[2]].answers).length}
                </p>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
