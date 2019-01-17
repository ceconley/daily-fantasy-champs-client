const api = require('./api')
const ui = require('./ui')
const store = require('./store.js')

const onLineup1 = (event) => {
  event.preventDefault()
  const data = {lineup: {
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
  }
  store.lineup = data
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
  store.contest = event.target.id
  api.showContest(event)
    .then(ui.onShowContestSuccess)
    .catch(ui.onShowContestFailure)
}

const onIndexLineup = () => {
  api.indexLineup()
    .then(ui.onIndexlineupSuccess)
    .catch(ui.onIndexlineupFailure)
}

const onEnterLineup = () => {
  const user = store.user.email
  const contest = store.contest
  const lineup = store.lineup
  const data = {entry: {
    user_id: user,
    contest_id: contest,
    lineup_id: lineup
  }}
  console.log(`user:${user}`)
  console.log(`contest:${contest}`)
  console.log(`lineup:${lineup}`)
  api.createEntry(data)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

const onChooseLineup = (event) => {
  $('#available-contest-view-div').hide()
  $('#choose-lineup-view-div').show()
}

const showMyLineups = (event) => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').show()
  $('#owned-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
  onIndexLineup(event)
}

const showMyContests = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').show()
  $('#choose-lineup-view-div').hide()
}

const showAvailableContests = (event) => {
  $('#available-contest-view-div').show()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
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
  onLineup1,
  onLineup2,
  onLineup3,
  onEnterLineup
}
