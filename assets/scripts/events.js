const api = require('./api')
const ui = require('./ui')
const store = require('./store.js')

// CREATE ACTIONS

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
  store.lineup = null
  store.lineup = data
  api.createLineup(data)
    .then(ui.onCreatelineupSuccess)
    .catch(ui.onCreatelineupFailure)
}

const onLineup2 = (event) => {
  event.preventDefault()
  const data = {lineup: {
    qb: 'Tom Brady',
    rb1: 'Todd Gurley',
    rb2: 'Damien Williams',
    wr1: 'Michael Thomas',
    wr2: 'Tyreek Hill',
    wr3: 'Josh Reynolds',
    te: 'Gerald Everett',
    flex: 'Ted Ginn Jr.',
    dst: 'Saints',
    score: 0.0
  }
  }
  store.lineup = null
  store.lineup = data
  console.log(store.contest)
  api.createLineup(data)
    .then(ui.onCreatelineupSuccess)
    .catch(ui.onCreatelineupFailure)
}

const onLineup3 = (event) => {
  event.preventDefault()
  const data = {lineup: {
    qb: 'Jared Goff',
    rb1: 'Todd Gurley',
    rb2: 'Alvin Kamara',
    wr1: 'Michael Thomas',
    wr2: 'Sammy Watkins',
    wr3: 'Chris Hogan',
    te: 'Travis Kelce',
    flex: 'James White',
    dst: 'Patriots',
    score: 0.0
  }
  }
  store.lineup = null
  store.lineup = data
  api.createLineup(data)
    .then(ui.onCreatelineupSuccess)
    .catch(ui.onCreatelineupFailure)
}

const onEnterLineup = () => {
  const user = store.user.id
  const contest = parseInt(store.contest)
  const lineup = store.lineup
  const data = {entry: {
    user_id: user,
    contest_id: contest,
    lineup_id: lineup
  }}
  console.log(data)
  api.createEntry(data)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

// UPDATE ACTIONS

const onUpdateLineup1 = (event) => {
  event.preventDefault()
  const data = {
    user_id: store.user.id,
    id: store.lineupId,
    lineup: {
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
  store.lineup = null
  store.lineup = data
  api.updateLineup(data)
    .then(ui.onUpdatelineupSuccess)
    .catch(ui.onUpdatelineupFailure)
}

const onUpdateLineup2 = (event) => {
  event.preventDefault()
  const data = {
    user_id: store.user.id,
    id: store.lineupId,
    lineup: {
      qb: 'Tom Brady',
      rb1: 'Todd Gurley',
      rb2: 'Damien Williams',
      wr1: 'Michael Thomas',
      wr2: 'Tyreek Hill',
      wr3: 'Josh Reynolds',
      te: 'Gerald Everett',
      flex: 'Ted Ginn Jr.',
      dst: 'Saints',
      score: 0.0
    }
  }
  store.lineup = null
  store.lineup = data
  api.updateLineup(data)
    .then(ui.onUpdatelineupSuccess)
    .catch(ui.onUpdatelineupFailure)
}

const onUpdateLineup3 = (event) => {
  event.preventDefault()
  const data = {
    user_id: store.user.id,
    id: store.lineupId,
    lineup: {
      id: store.lineupId,
      qb: 'Jared Goff',
      rb1: 'Todd Gurley',
      rb2: 'Alvin Kamara',
      wr1: 'Michael Thomas',
      wr2: 'Sammy Watkins',
      wr3: 'Chris Hogan',
      te: 'Travis Kelce',
      flex: 'James White',
      dst: 'Patriots',
      score: 0.0
    }
  }
  store.lineup = null
  store.lineup = data
  api.updateLineup(data)
    .then(ui.onUpdatelineupSuccess)
    .catch(ui.onUpdatelineupFailure)
}

// DELETE ACTIONS

const onDeleteLineup = (event) => {
  console.log(event.target.id)
  const data = event.target.id
  api.deleteLineup(data)
    .then(ui.onDeleteLineupSuccess)
    .catch(ui.onDeleteLineupFailure)
}

// READ ACTIONS
// INDEX

const onIndexContests = () => {
  api.indexContests()
    .then(ui.onIndexContestsSuccess)
    .catch(ui.onIndexContestsFailure)
}

const onIndexMyConstests = () => {
  api.indexMyContests()
    .then(ui.onIndexMyContestsSuccess)
    .catch(ui.onIndexMyContestsFailure)
}

const onIndexLineups = () => {
  api.indexLineups()
    .then(ui.onIndexlineupsSuccess)
    .catch(ui.onIndexlineupsFailure)
}

// SHOW

const onShowContest = (event) => {
  store.contest = event.target.id
  console.log(store.contest)
  api.indexMyContests(event)
    .then(ui.onShowContestSuccess)
    .catch(ui.onShowContestFailure)
}

// VIEWS

const onChooseLineup = (event) => {
  $('#available-contest-view-div').hide()
  $('#choose-lineup-view-div').show()
}

const changeLineupLink = (event) => {
  $('#owned-contest-view-div').hide()
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
  $('#change-lineup-view-div').show()
  $('#lineups-view-div').hide()
  console.log(event.target.id)
  store.lineupId = event.target.id
}

const showMyLineups = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').show()
  $('#owned-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
  $('#change-lineup-view-div').hide()
  onIndexLineups()
}

const showMyContests = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').show()
  $('#choose-lineup-view-div').hide()
  $('#change-lineup-view-div').hide()
  onIndexMyConstests(event)
}

const showAvailableContests = (event) => {
  $('#available-contest-view-div').show()
  $('#lineups-view-div').hide()
  $('#owned-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
  $('#change-lineup-view-div').hide()
  onIndexContests(event)
}

module.exports = {
  showMyLineups,
  showMyContests,
  showAvailableContests,
  onIndexContests,
  onIndexLineups,
  onShowContest,
  onChooseLineup,
  onLineup1,
  onLineup2,
  onLineup3,
  onEnterLineup,
  onDeleteLineup,
  changeLineupLink,
  onIndexMyConstests,
  onUpdateLineup1,
  onUpdateLineup2,
  onUpdateLineup3
}
