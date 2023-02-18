//blog model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    Likes:{
        type: Number,
        default: 0,
    },
   
    date: {
        type: Date,
        default: Date.now,
    },
    

   
        
    
});


