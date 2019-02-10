const showAllContests = require('./templates/contest-table.handlebars')
const showAllLineups = require('./templates/lineup-card.handlebars')
const showOneContest = require('./templates/contest-card.handlebars')
const showMyContests = require('./templates/own-contest-table.handlebars')
const store = require('./store.js')
// const toastr = require('./toasts.js')

// CREATE ACTIONS

const onCreatelineupSuccess = (response) => {
  store.lineup = response.lineup
  $('#modalEnterLineup').modal('show')
  onShowEntrySuccess()
}

const onCreatelineupFailure = () => {
  $('.message').text('Failed to save lineup')
}

const onCreateEntrySuccess = () => {
  $('#modalEnterLineup').modal('hide')
  $('#choose-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  $('.message').text('Lineup entered successfully')
}

const onCreateEntryFailure = () => {
  $('.message').text('Failed to enter lineup')
}

const onCreateUpdatedLineupSuccess = (response) => {
  store.lineup = response.lineup
  console.log(store.lineup)
  $('#modalEnterUpdatedLineup').modal('show')
}

const onCreateUpdatedLineupFailure = () => {
  $('.message').text('Failed to save lineup')
}

// READ ACTIONS
// INDEX

const onIndexEntriesSuccess = (response) => {
  store.entries = response.entries
  console.log(store.entries)
}

const onIndexContestsSuccess = (response) => {
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestsFailure = () => {
  $('.message').text('Failed to find contests')
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
  $('.message').text('Failed to find your contests')
}

const onIndexlineupsSuccess = (response) => {
  store.entries = response.entries
  console.log(store.entries)
  const userLineups = store.entries.filter(entry => entry.user.id === store.user.id)
  const showLineupHtml = showAllLineups({ entries: userLineups })
  $('#lineup-card').empty()
  $('#lineup-card').append(showLineupHtml)
}

const onIndexlineupsFailure = () => {
  $('.message').text('Failed to find lineups')
}

// Show

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
  $('.message').text('Failed to find contest')
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

  // `${store.user.email} is entering ${store.lineup.qb}, ${store.lineup.rb1}, ${store.lineup.rb2}, ${store.lineup.wr1}, ${store.lineup.wr2}, ${store.lineup.wr3}, ${store.lineup.te}, ${store.lineup.flex}, ${store.lineup.dst}, in the ${store.contest.innerHTML} contest.`)
}
const onShowEntryFailure = () => {
  $('.message').text('Failed getting entry')
}

// UPDATE ACTIONS

const onUpdateLineupSuccess = () => {
  $('#modalEnterUpdatedLineup').modal('hide')
  $('#change-lineup-view-div').hide()
  $('#owned-contest-view-div').show()
  $('.message').text('Lineup updated')
}

const onUpdateLineupFailure = () => {
  $('.message').text('Lineup did not update')
}

const onUpdateContestSuccess = () => {
}

const onUpdateContestFailure = () => {
  $('.message').text('Contest did not update')
}

// DELETE ACTIONS

const onDeleteEntrySuccess = () => {
  $('.message').text('Entry deleted')
  $('#modalDeleteLineup').modal('hide')
}

const onDeleteEntryFailure = () => {
  $('.message').text('Failure deleting Entry')
}

module.exports = {
  onCreateUpdatedLineupSuccess,
  onCreateUpdatedLineupFailure,
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
