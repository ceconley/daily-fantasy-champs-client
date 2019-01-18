const showAllContests = require('./../../contest-table.handlebars')
const showAllLineups = require('./../../lineup-card.handlebars')
const showOneContest = require('./../../contest-card.handlebars')
const showMyContests = require('./../../own-contest-table.handlebars')

const store = require('./store.js')
const api = require('./api')

const onIndexContestsSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestsFailure = () => {
  console.error('error')
}

const onShowContestSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showOneContest({ entries: response.entries })
  $('#contestCardBody').empty()
  $('#contestCardBody').append(showContestsHtml)
}

const onShowContestsFailure = () => {
  console.error('error')
}

const onIndexlineupsSuccess = (response) => {
  console.log(response)
  const showLineupHtml = showAllLineups({ lineups: response.lineups })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupsFailure = () => {
  console.error('error')
}

const onSubmitlineupSuccess = (response) => {
  console.log(response)
  store.lineup = response.lineup.id
  $('#modalEnterLineup').modal('show')
}

const onSubmitlineupFailure = () => {
  console.error('error')
}

const onCreateEntrySuccess = () => {
  $('#modalEnterLineup').modal('hide')
  $('#choose-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
}

const onCreateEntryFailure = () => {
  console.error('error')
}

const onDeleteLineupSuccess = () => {
  api.indexLineup()
    .then(onIndexlineupsSuccess)
    .catch(onIndexlineupsFailure)
}
const onDeleteLineupFailure = () => {
  console.error('error')
}

const onUpdatelineupSuccess = () => {
  api.indexLineup()
    .then(onIndexlineupsSuccess)
    .catch(onIndexlineupsFailure)
}
const onUpdatelineupFailure = () => {
  console.error('error')
}

const onIndexMyContestsSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showMyContests({ entries: response.entries })
  $('#own-contests').empty()
  $('#own-contests').append(showContestsHtml)
}
const onIndexMyContestsFailure = () => {
  console.error('error')
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
