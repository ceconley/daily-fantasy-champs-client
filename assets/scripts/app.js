'use strict'

const authEvents = require('./auth/authevents')
// const events = require('./events')

$(() => {
  $('#sign-up-link').on('click', authEvents.showSignUp)
  $('#log-in-link').on('click', authEvents.showLogIn)
  $('#change-password-link').on('click', authEvents.showChangePassword)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#log-in').on('submit', authEvents.onLogIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#log-out-link').on('click', authEvents.onLogOut)
})
