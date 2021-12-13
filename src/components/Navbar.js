import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Menu } from 'semantic-ui-react'

class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                />
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