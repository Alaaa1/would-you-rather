import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Question from './Question'
import { connect } from 'react-redux'

class Questions extends Component {

    getAnsweredQuestions = () => (
        Object.keys(this.props.questions).filter(question => Object.keys(this.props.users[this.props.authedUser].answers).includes(question))
    )

    getUnAnsweredQuestions = () => (
        Object.keys(this.props.questions).filter(question => !(Object.keys(this.props.users[this.props.authedUser].answers)).includes(question))
    )
    render() {
        return (
            <Card.Group>
                {(this.props.answered) && (this.getAnsweredQuestions().map(qId => {
                    return <Question id={qId} key={qId} />
                }))}
                {!(this.props.answered) && (this.getUnAnsweredQuestions().map(qId => {
                    return <Question id={qId} key={qId} />
                }))}
            </Card.Group>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, { answered }) => {
    return {
        questions,
        qID: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        answered,
        authedUser,
        users,
    }
}

export default connect(mapStateToProps)(Questions)