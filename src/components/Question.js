import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Question extends Component {
    render() {
        console.log(this.props)
        return (
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={this.props.users[this.props.question.author].avatarURL}
                    />
                    <Card.Header>{this.props.users[this.props.question.author].name}</Card.Header>
                    <Card.Description>
                        <h3>Would You Rather</h3>
                        <p>{this.props.question.optionOne.text}</p>
                        <p>Or</p>
                        <p>{this.props.question.optionTwo.text}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui one buttons'>
                        <Button basic color='green'>
                            Vote
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
    const question = questions[id]

    return {
        authedUser,
        question,
        users
    }
}

export default connect(mapStateToProps)(Question)