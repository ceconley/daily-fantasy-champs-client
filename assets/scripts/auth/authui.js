const store = require('../store.js')
// const toastr = require('../toasts.js')

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
  $('.message').text('Signed Up Successfully')
  resetAuthForms()
  $('#sign-up-view-div').hide()
  $('#log-in-view-div').show()
  $('#change-password-view-div').hide()
}

const signUpFailure = function () {
  $('.message').text('Signed Up Failed')
  resetAuthForms()
}

const logInSuccess = function (data) {
  store.user = data.user
  $('.message').text('Logged In Successfully')
  resetAuthForms()
  $('.logged-in').show()
  $('.logged-out').hide()
  $('#log-in-view-div').hide()
  $('#available-contest-view-div').show()
  $('.nav-bar').show()
}

const logInFailure = function () {
  $('.message').text('Log In Failed')
  resetAuthForms()
}

const changePasswordSuccess = function () {
  $('.message').text('Password changed successfully')
  $('#change-password-view-div').hide()
  $('#available-contest-view-div').show()
  $('.nav-bar').show()
  resetAuthForms()
}

const changePasswordFailure = function () {
  $('.message').text('Error on password change')
  resetAuthForms()
}

const logOutSuccess = function () {
  $('.message').text('Logged Out Successfully')
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
  $('.message').text('Log Out Failed')
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
