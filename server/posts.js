Meteor.methods({
	createPost: function(doc)
	{
		check(doc, postSchema);

		console.log(doc);
	}
})