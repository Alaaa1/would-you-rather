import { combineReducers } from 'redux'
import { authedUser } from './authedUser'
import { questions } from './questions'
import { users } from './users'

import { currentQuestion } from './currentQuestion'

export default combineReducers({
    authedUser,
    users,
    questions,
    currentQuestion,
})