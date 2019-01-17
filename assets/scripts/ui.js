const showAllContests = require('./../../contest-table.handlebars')
const showAllLineups = require('./../../lineup-card.handlebars')
const showOneContest = require('./../../contest-card.handlebars')

const onIndexContestSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestFailure = () => {
  console.error('error')
}

const onShowContestSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showOneContest({ contest: response.contest })
  $('#contestCardBody').empty()
  $('#contestCardBody').append(showContestsHtml)
}

const onShowContestFailure = () => {
  console.error('error')
}

const onIndexlineupSuccess = (response) => {
  console.log(response)
  const showLineupHtml = showAllLineups({ lineups: response.lineups })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupFailure = () => {
  console.error('error')
}

const onSubmitlineupSuccess = (response) => {
  console.log(response)
}
const onSubmitlineupFailure = () => {
  console.error('error')
}

module.exports = {
  onIndexContestSuccess,
  onIndexContestFailure,
  onIndexlineupSuccess,
  onIndexlineupFailure,
  onShowContestSuccess,
  onShowContestFailure,
  onSubmitlineupSuccess,
  onSubmitlineupFailure   
}
