const jwt = require('jwt-simple')
const User = require('../database/models/user')
const config = require('../config')

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret)
}

exports.signin = function(req, res, next) {
    // User has already had their email and password auth'd
    // We just need to give them a token
    console.log('req: ', req.user);
    res.send({ token: tokenForUser(req.body.email) })
}

exports.signup = function(req, res, next) {
    // See if a user with given email exists
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    console.log('email: ', email);
    console.log('password', password)
    // Attempt creation of new user with email and password
    return User.create({
        email: email,
        password: password,
    })
    // Success - user name has not been taken
    .then(user => {
        // res.json({ token: tokenForUser(user) })
        console.log("User has been created")
        console.log(tokenForUser(user))
        res.json({ token: tokenForUser(user)})
    })
    // Error - user name taken; Sequelize prevented duplicate emails
    .catch(err => res.status(422).send({ error: "Email is in use" }))

}