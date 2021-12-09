const mongoose = require('mongoose');
var cors = require('cors');
const { MongoClient } = require('mongodb');
mongoose.connect('mongodb+srv://Duncan:potatofamine@cluster0.0g6kp.mongodb.net/101247506_assignment2?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var db = mongoose.connection;


const express = require('express')
let app = express();
if(!db){
    console.log("error connecting")
}else{
    console.log("poggers")
}



app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());

var port = process.env.port || 8085;
app.listen(port, function (){
    console.log("Running on post " + port)
})
let routes = require("./routes")

app.use('/api', routes)
