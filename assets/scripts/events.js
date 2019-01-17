const api = require('./api')
const ui = require('./ui')
// const store = require('./store.js')

const onLineup1 = (event) => {
  event.preventDefault()
  const lineup = {
    qb: 'Patrick Mahomes',
    rb1: 'Sony Michel',
    rb2: 'Damien Williams',
    wr1: 'Julian Edelman',
    wr2: 'Tyreek Hill',
    wr3: 'Robert Woods',
    te: 'Rob Gronkowski',
    flex: 'C.J. Anderson',
    dst: 'Rams',
    score: 0.0
  }
  const data = lineup
  console.log(data)
  api.submitLineup(data)
    .then(ui.onSubmitlineupSuccess)
    .catch(ui.onSubmitlineupFailure)
}

const onLineup2 = (event) => {
  event.preventDefault()
  const lineup = {
    qb: 'Patrick Mahomes',
    rb1: 'Sony Michel',
    rb2: 'Damien Williams',
    wr1: 'Julian Edelman',
    wr2: 'Tyreek Hill',
    wr3: 'Robert Woods',
    te: 'Rob Gronkowski',
    flex: 'C.J. Anderson',
    dst: 'Rams',
    score: 0.0
  }
  const data = lineup
  console.log(data)
  api.submitLineup(data)
    .then(ui.onSubmitlineupSuccess)
    .catch(ui.onSubmitlineupFailure)
}

const onLineup3 = (event) => {
  event.preventDefault()
  const lineup = {
    qb: 'Patrick Mahomes',
    rb1: 'Sony Michel',
    rb2: 'Damien Williams',
    wr1: 'Julian Edelman',
    wr2: 'Tyreek Hill',
    wr3: 'Robert Woods',
    te: 'Rob Gronkowski',
    flex: 'C.J. Anderson',
    dst: 'Rams',
    score: 0.0
  }
  const data = lineup
  console.log(data)
  api.submitLineup(data)
    .then(ui.onSubmitlineupSuccess)
    .catch(ui.onSubmitlineupFailure)
}

const onIndexContest = (event) => {
  api.indexContest()
    .then(ui.onIndexContestSuccess)
    .catch(ui.onIndexContestFailure)
}

const onShowContest = (event) => {
  api.showContest(event)
    .then(ui.onShowContestSuccess)
    .catch(ui.onShowContestFailure)
}

const onIndexLineup = () => {
  api.indexLineup()
    .then(ui.onIndexlineupSuccess)
    .catch(ui.onIndexlineupFailure)
}

// const onSubmitLineup = (event) => {
//   event.preventDefault()
//   console.log(event)
//   const data = lineup
//   console.log(data)
//   api.submitLineup(data)
//     .then(ui.onSubmitlineupSuccess)
//     .catch(ui.onSubmitlineupFailure)
// }

const onChooseLineup = (event) => {
  $('#available-contest-view-div').hide()
  $('#choose-lineup-view-div').show()
}

const showMyLineups = (event) => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').show()
  $('#owned-contest-view-div').hide()
  onIndexLineup(event)
}
const showMyContests = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').show()
}
const showAvailableContests = (event) => {
  $('#available-contest-view-div').show()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
  onIndexContest(event)
}

module.exports = {
  showMyLineups,
  showMyContests,
  showAvailableContests,
  onIndexContest,
  onIndexLineup,
  onShowContest,
  onChooseLineup,
  // onSubmitLineup,
  onLineup1,
  onLineup2,
  onLineup3
}
