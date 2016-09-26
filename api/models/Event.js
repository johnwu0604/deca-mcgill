/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 attributes: {
	    name : {
	    	type: 'string',
	    	required: true,
	    },
	    location : {
	        type : 'string',
	        required: true
	    },
	    date : {
	    	type: 'string',
	    	required: true
	    },
	    time : {
	    	type: 'string',
	    	required: true
	    },
	    description : {
	    	type: 'string',
	    	required: true
	    },
	    facebookURL : {
	    	type: 'string',
	    	required: true
	    },
	    toJSON: function() {
	    	var obj = this.toObject();
	    	delete obj.password;
	    	return obj;
	    }	
  }
};
