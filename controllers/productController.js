import Product from '../models/productModel.js'


    // Create a new product
    export const createProduct =  async (req, res) => {
      try {
        // Get the data from the request body
        const { id, name, price, quantity,image, supermarket, description, isFavorite, status  } = req.body;
        // Create a new product document
        const product = new Product({ id, name, price, quantity,image,supermarket, description, isFavorite, status  });
        // Save the document to the database
        await product.save();
        // Send a success response
        res.status(201).json({ message: 'Product created successfully', product });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Product creation failed', "error":error.message });
      }
    }

    //get all products
    export const getAllProducts = async (req, res) =>{
        try {
            // Find all product documents in the database
            const products = await Product.find().populate({
              path:"supermarket",
              select:"name",
              strictPopulate:false,
            });
            // Send a success response
            res.status(200).json({ message: 'Products retrieved successfully', products });
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Products retrieval failed', error });
          }
    }

    //get single product
    export const getSingleProduct = async(req, res) => {
           try {
      // Get the id from the request parameters
      const { id } = req.params;
      // Find one product document by id in the database
      const product = await Product.findById(id);
      // Check if the document exists
      if (product) {
        // Send a success response
        res.status(200).json({ message: 'Product retrieved successfully', product });
      } else {
        // Send a not found response
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      // Send an error response
      res.status(500).json({ message: 'Product retrieval failed', error });
    }
    }

    //update product

    export const updateProduct = async (req, res) =>{
        try {
            // Get the id from the request parameters
            const { id } = req.params;
            // Get the data from the request body
            const { name, price, quantity,image, supermarket, description, isFavorite, status  } = req.body;
            // Update one product document by id in the database
            const product = await Product.findByIdAndUpdate(id, { name, price, quantity,image, supermarket, description, isFavorite, status }, { new: true });
            // Check if the document exists
            if (product) {
              // Send a success response
              res.status(200).json({ message: 'Product updated successfully', product });
            } else {
              // Send a not found response
              res.status(404).json({ message: 'Product not found' });
            }
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Product update failed', error });
          }
    }

    //delete product
    export const deleteProduct = async(res, req) =>{
        try {
            // Get the id from the request parameters
            const { id } = req.params;
            // Delete one product document by id in the database
            const product = await Product.findByIdAndDelete(id);
            // Check if the document exists
            if (product) {
              // Send a success response
              res.status(200).json({ message: 'Product deleted successfully', product });
            } else {
              // Send a not found response
              res.status(404).json({ message: 'Product not found' });
            }
          } catch (error) {
            // Send an error response
            res.status(500).json({ message: 'Product deletion failed', error });
          }
        }