import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Questions from './Questions'

const panes = [
    {
        menuItem: 'Tab 1', render: () => <Tab.Pane><Questions /></Tab.Pane>,
    },
    { menuItem: 'Tab 2', render: () => <Tab.Pane><Questions /></Tab.Pane> },
]

class QuestionsTab extends Component {
    render() {
        return <Tab panes={panes} />
    }
}



export default QuestionsTab