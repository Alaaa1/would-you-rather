import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_USER = 'sarahedo'

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_USER))
            dispatch(hideLoading())
        })
    }
}