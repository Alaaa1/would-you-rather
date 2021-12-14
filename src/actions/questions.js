export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const GET_CURRENT_QUESTION = 'GET_CURRENT_QUESTION'

export const receiveQuestions = (questions) => (
    {
        type: RECEIVE_QUESTIONS,
        questions,
    }
)

export const getCurrentQuestion = (question) => (
    {
        type: GET_CURRENT_QUESTION,
        question
    }
)