import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  subtotal: {
    type:Number,
    required:true
  },
  total:{
    type:Number,
    required:true
  },
  iva:{
    type:Number,
    required:true
  },
  articulos:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Article"
  }]
},{
  versionKey:false,
  timestamps:true
})

module.exports = mongoose.model("Ticket", TicketSchema);
