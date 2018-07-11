const mongoose = require('mongoose')

const priceSchema = mongoose.Schema({
    Date: {
        type: Date
    },
    price: {
        type: Number
    },
    distributor: String,
    city: String
})

module.exports = mongoose.model("Price", priceSchema)

