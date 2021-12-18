import { RECEIVE_USERS, UPDATE_USER_ANSWERS } from "../actions/users";
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
        case UPDATE_USER_ANSWERS:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qID]: action.option
                    }
                }
            }
        default:
            return state
    }
}

export default users