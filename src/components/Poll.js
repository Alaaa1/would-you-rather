import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getCurrentQuestion } from "../actions/questions";
import Navbar from "./Navbar";
import { Progress } from "semantic-ui-react";
import "../style/style.css";
import { handleUpdateUserAnswers } from "../actions/users";

class Poll extends Component {
  handleClick = (e) => {
    this.setState({
      value: e.target.value,
      answered: this.props.currentQuestion.answered,
    });
  };

  handeVoting = (question, answer) => {
    const qid = question.id;
    this.props.dispatch(handleUpdateUserAnswers(qid, answer));
    this.props.dispatch(
      getCurrentQuestion({
        ...this.props.questions[question.id],
        answered: true,
      })
    );
  };

  render() {
    const question = this.props.match.params.id;
    const { users, authedUser, questions } = this.props;
    !questions[question] && this.props.history.push("/notfound");
    return (
      <>
        {questions[question] && (
          <div>
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
              {!this.props.currentQuestion.answered && (
                <>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src={users[questions[question].author].avatarURL}
                    />
                    <Card.Header>
                      {users[questions[question].author].name}
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
                        <label htmlFor="optionOne" className="radioOptions">
                          {" "}
                          {questions[question].optionOne.text}
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

                        <label htmlFor="optionTwo" className="radioOptions">
                          {" "}
                          {questions[question].optionTwo.text}
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
                            questions[question],
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
              {this.props.currentQuestion.answered && (
                <>
                  <Card.Content>
                    <Image
                      floated="right"
                      src={users[questions[question].author].avatarURL}
                    />
                    <Card.Header>
                      {users[questions[question].author].name}
                    </Card.Header>
                    <Card.Description>
                      <h2>Results:</h2>
                      <h3>Would You Rather</h3>
                      <form>
                        {users[authedUser].answers[question] ===
                          "optionOne" && (
                          <p style={{ color: "red" }}>Your Choice!</p>
                        )}
                        <Progress
                          id="optionOne"
                          percent={
                            (questions[question].optionOne.votes.length /
                              (questions[question].optionOne.votes.length +
                                questions[question].optionTwo.votes.length)) *
                            100
                          }
                          progress
                        ></Progress>
                        <label htmlFor="optionOne">
                          {questions[question].optionOne.text}
                          <br />
                          {questions[question].optionOne.votes.length} of
                          {questions[question].optionTwo.votes.length +
                            questions[question].optionOne.votes.length}
                        </label>
                        {users[authedUser].answers[question] ===
                          "optionTwo" && (
                          <p style={{ color: "red" }}>Your Choice!</p>
                        )}
                        <Progress
                          id="optionTwo"
                          percent={
                            (questions[question].optionTwo.votes.length /
                              (questions[question].optionOne.votes.length +
                                questions[question].optionTwo.votes.length)) *
                            100
                          }
                          progress
                        ></Progress>
                        <label htmlFor="optionTwo">
                          {questions[question].optionTwo.text}
                          <br />
                          {questions[question].optionTwo.votes.length} of{" "}
                          {questions[question].optionTwo.votes.length +
                            questions[question].optionOne.votes.length}
                        </label>
                      </form>
                    </Card.Description>
                  </Card.Content>
                </>
              )}
            </Card>
          </div>
        )}
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
