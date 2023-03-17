const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const permissionsSchema = mongoose.Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String, required: true },
        title: {
            type: String,
            required: true,
            enum: ['read', 'create', 'edit', 'delete']
        },
        default: ['read']
    }
)

module.exports = mongoose.model('Permissions', permissionsSchema)