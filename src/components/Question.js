import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        console.log(this.props)
        return (
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Steve Sanders</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Card.Description>
                        <h3>Would You Rather</h3>
                        <p>{this.props.question.optionOne.text}</p>
                        <p>Or</p>
                        <p>{this.props.question.optionTwo.text}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = ({ authedUser, questions }, { id }) => {
    const question = questions[id]

    return {
        authedUser,
        question,
    }
}

export default connect(mapStateToProps)(Question)