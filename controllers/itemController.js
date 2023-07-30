import Item from '../models/itemModel.js'

export const createitem = async(req, res) =>{
    try {
        // Get the data from the request body
        const { product, quantity } = req.body;
        // Create a new item document
        const item = new Item({ product, quantity });
        // Save the document to the database
        await item.save();
        // Send a success response
        res.status(201).json({ message: 'Item created successfully', item });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Item creation failed', error });
      }
}

export const getAllItems = async(req, res) =>{
    try {
        // Find all item documents in the database
        const items = await Item.find().populate('product');
        // Send a success response
        res.status(200).json({ message: 'Items retrieved successfully', items });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Items retrieval failed', error });
      }
}

export const getSingleitem = async(req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Find one item document by id in the database
        const item = await Item.findById(id).populate('product');
        // Check if the document exists
        if (item) {
          // Send a success response
          res.status(200).json({ message: 'Item retrieved successfully', item });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Item retrieval failed', error });
      }
}

export const updateItem = async(req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Get the data from the request body
        const { product, quantity } = req.body;
        // Update one item document by id in the database
        const item = await Item.findByIdAndUpdate(id, { product, quantity }, { new: true }).populate('product');
        // Check if the document exists
        if (item) {
          // Send a success response
          res.status(200).json({ message: 'Item updated successfully', item });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {        
        // Send an error response
        res.status(500).json({ message: 'Item retrieval failed', error });
      }
}