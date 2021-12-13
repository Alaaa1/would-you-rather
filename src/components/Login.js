import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

const options = [
  {
    key: 'sarahedo',
    text: 'Sarah Edo',
    value: 'sarahedo',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'tylermcginnis',
    text: 'Tyler McGinnis',
    value: 'tylermcginnis',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
  },
  {
    key: 'johndoe',
    text: 'John Doe',
    value: 'johndoe',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
  }
]


class Login extends Component {

  state = {
    value: '',
  }

  getAuthedUser = (authedUser) => {
    console.log(authedUser)
    this.props.dispatch(setAuthedUser(authedUser))
  }

  handleChange = (e, { value }) => {
    console.log(value)
    this.setState({ value })
  }

  render() {
    console.log("users: ", this.props.users)
    return (
      <div>
        <form>
          <Dropdown
            placeholder='Select User'
            fluid
            selection
            options={options}
            onChange={this.handleChange}
          />
          <Link to="/homepage"><button disabled={this.state.value === ''} type='submit' value='login' onClick={() => this.getAuthedUser(this.state.value)}>Login</button></Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.entries(users)
  }
}

export default connect(mapStateToProps)(Login)