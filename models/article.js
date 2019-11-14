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
  },
  descripcion:{
    type:String
  },
  perecedero:{
    type:Boolean
  },
  procedencia:{
    type:String,
    enum:['puebla','monterrey','guadalajara','morelia'],
    default:'puebla'
  }
},{
  versionKey:false,
  timestamps:true
})


module.exports = mongoose.model("Article",ArticleSchema)
