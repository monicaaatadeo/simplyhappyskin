const mongoose = require('mongoose')
const Products = require('./products')
const Schema = mongoose.Schema

const UserSchema = new Schema ({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String, 
        required: [true, 'Email is required']
    },
    password: {
        type: String, 
        required: [true, 'Password is required']
    },
    skin_type: String, 
    products: [Products.schema]
})

const User = mongoose.model('User', UserSchema)

module.exports = User;