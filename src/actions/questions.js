import { _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const GET_CURRENT_QUESTION = 'GET_CURRENT_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        console.log("new question", optionOneText, optionTwoText);
        return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
            .then((question) => dispatch(addQuestion(question)))
    }
}

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})

export const getCurrentQuestion = (question) => ({
    type: GET_CURRENT_QUESTION,
    question
})