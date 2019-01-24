const showAllContests = require('./templates/contest-table.handlebars')
const showAllLineups = require('./templates/lineup-card.handlebars')
const showOneContest = require('./templates/contest-card.handlebars')
const showMyContests = require('./templates/own-contest-table.handlebars')
const store = require('./store.js')
const api = require('./api')
// const toastr = require('./toasts.js')

// CREATE ACTIONS

const onCreatelineupSuccess = (response) => {
  store.lineup = response.lineup
  $('#modalEnterLineup').modal('show')
  onShowEntrySuccess()
}

const onCreatelineupFailure = () => {
  $('.message').text('Failed to save lineup')
}

const onCreateEntrySuccess = () => {
  $('#modalEnterLineup').modal('hide')
  $('#choose-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  $('.message').text('Lineup entered successfully')
  api.indexMyContests()
    .then(onIndexMyContestsSuccess)
    .catch(onIndexMyContestsFailure)
}

const onCreateEntryFailure = () => {
  $('.message').text('Failed to enter lineup')
}

const onCreateUpdatedLineupSuccess = (response) => {
  store.lineup = response.lineup
  $('#modalEnterUpdatedLineup').modal('show')
}

const onCreateUpdatedLineupFailure = () => {
  $('.message').text('Failed to save lineup')
}

// UPDATE ACTIONS

const onUpdateLineupSuccess = () => {
  $('#modalEnterUpdatedLineup').modal('hide')
  $('#change-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  $('.message').text('Lineup updated')
  api.indexMyContests()
    .then(onIndexMyContestsSuccess)
    .catch(onIndexMyContestsFailure)
}

const onUpdateLineupFailure = () => {
  $('.message').text('Lineup did not update')
}

// DELETE ACTIONS

const onDeleteLineupSuccess = () => {
  $('.message').text('Entry deleted')
  api.indexLineups()
    .then(onIndexlineupsSuccess)
    .catch(onIndexlineupsFailure)
}
const onDeleteLineupFailure = () => {
  $('.message').text('Failure deleting Entry')
}

// READ ACTIONS
// INDEX

const onIndexContestsSuccess = (response) => {
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestsFailure = () => {
  $('.message').text('Failed to find contests')
}

const onIndexlineupsSuccess = (response) => {
  const entriesAll = response.entries
  const ownerEntries = []
  entriesAll.forEach(function (entry) {
    if (entry.user.id === store.user.id) {
      ownerEntries.push(entry)
    }
  })
  const showLineupHtml = showAllLineups({ entries: ownerEntries })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupsFailure = () => {
  $('.message').text('Failed to find lineups')
}

const onIndexMyContestsSuccess = (response) => {
  const entriesAll = response.entries
  const ownerEntries = []
  entriesAll.forEach(function (entry) {
    if (entry.user.id === store.user.id) {
      ownerEntries.push(entry)
    }
  })
  const showContestsHtml = showMyContests({ entries: ownerEntries })
  $('#own-contests').empty()
  $('#own-contests').append(showContestsHtml)
}

const onIndexMyContestsFailure = () => {
  $('.message').text('Failed to find your contests')
}

// Show

const onShowContestSuccess = (response) => {
  const entriesAll = response.entries
  const contestEntries = []
  const storeContestId = parseInt(store.contest.id)
  entriesAll.forEach(function (entry) {
    if (entry.contest.id === storeContestId) {
      contestEntries.push(entry)
    }
  })
  const showContestsHtml = showOneContest({ entries: contestEntries })
  $('#contestCardBody').empty()
  $('#contestCardBody').append(showContestsHtml)
  const contestUsers = contestEntries.map(function (entry) {
    return entry.user.id
  })
  if (contestUsers.includes(store.user.id) === true) {
    $('#join-contest').hide()
    $('#contest-card-message').text('You are already entered in this contest')
  }
}

const onShowContestsFailure = () => {
  $('.message').text('Failed to find contest')
}

const onShowEntrySuccess = () => {
  $('.entry-confirm').text(`${store.user.email} is entering ${store.lineup.qb}, ${store.lineup.rb1}, ${store.lineup.rb2}, ${store.lineup.wr1}, ${store.lineup.wr2}, ${store.lineup.wr3}, ${store.lineup.te}, ${store.lineup.flex}, ${store.lineup.dst}, in the ${store.contest.innerHTML} contest.`)
}
const onShowEntryFailure = () => {
  $('.message').text('Failed getting entry')
}

module.exports = {
  onIndexContestsSuccess,
  onIndexContestsFailure,
  onIndexlineupsSuccess,
  onIndexlineupsFailure,
  onShowContestSuccess,
  onShowContestsFailure,
  onCreatelineupSuccess,
  onCreatelineupFailure,
  onCreateEntrySuccess,
  onCreateEntryFailure,
  onDeleteLineupSuccess,
  onDeleteLineupFailure,
  onIndexMyContestsSuccess,
  onIndexMyContestsFailure,
  onCreateUpdatedLineupSuccess,
  onCreateUpdatedLineupFailure,
  onUpdateLineupSuccess,
  onUpdateLineupFailure,
  onShowEntrySuccess,
  onShowEntryFailure
}
