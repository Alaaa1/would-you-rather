import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleOptionOne = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionOne: text,
    }));
  };

  handleOptionTwo = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionTwo: text,
    }));
  };

  handleClick = (e) => {
    const optionOne = this.state.optionOne;
    const optionTwo = this.state.optionTwo;

    this.props.dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };

  render() {
    return (
      <div>
        <Navbar />
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>New Question</h2>
        <h3 style={{ textAlign: "center", margin: "0 auto" }}>
          Would You Rather
        </h3>
        <br />
        <Form style={{ textAlign: "center", margin: "0 auto", width: "50%" }}>
          <label htmlFor="optionOne">Type poll option 1:</label>
          <input
            id="optionOne"
            type="text"
            value={this.state.optionOne}
            onChange={this.handleOptionOne}
          />
          <label htmlFor="optionTwo">Type poll option 2:</label>
          <input
            id="optionTwo"
            type="text"
            value={this.state.optionTwo}
            onChange={this.handleOptionTwo}
          />
          <Link to="/homepage">
            <button
              type="submit"
              value="submit"
              onClick={(e) => this.handleClick(e)}
            >
              Submit
            </button>
          </Link>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
