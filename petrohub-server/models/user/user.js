var mongoose = require('mongoose')

var userAuthSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    lastLoggedin: {
        type: Date,
        default: Date.now()
    }
})

export var userAuthModel = mongoose.model("user", userAuthSchema)

var userDataSchema = mongoose.Schema({
    userId: {
        type: mongoose.type.userId
    }
})