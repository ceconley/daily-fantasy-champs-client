const config = require('./config')
const store = require('./store.js')

// CREATE ACTIONS

const createLineup = (data) =>
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

// UPDATE ACTIONS

const updateLineup = (data) =>
  $.ajax({
    url: config.apiUrl + '/entries/' + store.entryId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

// DELETE ACTIONS

const deleteLineup = (data) =>
  $.ajax({
    url: config.apiUrl + '/entries/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

// READ ACTIONS
// INDEX

const indexContests = () =>
  $.ajax({
    url: config.apiUrl + '/contests',
    method: 'GET'
  })

const indexLineups = () =>
  $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET'
  })

const indexMyContests = () =>
  $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

// Show

const showContest = (event) =>
  $.ajax({
    url: config.apiUrl + '/contests/' + event.target.id,
    method: 'GET'
  })

// const showEntry = (event) =>
//   $.ajax({
//     url: config.apiUrl + '/entries/' + event.target.id,
//     method: 'GET'
//   })

module.exports = {
  indexContests,
  indexLineups,
  showContest,
  createLineup,
  createEntry,
  deleteLineup,
  indexMyContests,
  updateLineup
  // showEntry
}
