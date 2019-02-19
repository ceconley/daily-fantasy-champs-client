const store = require('../store.js')
const toastr = require('toastr')

toastr.options = {
  'positionClass': 'toast-top-center',
  'preventDuplicates': true,
  'showDuration': '500',
  'hideDuration': '500',
  'timeOut': '2000',
  'extendedTimeOut': '5000'
}

$('.logged-in').hide()
$('#sign-up-view-div').hide()
$('#change-password-view-div').hide()
$('#available-contest-view-div').hide()
$('#lineups-view-div').hide()
$('#owned-contest-view-div').hide()
$('#individual-contest-view-div').hide()
$('#choose-lineup-view-div').hide()
$('#change-lineup-view-div').hide()
$('.navbar').hide()

const resetAuthForms = () => {
  toastr.clear()
  $('#sign-up')[0].reset()
  $('#log-in')[0].reset()
  $('#change-password')[0].reset()
}

const signUpSuccess = () => {
  resetAuthForms()
  $('#sign-up-view-div').hide()
  $('#log-in-view-div').show()
  $('#change-password-view-div').hide()
  toastr.success('Signed Up Successfully')
}

const signUpFailure = () => {
  resetAuthForms()
  toastr.warning('Sign Up Failed')
}

const logInSuccess = (data) => {
  resetAuthForms()
  store.user = data.user
  $('.logged-in').show()
  $('.logged-out').hide()
  $('#log-in-view-div').hide()
  $('#available-contest-view-div').show()
  $('.navbar').show()
  toastr.success('Logged In Successfully')
}

const logInFailure = () => {
  resetAuthForms()
  toastr.warning('Log In Failed')
}

const changePasswordSuccess = () => {
  resetAuthForms()
  $('#change-password-view-div').hide()
  $('#available-contest-view-div').show()
  $('.navbar').show()
  toastr.success('Password changed successfully')
}

const changePasswordFailure = () => {
  resetAuthForms()
  toastr.warning('Change Password Failed')
}

const logOutSuccess = () => {
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
  $('.navbar').hide()
  toastr.success('Logged Out Successfully')
}

const logOutFailure = () => {
  resetAuthForms()
  toastr.warning('Log Out Failed')
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
