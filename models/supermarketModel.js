import mongoose from "mongoose";

// Define the Supermarket schema
const SupermarketSchema = new mongoose.Schema({
  name: String,
  logo:String,
  address: String,
  products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }]
},
{ timestamps: true });

export default mongoose.model("Supermarket", SupermarketSchema);