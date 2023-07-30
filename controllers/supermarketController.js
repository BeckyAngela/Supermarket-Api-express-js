import Supermarket from '../models/supermarketModel.js'

    // Create a new supermarket
    export const createSupermarket = async (req, res) => {
      try {
        // Get the data from the request body
        const { id, name,logo, address } = req.body;
        // Create a new supermarket document
        const supermarket = new Supermarket({ id, name,logo, address });
        // Save the document to the database
        await supermarket.save();
        // Send a success response
        res.status(201).json({ message: 'Supermarket created successfully', supermarket });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Supermarket creation failed', error });
      }
    }

    //Read all supermarkets
    export const getAllSupermarkets = async (req, res) =>{
        try {
            // Find all supermarket documents in the database
            const supermarkets = await Supermarket.find().populate('products');
            // Send a success response
            res.status(200).json({ message: 'Supermarkets retrieved successfully', supermarkets });
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Supermarkets retrieval failed', error });
          }
    }

    //Read one supermarket
    export const getSinggleSupermarket = async (req, res) =>{
        try {
            // Get the id from the request parameters
            const { id } = req.params;
            // Find one supermarket document by id in the database
            const supermarket = await Supermarket.findById(id).populate('products');
            // Check if the document exists
            if (supermarket) {
              // Send a success response
              res.status(200).json({ message: 'Supermarket retrieved successfully', supermarket });
            } else {
              // Send a not found response
              res.status(404).json({ message: 'Supermarket not found' });
            }
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Supermarket retrieval failed', error });
          }
    }

    //modify one supermarket
    export const updateSupermarket = async(req, res) =>{
        try {
            // Get the id from the request parameters
            const { id } = req.params;
            // Get the data from the request body
            const { name,logo, address } = req.body;
            // Update one supermarket document by id in the database
            const supermarket = await Supermarket.findByIdAndUpdate(id, { name,logo, address }, { new: true }).populate('products');
            // Check if the document exists
            if (supermarket) {
              // Send a success response
              res.status(200).json({ message: 'Supermarket updated successfully', supermarket });
            } else {
              // Send a not found response
              res.status(404).json({ message: 'Supermarket not found' });
            }
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Supermarket update failed', error });
          }
    }

    //delete supermarket
    export const deleteSupermarket = async(req, res) =>{
        try {
            // Get the id from the request parameters
            const { id } = req.params;
            // Delete one supermarket document by id in the database
            const supermarket = await Supermarket.findByIdAndDelete(id);
            // Check if the document exists
            if (supermarket) {
              // Send a success response
              res.status(200).json({ message: 'Supermarket deleted successfully', supermarket });
            } else {
              // Send a not found response
              res.status(404).json({ message: 'Supermarket not found' });
            }
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Supermarket deletion failed', error });
          }
        
    }