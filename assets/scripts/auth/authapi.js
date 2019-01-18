const config = require('../config')
const store = require('../store.js')

const signUp = (data) =>
  $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })

const logIn = (data) =>
  $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })

const changePassword = (data) =>
  $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

const logOut = () =>
  $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

module.exports = {
  signUp,
  logIn,
  changePassword,
  logOut
}
