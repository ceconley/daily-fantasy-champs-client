const config = require('./config')
const store = require('./store.js')

const indexContest = () =>
  $.ajax({
    url: config.apiUrl + '/contests',
    method: 'GET'
  })

const showContest = (event) =>
  $.ajax({
    url: config.apiUrl + '/contests/' + event.target.id,
    method: 'GET'
  })

const indexLineup = () =>
  $.ajax({
    url: config.apiUrl + '/lineups',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const submitLineup = (data) =>
  $.ajax({
    url: config.apiUrl + '/lineups',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

const createEntry = (data) =>
  $.ajax({
    url: config.apiUrl + '/entries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

module.exports = {
  indexContest,
  indexLineup,
  showContest,
  submitLineup,
  createEntry
}
