import { combineReducers } from 'redux'
import { authedUsers } from './authedUser'
import { questions } from './questions'
import { users } from './users'

export default combineReducers({
    authedUsers,
    users,
    questions
})