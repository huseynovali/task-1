const { default: mongoose } = require("mongoose");


const LocationSchema = mongoose.Schema({
    name:String,
    icon:String,
})

const Location = mongoose.model('Location', LocationSchema)


module.exports =  Location
