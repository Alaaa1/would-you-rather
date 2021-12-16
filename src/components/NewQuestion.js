import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";

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
    e.preventDefault();

    const optionOne = this.state.optionOne;
    const optionTwo = this.state.optionTwo;
    console.log("new question", optionOne, optionTwo);

    this.props.dispatch(
      handleAddQuestion(this.state.optionOne, this.state.optionTwo)
    );

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };

  render() {
    return (
      <Form>
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
        <button
          type="submit"
          value="submit"
          onClick={(e) => this.handleClick(e)}
        >
          Submit
        </button>
      </Form>
    );
  }
}

export default connect()(NewQuestion);
