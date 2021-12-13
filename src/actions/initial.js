import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


export const handleInitialData = (authedUser) => {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()]).then(([questions, users]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(authedUser))
            dispatch(hideLoading())
        })
    }
}