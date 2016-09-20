/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    feed: {
    	type: 'string'
    }
  },
  afterCreate: function(entry, cb) {
    sails.sockets.broadcast('feed', 'new_entry', entry);
    cb();
  }
};

