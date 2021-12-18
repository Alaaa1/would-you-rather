import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'
export const UPDATE_ANSWERS_VOTES = 'UPDATE_ANSWERS_VOTES'



export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
})

const updateUserAnswers = (authedUser, qID, option) => ({
    type: UPDATE_USER_ANSWERS,
    authedUser,
    qID,
    option,
})

const updateAnswersVotes = (authedUser, qID, option) => ({
    type: UPDATE_ANSWERS_VOTES,
    authedUser,
    qID,
    option
})

export const handleUpdateUserAnswers = (qID, answer) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return _saveQuestionAnswer({ authedUser, qid: qID, answer }).then(dispatch(updateUserAnswers(authedUser, qID, answer))).then(dispatch(updateAnswersVotes(authedUser, qID, answer)))
    }
}