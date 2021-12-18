import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions"
import { UPDATE_ANSWERS_VOTES } from "../actions/users"

export const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case UPDATE_ANSWERS_VOTES:
            console.log(state[action.qID][action.option])
            return {
                ...state,
                [action.qID]: {
                    ...state[action.qID],
                    [action.option]: {
                        ...state[action.qID][action.option],
                        votes: state[action.qID][action.option].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}

export default questions