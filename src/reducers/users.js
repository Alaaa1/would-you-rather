import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION_TO_USER } from "../actions/questions"

export const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            let question = action.question
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([question.id])
                }
            }
        default:
            return state
    }
}

export default users