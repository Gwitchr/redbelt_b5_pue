import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required:true
  },
  precio:{
    type:Number,
    required:true
  },
  existencias:{
    type:Number
  }
},{
  versionKey:false,
  timestamps:true
})


module.exports = mongoose.model("Article",ArticleSchema)
