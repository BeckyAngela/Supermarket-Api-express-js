import mongoose from "mongoose";
// Define the Order 
//add supermarket id

const OrderSchema = new mongoose.Schema({
    date: Date,
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
  },
  { timestamps: true });
  
  export default mongoose.model("Order", OrderSchema);