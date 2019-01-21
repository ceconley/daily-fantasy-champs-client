const showAllContests = require('./../../contest-table.handlebars')
const showAllLineups = require('./../../lineup-card.handlebars')
const showOneContest = require('./../../contest-card.handlebars')
const showMyContests = require('./../../own-contest-table.handlebars')
const store = require('./store.js')
const api = require('./api')

// CREATE ACTIONS

const onSubmitlineupSuccess = (response) => {
  console.log(response)
  store.lineup = response.lineup.id
  $('#modalEnterLineup').modal('show')
}

const onSubmitlineupFailure = (error) => {
  console.error(error)
}

const onCreateEntrySuccess = () => {
  $('#modalEnterLineup').modal('hide')
  $('#choose-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
}

const onCreateEntryFailure = (error) => {
  console.error(error)
}

// UPDATE ACTIONS

const onUpdatelineupSuccess = () => {
  api.indexLineup()
    .then(onIndexlineupsSuccess)
    .catch(onIndexlineupsFailure)
}
const onUpdatelineupFailure = (error) => {
  console.error(error)
}

// DELETE ACTIONS

const onDeleteLineupSuccess = () => {
  api.indexLineup()
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
  console.log(response)
  const showLineupHtml = showAllLineups({ lineups: response.lineups })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupsFailure = (error) => {
  console.error(error)
}

const onIndexMyContestsSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showMyContests({ entries: response.entries })
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

module.exports = {
  onIndexContestsSuccess,
  onIndexContestsFailure,
  onIndexlineupsSuccess,
  onIndexlineupsFailure,
  onShowContestSuccess,
  onShowContestsFailure,
  onSubmitlineupSuccess,
  onSubmitlineupFailure,
  onCreateEntrySuccess,
  onCreateEntryFailure,
  onDeleteLineupSuccess,
  onDeleteLineupFailure,
  onUpdatelineupSuccess,
  onUpdatelineupFailure,
  onIndexMyContestsSuccess,
  onIndexMyContestsFailure
}
