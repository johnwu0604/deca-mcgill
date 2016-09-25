/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                req.flash('message',"Your login attempt was unsuccesful. Please make sure you are using the correct credentials or register below!");
                return res.view("signup");
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.redirect('/delegateportal');
            });

        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

