const store = require('../store.js')

$('.logged-in').hide()
$('#sign-up-view-div').hide()
$('#change-password-view-div').hide()
$('#available-contest-view-div').hide()
$('#lineups-view-div').hide()
$('#owned-contest-view-div').hide()
$('#individual-contest-view-div').hide()
$('#choose-lineup-view-div').hide()
$('#change-lineup-view-div').hide()
$('.nav-bar').hide()

const resetAuthForms = () => {
  $('#sign-up')[0].reset()
  $('#log-in')[0].reset()
  $('#change-password')[0].reset()
}

const signUpSuccess = () => {
  // $('.authMessage').html('Signed Up Successfully')
  resetAuthForms()
}

const signUpFailure = function () {
  console.error('error')
  // $('.authMessage').html('Signed Up Failed')
  resetAuthForms()
}

const logInSuccess = function (data) {
  store.user = data.user
  // $('.authMessage').html('Signed In Successfully')
  resetAuthForms()
  $('.logged-in').show()
  $('.logged-out').hide()
  $('#log-in-view-div').hide()
  $('#available-contest-view-div').show()
  $('.nav-bar').show()
}

const logInFailure = function () {
  // $('.authMessage').html('Signed In Failed')
  resetAuthForms()
}

const changePasswordSuccess = function () {
  // $('.authMessage').html('Password changed successfully')
  resetAuthForms()
}

const changePasswordFailure = function () {
  // $('.authMessage').html('Error on password change')
  resetAuthForms()
}

const logOutSuccess = function () {
  // $('.authMessage').html('Signed Out Successfully')
  store.user = null
  resetAuthForms()
  $('.logged-in').hide()
  $('.logged-out').show()
  $('#log-in-view-div').show()
  $('#sign-up-view-div').hide()
  $('#change-password-view-div').hide()
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
  $('#individual-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
  $('.nav-bar').hide()
}

const logOutFailure = function () {
  resetAuthForms()
  // $('.authMessage').html('Signed Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logOutSuccess,
  logOutFailure
}
