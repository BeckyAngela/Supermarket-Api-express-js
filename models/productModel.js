import mongoose from "mongoose";
// Define the Product schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    description:String,
    isFavorite: Boolean,
    status:String,
    supermarket: { 
      type: mongoose.Types.ObjectId,
      ref: 'Supermarket' },

  },
  { timestamps: true });
  
  export default mongoose.model("Product", ProductSchema);