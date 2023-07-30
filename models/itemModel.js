import mongoose from "mongoose";
// Define the Item schema
const ItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  },
  { timestamps: true });
  
  export default mongoose.model("Item", ItemSchema);