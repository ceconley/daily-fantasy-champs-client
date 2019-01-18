const config = require('./config')
const store = require('./store.js')

const indexContests = () =>
  $.ajax({
    url: config.apiUrl + '/contests',
    method: 'GET'
  })

const showContest = (event) =>
  $.ajax({
    url: config.apiUrl + '/contests/' + event.target.id,
    method: 'GET'
  })

const indexLineups = () =>
  $.ajax({
    url: config.apiUrl + '/lineups',
    method: 'GET'
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

const deleteLineup = (data) =>
  $.ajax({
    url: config.apiUrl + '/lineups/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const indexMyContests = () =>
  $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const updateLineup = (data) =>
  $.ajax({
    url: config.apiUrl + '/lineups/' + store.lineupId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

module.exports = {
  indexContests,
  indexLineups,
  showContest,
  submitLineup,
  createEntry,
  deleteLineup,
  indexMyContests,
  updateLineup
}
