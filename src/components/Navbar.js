import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Link to="/homepage">
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    /></Link>

                <Link to="/add">
                    <Menu.Item
                        name='New Question'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    /></Link>

                <Link to="/leaderboard">
                    <Menu.Item
                        name='leaderboard'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Link>

                <Menu.Menu position='right'>
                    <Menu.Item name='welcome'>
                        Welcome {this.props.name}!
                    </Menu.Item>
                    <Menu.Item name='avatar'>
                        <img src={this.props.avatar} alt='avatar' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        avatar: users[authedUser].avatarURL,
        name: users[authedUser].name
    }
}

export default connect(mapStateToProps)(Navbar)