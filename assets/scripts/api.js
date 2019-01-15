const config = require('./config')
const store = require('./store.js')

const indexContest = () =>
  $.ajax({
    url: config.apiUrl + '/contests',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

module.exports = {
  indexContest
}
