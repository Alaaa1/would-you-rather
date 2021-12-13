import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Poll extends Component {
    render() {
        const question = this.props.currentQuestion
        return (
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={this.props.users[question.author].avatarURL}
                    />
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        <h3>Would You Rather</h3>
                        <p>{question.optionOne.text}</p>
                        <p>Or</p>
                        <p>{question.optionTwo.text}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui Two buttons'>
                        <Button basic color='green'>
                            {question.optionOne.text}
                        </Button>
                        <Button basic color='green'>
                            {question.optionOne.text}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = ({ users, authedUser, currentQuestion }) => {
    return {
        authedUser,
        currentQuestion,
        users
    }
}

export default connect(mapStateToProps)(Poll)