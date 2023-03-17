
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const roleSchema = mongoose.Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String, required: true },
        _permissions: Array
    }
)

module.exports = mongoose.model('Role', roleSchema)