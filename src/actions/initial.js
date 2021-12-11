import { _getUsers, _getQuestions } from '../../_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_USER = 'sarahedo'

export const handleInitialData = () => {
    return (dispatch) => {
        return Promise.all([_getQuestions, _getUsers]).then(({ questions, users }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_USER))
        })
    }
}