const mongoose = require('mongoose')
const User = require('./user')
Schema = mongoose.Schema

const ListSchema = new Schema ({
    name: String, 
    products: [Products.schema]
})

const List = mongoose.model('List', ListSchema)
module.exports = List