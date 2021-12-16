import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions"

export const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            console.log()
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state
    }
}

export default questions