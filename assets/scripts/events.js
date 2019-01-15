const api = require('./api')
const ui = require('./ui')
// const store = require('./store.js')

const showMyLineups = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').show()
  $('#owned-contest-view-div').hide()
}
const showMyContests = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').show()
}
const showAvailableContests = () => {
  $('#available-contest-view-div').show()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
}

const onIndexContest = (event) => {
  event.preventDefault()
  api.indexContest()
    .then(ui.onIndexContestSuccess)
    .catch(ui.onIndexContestFailure)
}

module.exports = {
  showMyLineups,
  showMyContests,
  showAvailableContests,
  onIndexContest
}
