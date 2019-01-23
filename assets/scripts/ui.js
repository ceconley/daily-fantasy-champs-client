const showAllContests = require('./templates/contest-table.handlebars')
const showAllLineups = require('./templates/lineup-card.handlebars')
const showOneContest = require('./templates/contest-card.handlebars')
const showMyContests = require('./templates/own-contest-table.handlebars')
const store = require('./store.js')
const api = require('./api')

// CREATE ACTIONS

const onCreatelineupSuccess = (response) => {
  console.log(response)
  store.lineup = response.lineup
  $('#modalEnterLineup').modal('show')
  onShowEntrySuccess()
  // api.showEntry()
  //   .then(onShowEntrySuccess)
  //   .catch(onShowEntryFailure)
}

const onCreatelineupFailure = (error) => {
  console.error(error)
}

const onCreateEntrySuccess = () => {
  $('#modalEnterLineup').modal('hide')
  $('#choose-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  api.indexMyContests()
    .then(onIndexMyContestsSuccess)
    .catch(onIndexMyContestsFailure)
}

const onCreateEntryFailure = (error) => {
  console.error(error)
}

const onCreateUpdatedLineupSuccess = (response) => {
  console.log(response.lineup.id)
  store.lineup = response.lineup
  $('#modalEnterUpdatedLineup').modal('show')
}

const onCreateUpdatedLineupFailure = (error) => {
  console.error(error)
}

// UPDATE ACTIONS

const onUpdateLineupSuccess = () => {
  $('#modalEnterUpdatedLineup').modal('hide')
  $('#change-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  api.indexMyContests()
    .then(onIndexMyContestsSuccess)
    .catch(
      onIndexMyContestsFailure)
}

const onUpdateLineupFailure = (error) => {
  console.error(error)
}

// DELETE ACTIONS

const onDeleteLineupSuccess = () => {
  api.indexLineups()
    .then(onIndexlineupsSuccess)
    .catch(onIndexlineupsFailure)
}
const onDeleteLineupFailure = (error) => {
  console.error(error)
}

// READ ACTIONS
// INDEX

const onIndexContestsSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestsFailure = (error) => {
  console.error(error)
}

const onIndexlineupsSuccess = (response) => {
  const entriesAll = response.entries
  const ownerEntries = []
  entriesAll.forEach(function (entry) {
    if (entry.user.id === store.user.id) {
      ownerEntries.push(entry)
    }
  })
  console.log(ownerEntries)
  const showLineupHtml = showAllLineups({ entries: ownerEntries })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupsFailure = (error) => {
  console.error(error)
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
const onIndexMyContestsFailure = (error) => {
  console.error(error)
}

// Show

const onShowContestSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showOneContest({ entries: response.entries })
  $('#contestCardBody').empty()
  $('#contestCardBody').append(showContestsHtml)
}

const onShowContestsFailure = (error) => {
  console.error(error)
}

const onShowEntrySuccess = () => {
  $('.entry-confirm').text(`${store.user.email} is entering ${store.lineup.qb}, ${store.lineup.rb1}, ${store.lineup.rb2}, ${store.lineup.wr1}, ${store.lineup.wr2}, ${store.lineup.wr3}, ${store.lineup.te}, ${store.lineup.flex}, ${store.lineup.dst}, in the ${store.contest.innerHTML} contest.`)
}
const onShowEntryFailure = (error) => {
  console.error(error)
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
