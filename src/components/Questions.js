import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Question from './Question'
import { connect } from 'react-redux'

class Questions extends Component {
    render() {
        console.log(this.props)
        return (
            <Card.Group>
                {this.props.qID.map(qID => (
                    <Question key={qID} id={qID} />
                ))}
            </Card.Group>
        )
    }
}

const mapStateToProps = ({ questions }) => {
    return {
        qID: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Questions)