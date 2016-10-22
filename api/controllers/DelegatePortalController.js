/**
 * DelegatePortalController
 *
 * @description :: Server-side logic for managing Delegateportals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');

module.exports = {
	show: function(req,res,next) {
		var users = "";
		var events = "";
		var documents = "";
		async.parallel([
				function(callback) {
					User.query('SELECT * FROM user' , function(err,result){
						if(err) return next(err);
						callback(null,result);
				});
			},
				function(callback){
					Event.query('SELECT * FROM event ORDER BY id DESC', function(err,result){
						if(err) return next(err);
						callback(null,result);
				});
			},
				function(callback){
					Document.query('SELECT * FROM document', function(err,result){
						if(err) return next(err);
						callback(null,result);
				});
			},
				function(callback){
					Announcement.query('SELECT * FROM announcement ORDER BY id DESC', function(err,result){
						if(err) return next(err);
						callback(null,result);
				});
			}	
			],
			function(err,results){
				console.log(results);
				return res.view("delegateportal",{users:results[0], events:results[1], documents:results[2], announcements:results[3]});
			});
	}
};

