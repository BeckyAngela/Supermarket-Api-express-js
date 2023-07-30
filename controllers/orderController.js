import Order from '../models/orderModel.js'

export const createOrder = async(req, res) =>{
    try {
        // Get the data from the request body
        const { id, date, customer, items } = req.body;
        // Create a new order document
        const order = new Order({ id, date, customer, items });
        // Save the document to the database
        await order.save();
        // Send a success response
        res.status(201).json({ message: 'Order created successfully', order });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Order creation failed', error });
      }
}

export const getAllOrders = async(req, res) =>{
    try {
        // Find all order documents in the database
        const orders = await Order.find().populate('customer items');
        // Send a success response
        res.status(200).json({ message: 'Orders retrieved successfully', orders });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Orders retrieval failed', error });
      }
}

export const getSingleOrder = async(req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Find one order document by id in the database
        const order = await Order.findById(id).populate('customer items');
        // Check if the document exists
        if (order) {
          // Send a success response
          res.status(200).json({ message: 'Order retrieved successfully', order });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Order not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Order retrieval failed', error });
      }
}


export const updateOrders = async(req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Get the data from the request body
        const { date, customer, items } = req.body;
        // Update one order document by id in the database
        const order = await Order.findByIdAndUpdate(id, { date, customer, items }, { new: true }).populate('customer items');
        // Check if the document exists
        if (order) {
          // Send a success response
          res.status(200).json({ message: 'Order updated successfully', order });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Order not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Order update failed', error });
      }
}

export const deleteOrder = async(req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Delete one order document by id in the database
        const order = await Order.findByIdAndDelete(id);
        // Check if the document exists
        if (order) {
          // Send a success response
          res.status(200).json({ message: 'Order deleted successfully', order });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Order not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Order delete failed', error });
      }  
}