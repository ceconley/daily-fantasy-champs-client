const showAllContests = require('./../../contest-table.handlebars')

const onIndexContestSuccess = (response) => {
  console.log(response)
  const showContestsHtml = showAllContests({ contests: response.contests })
  $('#contest-table').empty()
  $('#contest-table').append(showContestsHtml)
}

const onIndexContestFailure = () => {

}

module.exports = {
  onIndexContestSuccess,
  onIndexContestFailure
}
