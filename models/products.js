const mongoose = require('mongoose')
Schema = mongoose.Schema

const ProductsSchema = new Schema ({
    name: String, 
    type: String,
    image: String, 
    link: String,
    skin_type: {
        type: Array,
        items: {type: String}
    },
    profile: []
})

const Products = mongoose.model('Products', ProductsSchema)
module.exports = Products;