import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { getCurrentQuestion } from "../actions/questions";
import Navbar from "./Navbar";
import { handleInitialData } from "../actions/initial.js";

class Poll extends Component {
  handleClick = (e) => {
    this.setState({
      value: e.target.value,
      answered: this.props.currentQuestion.answered,
    });
  };

  handeVoting = (authedUser, question, answer) => {
    const qid = question.id;
    _saveQuestionAnswer({ authedUser, qid, answer });
    this.props
      .dispatch(handleInitialData(authedUser))
      .then(() =>
        this.props.dispatch(
          getCurrentQuestion({
            ...this.props.questions[question.id],
            answered: true,
          })
        )
      );
    console.log(this.state);
  };

  render() {
    const question = this.props.currentQuestion;
    return (
      <>
        <Navbar />
        <Card>
          {/*If not answered */}
          {!question.answered && (
            <>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src={this.props.users[question.author].avatarURL}
                />
                <Card.Header>
                  {this.props.users[question.author].name}
                </Card.Header>
                <Card.Description>
                  <h3>Would You Rather</h3>
                  <form>
                    <input
                      type="radio"
                      id="optionOne"
                      name="vote"
                      value="optionOne"
                      onClick={(e) => this.handleClick(e)}
                      required
                    />
                    <label htmlFor="optionOne">
                      {" "}
                      {question.optionOne.text}
                    </label>
                    <p>Or</p>
                    <input
                      type="radio"
                      id="optionTwo"
                      name="vote"
                      value="optionTwo"
                      onClick={(e) => this.handleClick(e)}
                      required
                    />

                    <label htmlFor="optionTwo">
                      {" "}
                      {question.optionTwo.text}
                    </label>
                  </form>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui Two buttons">
                  <Button
                    basic
                    color="green"
                    onClick={() =>
                      this.handeVoting(
                        this.props.authedUser,
                        question,
                        this.state.value
                      )
                    }
                  >
                    Vote
                  </Button>
                </div>
              </Card.Content>
            </>
          )}
          {/*If answered */}
          {question.answered && (
            <>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src={this.props.users[question.author].avatarURL}
                />
                <Card.Header>
                  {this.props.users[question.author].name}
                </Card.Header>
                <Card.Description>
                  <h3>Would You Rather</h3>
                  <form>
                    <progress
                      id="optionOne"
                      value={question.optionOne.votes.length}
                      max={
                        question.optionOne.votes.length +
                        question.optionTwo.votes.length
                      }
                    ></progress>

                    <progress
                      id="optionTwo"
                      value={question.optionTwo.votes.length}
                      max={
                        question.optionOne.votes.length +
                        question.optionTwo.votes.length
                      }
                    >
                      {" "}
                    </progress>
                  </form>
                </Card.Description>
              </Card.Content>
            </>
          )}
        </Card>
      </>
    );
  }
}

const mapStateToProps = ({ users, authedUser, currentQuestion, questions }) => {
  return {
    authedUser,
    currentQuestion,
    users,
    questions,
  };
};

export default connect(mapStateToProps)(Poll);
