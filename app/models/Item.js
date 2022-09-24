const {Schema, model} = require('mongoose')

const exampleSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		decsription: {
			type: String,
			required: true,
		},
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true``
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = model('Example', itemSchema)
