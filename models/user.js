const mongoose = require('mongoose')

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
    list: [List.schema]
})

const User = mongoose.model('User', UserSchema)
module.exports = User