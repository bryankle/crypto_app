const passport = require('passport')
const User = require('../database/models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  // Verify this username and password, call 'done' with user if it is the correct username and password
  User.findOne({ where: { email } })
    .then(user =>
      // If username exists, verify if password is correct  with bCrypt
      user.comparePassword(password, function(err, isMatch) {
        if (err) return done(err)
        if (!isMatch) return done(null, false)
      })
    )
    // Return error if user cannot be found
    .catch(err => done(err))

  // Otherwise, call 'done' with false
})

// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that user
  // Otherwise, call done without a user object

  User.findById(payload.sub)
    .then(user => {
      done(null, user)
    })
    .catch(() => done(null, false))
})

// Tell passport to sue this strategy
passport.use(jwtLogin)
passport.use(localLogin)
