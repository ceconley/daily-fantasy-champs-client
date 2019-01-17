'use strict'

const authEvents = require('./auth/authevents')
const events = require('./events')

$(() => {
  $('#sign-up-link').on('click', authEvents.showSignUp)
  $('#log-in-link').on('click', authEvents.showLogIn)
  $('#change-password-link').on('click', authEvents.showChangePassword)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#log-in').on('submit', authEvents.onLogIn)
  $('#log-in').on('submit', events.onIndexContest)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#log-out-link').on('click', authEvents.onLogOut)
  $('.close').on('click', authEvents.closeChangePassword)
  $('#my-lineups').on('click', events.showMyLineups)
  $('#my-contests').on('click', events.showMyContests)
  $('#available-contests').on('click', events.showAvailableContests)
  $('#contest-table').on('click', '.contest-name', events.onShowContest)
  $('#contestCardBody').on('click', '#join-contest', events.onChooseLineup)
  // $('#select-lineup').on('submit', events.onSubmitLineup)
  $('#submit-lineup1').on('click', events.onLineup1)
  $('#submit-lineup2').on('click', events.onLineup2)
  $('#submit-lineup3').on('click', events.onLineup3)
  $('#enter-lineup').on('click', events.onEnterLineup)
  
})
