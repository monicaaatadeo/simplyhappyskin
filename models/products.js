const mongoose = require('mongoose')
// const List = require('./list')
Schema = mongoose.Schema

const ProductsSchema = new Schema ({
    name: String, 
    type: String,
    image: String, 
    link: String,
    skin_type: {
        type: Array,
        items: {type: String}
    }
})

const Products = mongoose.model('Products', ProductsSchema)
module.exports = Products;