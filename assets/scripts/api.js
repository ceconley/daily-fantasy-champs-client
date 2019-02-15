const config = require('./config')
const store = require('./store.js')

// CREATE

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

// READ - INDEX

const indexContests = () =>
  $.ajax({
    url: config.apiUrl + '/contests',
    method: 'GET'
  })

const indexEntries = () =>
  $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET'
  })

// READ - SHOW

const showContest = (event) =>
  $.ajax({
    url: config.apiUrl + `/contests/${event.target.id}`,
    method: 'GET'
  })

// UPDATE

const updateLineup = (data) =>
  $.ajax({
    url: config.apiUrl + `/lineups/${store.lineupId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

const updateContest = (data) =>
  $.ajax({
    url: config.apiUrl + `/contests/${store.contestId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

// DELETE

const deleteEntry = (data) =>
  $.ajax({
    url: config.apiUrl + `/entries/${store.entryId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

module.exports = {
  createLineup,
  createEntry,
  indexContests,
  indexEntries,
  showContest,
  updateLineup,
  updateContest,
  deleteEntry
}
