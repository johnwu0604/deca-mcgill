/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
	    email : {
	    	type: 'string',
	    	required: true,
	    	unique: true
	    },
	    password : {
	        type : 'string',
	        minLength: 6,
	        required: true
	    },
	    firstName : {
	    	type: 'string'
	    },
	    lastName : {
	    	type: 'string'
	    },
	    faculty : {
	    	type: 'string'
	    },
	    phoneNumber : {
	    	type: 'string'
	    },
	    confirmation : {
	    	type: 'string'
	    },
	    toJSON: function() {
	    	var obj = this.toObject();
	    	delete obj.password;
	    	delete obj.confirmation;
	    	delete obj.phoneNumber;
	    	return obj;
	    }	
  },

  beforeCreate: function(user, cb) {
  		if(user.confirmation === user.password){
	        bcrypt.genSalt(10, function(err, salt) {
	            bcrypt.hash(user.password, salt, null, function(err, hash) {
	                if (err) {
	                    console.log(err);
	                    cb(err);
	                } else {
	                    user.password = hash;
	                }
	            });
	            bcrypt.hash(user.confirmation, salt, null, function(err, hash) {
	                if (err) {
	                    console.log(err);
	                    cb(err);
	                } else {
	                    user.confirmation = hash;
	                    cb();
	                }
	            });
	        });
	    }
    }
};
