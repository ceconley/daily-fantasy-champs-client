const api = require('./api')
const ui = require('./ui')
const store = require('./store.js')

// CREATE ACTIONS

const onCreateLineup1 = (event) => {
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
  api.createLineup(data)
    .then(ui.onCreatelineupSuccess)
    .catch(ui.onCreatelineupFailure)
}

const onCreateLineup2 = (event) => {
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
  store.lineup = data
  api.createLineup(data)
    .then(ui.onCreatelineupSuccess)
    .catch(ui.onCreatelineupFailure)
}

const onCreateLineup3 = (event) => {
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
  store.lineup = data
  api.createLineup(data)
    .then(ui.onCreatelineupSuccess)
    .catch(ui.onCreatelineupFailure)
}

const onCreateEntry = () => {
  const user = store.user.id
  const contest = parseInt(store.contest.id)
  const lineup = store.lineup.id
  const data = {entry: {
    user_id: user,
    contest_id: contest,
    lineup_id: lineup
  }}
  api.createEntry(data)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

// READ ACTIONS
// INDEX

const onIndexContests = () => {
  api.indexContests()
    .then(ui.onIndexContestsSuccess)
    .catch(ui.onIndexContestsFailure)
}

const onIndexMyConstests = () => {
  api.indexEntries()
    .then(ui.onIndexMyContestsSuccess)
    .catch(ui.onIndexMyContestsFailure)
}

const onIndexLineups = () => {
  api.indexEntries()
    .then(ui.onIndexlineupsSuccess)
    .catch(ui.onIndexlineupsFailure)
}

// SHOW

const onShowContest = (event) => {
  console.log(event.target)
  store.contest = event.target
  api.indexEntries(event)
    .then(ui.onShowContestSuccess)
    .catch(ui.onShowContestFailure)
}

// UPDATE ACTIONS

const onUpdateLineup1 = (event) => {
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
  store.lineupId = data
  api.createLineup(data)
    .then(ui.onCreateUpdatedLineupSuccess)
    .catch(ui.onCreateUpdatedLineupFailure)
}

const onUpdateLineup2 = (event) => {
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
  store.lineupId = data
  api.createLineup(data)
    .then(ui.onCreateUpdatedLineupSuccess)
    .catch(ui.onCreateUpdatedLineupFailure)
}

const onUpdateLineup3 = (event) => {
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
  store.lineupId = data
  api.createLineup(data)
    .then(ui.onCreateUpdatedLineupSuccess)
    .catch(ui.onCreateUpdatedLineupFailure)
}

const onUpdateChangedLineup = () => {
  const data = {entry: {
    id: store.entryId,
    user_id: store.user.id,
    contest_id: store.contest.id,
    lineup_id: store.lineup.id
  }
  }
  api.updateLineup(data)
    .then(ui.onUpdateLineupSuccess)
    .catch(ui.onUpdateLineupFailure)
}

// DELETE ACTIONS
const onDeleteEntry = (event) => {
  // store.contestId = $(event.target).data('contest')
  // console.log(store.contestId)
  // const data = event.target.id
  api.indexEntries()
    .then(ui.onIndexContestForCountSuccess)
    .then()
    .catch(ui.onIndexContestForCountFailure)
}

// VIEWS

const onChooseLineup = () => {
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
  store.entryId = $(event.target).data('entry-id')
  store.contestId = $(event.target).data('contest-id')
}

const showMyLineups = () => {
  $('#available-contest-view-div').hide()
  $('#lineups-view-div').show()
  $('#owned-contest-view-div').hide()
  $('#choose-lineup-view-div').hide()
  $('#change-lineup-view-div').hide()
  onIndexLineups()
}

const showMyContests = (event) => {
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

// const entriesAll = store.entries
// const contestEntries = entriesAll.filter(entry => entry.contest.id === storeContestId)
// const data = {contest: {'entrants_current': contestEntries.length}}

module.exports = {
  onCreateLineup1,
  onCreateLineup2,
  onCreateLineup3,
  onCreateEntry,
  onIndexContests,
  onIndexLineups,
  onShowContest,
  onIndexMyConstests,
  onUpdateLineup1,
  onUpdateLineup2,
  onUpdateLineup3,
  onUpdateChangedLineup,
  onDeleteEntry,
  onChooseLineup,
  changeLineupLink,
  showMyLineups,
  showMyContests,
  showAvailableContests
}
