const {Schema, model} = require('mongoose')

const itemSchema = new Schema(
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
		ingredients: {
			type: String,
			required: true
		},
		weight: {
			type: Number,
			required: true
		},
		netCarb: {
			type: Number,
			required: true
		},
        price: {
            type: Number,
            required: true``
        },
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = model('Item', itemSchema)
