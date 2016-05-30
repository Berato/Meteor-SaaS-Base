Post = new Mongo.Collection('posts');

postSchema = new SimpleSchema({
	author: {
		type: String,
		optional:false,
	},

	createdAt: {
		type: Date,
		optional:false,
		defaultValue: new Date()
	},

	post: {
		type: String,
		optional:false,
		autoform: {
			rows: 5
		}
	},

	tags: {
		type: String,
		optional:true
	}
});

Post.attachSchema(postSchema);
