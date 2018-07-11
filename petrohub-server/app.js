var express = require("express")
var app = express()
var mongoose = require('mongoose')
var Price = require('./models/collections.js')


BASE_URL = "https://fuelprice.p.mashape.com/trend/"
API_KEY = "tXdwYplCx5mshsioerOAq9daFTw1p1k6XI7jsnkZpoXuNVLRCA"

mongoose.connect("mongodb://root:pas123@ds131531.mlab.com:31531/dev-petrohub")

fetch()




Price.create({Date: Date.now(), price: 22.55, distributor: "HP", city: "Pune"}, function(err, data) {
     if(err){
         console.log(err)
     }else{
        console.log(data)
     }
});




//===================
//Node server start
//===================

app.listen(8080,function(){
    console.log("Petrohub server started on port:8080")
})