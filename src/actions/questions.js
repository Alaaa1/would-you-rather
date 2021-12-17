import { _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const GET_CURRENT_QUESTION = 'GET_CURRENT_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    }
}

const addQuestionToUser = (authedUser, question) => {
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        question
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        console.log(getState())
        const { authedUser } = getState()
        return _saveQuestion({ optionOneText, optionTwoText, author: authedUser })
            .then((question) => dispatch(addQuestion(question))).then(action => dispatch(addQuestionToUser(authedUser, action.question)))
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