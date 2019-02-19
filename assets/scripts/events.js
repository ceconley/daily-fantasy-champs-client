const api = require('./api')
const ui = require('./ui')
const store = require('./store.js')

// COLLECT DATA FOR DELTE FUNCTION
const storeDeleteLineupData = (event) => {
  store.entryId = event.target.id
  store.contestId = $(event.target).data('contest')
}

// CRUD ACTIONS

// CREATE ACTIONS

const onStoreLineup1 = () => {
  store.lineup = {lineup: {
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
  ui.onShowEntrySuccess()
  $('#modalEnterLineup').modal('show')
}

const onStoreLineup2 = () => {
  store.lineup = {lineup: {
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
  ui.onShowEntrySuccess()
  $('#modalEnterLineup').modal('show')
}

const onStoreLineup3 = () => {
  store.lineup = {lineup: {
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
  ui.onShowEntrySuccess()
  $('#modalEnterLineup').modal('show')
}

const onCreateLineup = () => {
  const data = store.lineup
  api.createLineup(data)
    .then(onCreateEntry)
    .catch(ui.onCreateEntryFailure)
}

const onCreateEntry = (response) => {
  const user = store.user.id
  const contest = parseInt(store.contest.id)
  const lineupId = response.lineup.id
  const data = {entry: {
    user_id: user,
    contest_id: contest,
    lineup_id: lineupId
  }}
  api.createEntry(data)
    .then(ui.onCreateEntrySuccess)
    .then(onIndexEntries)
    .catch(ui.onCreateEntryFailure)
}

// READ - INDEX

const onIndexEntries = () => {
  api.indexEntries()
    .then(ui.onIndexEntriesSuccess)
    .then(onUpdateContestEntrantsUp)
    .catch(ui.onCreateEntryFailure)
}

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

// READ - SHOW

const onShowContest = (event) => {
  store.contestId = event.target.id
  store.contest = event.target
  api.indexEntries()
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
  api.updateLineup(data)
    .then(ui.onUpdateLineupSuccess)
    .then(onIndexMyConstests)
    .catch(ui.onUpdateLineupFailure)
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
  api.updateLineup(data)
    .then(ui.onUpdateLineupSuccess)
    .then(onIndexMyConstests)
    .catch(ui.onUpdateLineupFailure)
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
  api.updateLineup(data)
    .then(ui.onUpdateLineupSuccess)
    .then(onIndexMyConstests)
    .catch(ui.onUpdateLineupFailure)
}

const onUpdateContestEntrantsUp = () => {
  const entriesAll = store.entries
  const contestEntries = entriesAll.filter(entry => entry.contest.id === store.contestId)
  const data = {contest: {'entrants_current': contestEntries.length + 1}}
  api.updateContest(data)
    .then(showMyContests)
    .catch()
}

const onUpdateContestEntrantsDown = () => {
  const entriesAll = store.entries
  const contestEntries = entriesAll.filter(entry => entry.contest.id === store.contestId)
  const data = {contest: {'entrants_current': contestEntries.length - 1}}
  api.updateContest(data)
    .then()
    .catch()
}

// DELETE ACTIONS
const onDeleteEntry = () => {
  onUpdateContestEntrantsDown()
  api.deleteEntry()
    .then(ui.onDeleteEntrySuccess)
    .then(showMyLineups)
    .catch(ui.onDeleteEntryFailure)
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
  store.lineupId = event.target.id
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

module.exports = {
  storeDeleteLineupData,
  onStoreLineup1,
  onStoreLineup2,
  onStoreLineup3,
  onCreateLineup,
  onCreateEntry,
  onIndexContests,
  onIndexLineups,
  onIndexMyConstests,
  onShowContest,
  onUpdateLineup1,
  onUpdateLineup2,
  onUpdateLineup3,
  onDeleteEntry,
  onChooseLineup,
  changeLineupLink,
  showMyLineups,
  showMyContests,
  showAvailableContests
}
