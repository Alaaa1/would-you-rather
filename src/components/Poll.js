import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { getCurrentQuestion } from "../actions/questions";
import Navbar from "./Navbar";
import { handleInitialData } from "../actions/initial.js";
import { Progress } from "semantic-ui-react";
import "../style/style.css";

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
    this.props.dispatch(handleInitialData(authedUser)).then(() =>
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
    const { users, authedUser } = this.props;
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>Poll</h2>
        <br />
        <Card
          style={{
            textAlign: "center",
            margin: "0 auto",
            display: "block",
            height: "auto",
            minHeight: "100% !important",
            overflow: "auto",
          }}
        >
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
                    <label htmlFor="optionOne" class="radioOptions">
                      {" "}
                      {question.optionOne.text}
                    </label>

                    <center>
                      <p>Or</p>
                    </center>

                    <input
                      type="radio"
                      id="optionTwo"
                      name="vote"
                      value="optionTwo"
                      onClick={(e) => this.handleClick(e)}
                      required
                    />

                    <label htmlFor="optionTwo" class="radioOptions">
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
                  src={this.props.users[question.author].avatarURL}
                />
                <Card.Header>
                  {this.props.users[question.author].name}
                </Card.Header>
                <Card.Description>
                  <h2>Results:</h2>
                  <h3>Would You Rather</h3>
                  <form>
                    {users[authedUser].answers[question.id] === "optionOne" && (
                      <p style={{ color: "red" }}>Your Choice!</p>
                    )}
                    <Progress
                      id="optionOne"
                      percent={
                        (question.optionOne.votes.length /
                          (question.optionOne.votes.length +
                            question.optionTwo.votes.length)) *
                        100
                      }
                      progress
                    ></Progress>
                    <label for="optionOne">
                      {question.optionOne.text}
                      <br />
                      {question.optionOne.votes.length} of
                      {question.optionTwo.votes.length +
                        question.optionOne.votes.length}
                    </label>
                    {users[authedUser].answers[question.id] === "optionTwo" && (
                      <p style={{ color: "red" }}>Your Choice!</p>
                    )}
                    <Progress
                      id="optionTwo"
                      percent={
                        (question.optionTwo.votes.length /
                          (question.optionOne.votes.length +
                            question.optionTwo.votes.length)) *
                        100
                      }
                      progress
                    ></Progress>
                    <label for="optionTwo">
                      {question.optionTwo.text}
                      <br />
                      {question.optionTwo.votes.length} of{" "}
                      {question.optionTwo.votes.length +
                        question.optionOne.votes.length}
                    </label>
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
