import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Questions from "./Questions";

const panes = [
  {
    menuItem: "Unanswered Questions",
    render: () => (
      <Tab.Pane style={{ textAlign: "center", margin: "0 auto" }}>
        <Questions answered={false} />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered Questions",
    render: () => (
      <Tab.Pane style={{ textAlign: "center", margin: "0 auto" }}>
        <Questions answered={true} />
      </Tab.Pane>
    ),
  },
];

class QuestionsTab extends Component {
  render() {
    return (
      <Tab panes={panes} style={{ textAlign: "center", margin: "0 auto" }} />
    );
  }
}

export default QuestionsTab;
