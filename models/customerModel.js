import mongoose from "mongoose";

// Define the Customer schema
const CustomerSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email: String,
    address: String
  },
  { timestamps: true });
  
  export default mongoose.model("Customer", CustomerSchema);