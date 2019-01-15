const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./authapi.js')
const authUi = require('./authui.js')

const showSignUp = () => {
  $('#sign-up-view-div').show()
  $('#log-in-view-div').hide()
  $('#change-password-view-div').hide()
}
const showLogIn = () => {
  $('#sign-up-view-div').hide()
  $('#log-in-view-div').show()
  $('#change-password-view-div').hide()
}
const showChangePassword = () => {
  $('#sign-up-view-div').hide()
  $('#log-in-view-div').hide()
  $('#change-password-view-div').show()
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
  $('#individual-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
}

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onLogIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.logIn(data)
    .then(authUi.logInSuccess)
    .catch(authUi.logInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const onLogOut = (event) => {
  event.preventDefault()
  authApi.logOut()
    .then(authUi.logOutSuccess)
    .catch(authUi.logOutFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut,
  showSignUp,
  showLogIn,
  showChangePassword
}
