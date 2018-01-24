const db = require('./db')
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt-nodejs')

// TODO
// Add check to verify email is in valid format
console.log('Database user')
const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// On save hook, encrypt password with bcrypt
User.beforeCreate(function(user, options) {
  console.log('User hook')
  return new Promise(function(resolve, reject) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return reject(err)
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return reject(err)
        console.log('Hashed')
        resolve(hash);
      })
    })
  }).then(hashed => {
    user.password = hashed
  })
})

// Comparing user entered password with stored password
User.prototype.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch)
  })
}

module.exports = User
