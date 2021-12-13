import { GET_CURRENT_QUESTION } from '../actions/questions'

export const currentQuestion = (state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_QUESTION:
            console.log('success', action.question)
            return {
                ...state,
                ...action.question
            }
        default: return state
    }
}