/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res){
		var userObject = req.body;
		errorCode = "";
		if(userObject.firstName=="")
		{
			errorCode+="\n Please enter your first name."
		}
		if(userObject.lastName=="")
		{
			errorCode+="\n Please enter your last name."
		}
		if(userObject.phoneNumber=="")
		{
			errorCode+="\n Please enter your phone number."
		}
		if(userObject.faculty=="")
		{
			errorCode+="\n Please enter your faculty."
		}
		if(userObject.email=="")
		{
			errorCode+="\n Please enter your email."
		}
		if(userObject.password.length< 6)
		{
			errorCode+="\n Please make sure your password is at least 6 characters long."
		}
		if(userObject.confirmation === userObject.password)
		{
			User.create(req.body)
			.exec(function(error, user){
				if(error) 
					{	if(errorCode==="")
						{
							req.flash('message', "This email already has an account associated with it.")
						}
						else
						{
							req.flash('message',errorCode);
						}
						return res.view("signup");
					}
				req.flash('message',"Registration successful. Please log in to access the portal!");
				res.view("homepage");	
			});
		}
		else
		{
			var error = "Password does not match"
			req.flash('message',error);
			res.view("signup",error);
		}
	}
};

