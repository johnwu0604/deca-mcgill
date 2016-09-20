/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res){
		var userObject = req.body;
		sails.log.debug(userObject.email);
		if(userObject.confirmation === userObject.password && userObject.password != "" && userObject.email != "" && userObject.firstName != "" && userObject.lastName != "" && userObject.faculty != "" && userObject.phoneNumber != "")
		{
			sails.log.debug("error");
			User.create(req.body)
			.exec(function(err, user){
				if(err) 
					{return res.view("homepage",err);}
				sails.log.debug(user);
				res.ok();		
			});
		}
		else
		{
			var error = "Password does not match"
			res.view("signup",error);
		}
		return res.view("homepage");
	}
};

