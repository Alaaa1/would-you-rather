import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Question from "./Question";
import { connect } from "react-redux";

class Questions extends Component {
  getAnsweredQuestions = () =>
    Object.keys(this.props.questions).filter((question) =>
      Object.keys(this.props.users[this.props.authedUser].answers).includes(
        question
      )
    );

  getUnAnsweredQuestions = () =>
    Object.keys(this.props.questions).filter(
      (question) =>
        !Object.keys(this.props.users[this.props.authedUser].answers).includes(
          question
        )
    );
  render() {
    return (
      <Card.Group>
        {this.props.answered &&
          this.getAnsweredQuestions()
            .sort(
              (a, b) =>
                this.props.questions[b].timestamp -
                this.props.questions[a].timestamp
            )
            .map((qId) => {
              return <Question id={qId} key={qId} answered={true} />;
            })}
        {!this.props.answered &&
          this.getUnAnsweredQuestions()
            .sort(
              (a, b) =>
                this.props.questions[b].timestamp -
                this.props.questions[a].timestamp
            )
            .map((qId) => {
              return <Question id={qId} key={qId} answered={false} />;
            })}
      </Card.Group>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, { answered }) => {
  return {
    questions,
    answered,
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Questions);
