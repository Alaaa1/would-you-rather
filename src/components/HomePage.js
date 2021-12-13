import React, { Component } from 'react'
import QuestionsTabs from './QuestionsTab'
import Navbar from './Navbar'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <QuestionsTabs />
            </div>
        )
    }
}

export default HomePage