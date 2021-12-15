import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Poll extends Component {

    handleClick = (e) => {
        this.setState({ value: e.target.value })
    }

    handeVoting = () => {

    }

    render() {
        const question = this.props.currentQuestion
        return (
            <Card>
                {!(this.props.currentQuestion.answered) && (<><Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={this.props.users[question.author].avatarURL}
                    />
                    <Card.Header>{this.props.users[question.author].name}</Card.Header>
                    <Card.Description>
                        <h3>Would You Rather</h3>
                        <form>
                            <input type="radio" id="optionOne" name="vote" value={question.optionOne.text} onClick={(e) => this.handleClick(e)} />
                            <label htmlFor="optionOne"> {question.optionOne.text}</label>
                            <p>Or</p>
                            <input type="radio" id="optionTwo" name="vote" value={question.optionTwo.text} onClick={(e) => this.handleClick(e)} />

                            <label htmlFor="optionTwo"> {question.optionTwo.text}</label>
                        </form>
                    </Card.Description>
                </Card.Content>
                    <Card.Content extra>
                        <div className='ui Two buttons'>
                            <Button basic color='green' onClick={this.handeVoting}>
                                Vote
                            </Button>
                        </div>
                    </Card.Content></>)}

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