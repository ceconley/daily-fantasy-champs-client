const showAllContests = require('./templates/contest-table.handlebars')
const showAllLineups = require('./templates/lineup-card.handlebars')
const showOneContest = require('./templates/contest-card.handlebars')
const showMyContests = require('./templates/own-contest-table.handlebars')
const store = require('./store.js')
const toastr = require('toastr')

toastr.options = {
  'positionClass': 'toast-top-center',
  'preventDuplicates': true,
  'showDuration': '500',
  'hideDuration': '500',
  'timeOut': '2000',
  'extendedTimeOut': '5000'
}

// CREATE ACTIONS

const onCreatelineupSuccess = (response) => {
  store.lineup = response.lineup
  $('#modalEnterLineup').modal('show')
  onShowEntrySuccess()
}

const onCreatelineupFailure = () => {
  toastr.warning('Failed to save lineup')
}

const onCreateEntrySuccess = () => {
  $('#modalEnterLineup').modal('hide')
  $('#choose-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  toastr.success('Lineup entered successfully')
}

const onCreateEntryFailure = () => {
  toastr.warning('Failed to enter lineup')
}

// READ - INDEX

const onIndexEntriesSuccess = (response) => {
  store.entries = response.entries
}

const onIndexContestsSuccess = (response) => {
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestsFailure = () => {
  toastr.warning('Failed to find contests')
}

const onIndexMyContestsSuccess = (response) => {
  const entriesAll = response.entries
  const ownerEntries = []
  entriesAll.forEach((entry) => {
    if (entry.user.id === store.user.id) {
      ownerEntries.push(entry)
    }
  })
  const showContestsHtml = showMyContests({ entries: ownerEntries })
  $('#own-contests').empty()
  $('#own-contests').append(showContestsHtml)
}

const onIndexMyContestsFailure = () => {
  toastr.warning('Failed to find your contests')
}

const onIndexlineupsSuccess = (response) => {
  store.entries = response.entries
  const userLineups = store.entries.filter(entry => entry.user.id === store.user.id)
  const showLineupHtml = showAllLineups({ entries: userLineups })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupsFailure = () => {
  toastr.warning('Failed to find lineups')
}

// READ - SHOW

const onShowContestSuccess = (response) => {
  const entriesAll = response.entries
  const contestEntries = []
  const storeContestId = parseInt(store.contest.id)
  entriesAll.forEach(function (entry) {
    if (entry.contest.id === storeContestId) {
      contestEntries.push(entry)
    }
  })
  const showContestsHtml = showOneContest({ entries: contestEntries })
  $('#contestCardBody').empty()
  $('#contestCardBody').append(showContestsHtml)
  const contestUsers = contestEntries.map(function (entry) {
    return entry.user.id
  })
  if (contestUsers.includes(store.user.id) === true) {
    $('#join-contest').hide()
    $('#contest-card-message').text('You are already entered in this contest')
  }
}

const onShowContestsFailure = () => {
  toastr.warning('Failed to find contest')
}

const onShowEntrySuccess = () => {
  $('.entry-confirm').text('')
  $('.entry-confirm').append(`
    <table class="table-bordered">
      <tr>
        <td>${store.lineup.lineup.qb}</td>
        <td>${store.lineup.lineup.wr1}</td>
        <td>${store.lineup.lineup.te}</td>
      </tr>
      <tr>
        <td>${store.lineup.lineup.rb1}</td>
        <td>${store.lineup.lineup.wr2}</td>
        <td>${store.lineup.lineup.flex}</td>
      </tr>
      <tr>
        <td>${store.lineup.lineup.rb2}</td>
        <td>${store.lineup.lineup.wr3}</td>
        <td>${store.lineup.lineup.dst}</td>
      </tr>
    </table>
    <p>in the ${store.contest.innerHTML} contest.</p>
  `)
}

const onShowEntryFailure = () => {
  toastr.warning('Failed getting entry')
}

// UPDATE

const onUpdateLineupSuccess = () => {
  $('#modalEnterUpdatedLineup').modal('hide')
  $('#change-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  toastr.success('Lineup updated')
}

const onUpdateLineupFailure = () => {
  toastr.warning('Lineup did not update')
}

const onUpdateContestSuccess = () => {
}

const onUpdateContestFailure = () => {
  toastr.warning('Contest did not update')
}

// DELETE

const onDeleteEntrySuccess = () => {
  toastr.success('Entry deleted')
  $('#modalDeleteLineup').modal('hide')
}

const onDeleteEntryFailure = () => {
  toastr.warning('Failure deleting Entry')
}

module.exports = {
  onCreatelineupSuccess,
  onCreatelineupFailure,
  onCreateEntrySuccess,
  onCreateEntryFailure,
  onIndexEntriesSuccess,
  onIndexContestsSuccess,
  onIndexContestsFailure,
  onIndexMyContestsSuccess,
  onIndexMyContestsFailure,
  onIndexlineupsSuccess,
  onIndexlineupsFailure,
  onShowEntrySuccess,
  onShowEntryFailure,
  onShowContestSuccess,
  onShowContestsFailure,
  onUpdateLineupSuccess,
  onUpdateLineupFailure,
  onUpdateContestSuccess,
  onUpdateContestFailure,
  onDeleteEntrySuccess,
  onDeleteEntryFailure
}
