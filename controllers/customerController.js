import Customer from '../models/customerModel.js'

export const createCustomer = async(req, res) =>{
    try {
        // Get the data from the request body
        const {name,phone,email, address } = req.body;
        // Create a new customer document
        const customer = new Customer({ name,phone,email,  address });
        // Save the document to the database
        await customer.save();
        // Send a success response
        res.status(201).json({ message: 'Customer created successfully', customer });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Customer creation failed', error });
      }
}

export const getAllCustomers = async(req, res) =>{
    try {
        // Find all customer documents in the database
        const customers = await Customer.find();
        // Send a success response
        res.status(200).json({ message: 'Customers retrieved successfully', customers });
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Customer retrieval failed', error });
      }
}

export const getSingleCustomer = async(req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Find one customer document by id in the database
        const customer = await Customer.findById(id);
        // Check if the document exists
        if (customer) {
          // Send a success response
          res.status(200).json({ message: 'Customer retrieved successfully', customer });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Customer not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Customer retrieval failed', error });
      }
}

export const updateCustomer = async (req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Get the data from the request body
        const { name, phone,email, address } = req.body;
        // Update one customer document by id in the database
        const customer = await Customer.findByIdAndUpdate(id, { name,phone,email,  address }, { new: true });
        // Check if the document exists
        if (customer) {
          // Send a success response
          res.status(200).json({ message: 'Customer updated successfully', customer });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Customer not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Customer update failed', error });
      }
}

//delete custome
export const deleteCustomer = async (req, res) =>{
    try {
        // Get the id from the request parameters
        const { id } = req.params;
        // Delete one customer document by id in the database
        const customer = await Customer.findByIdAndDelete(id);
        // Check if the document exists
        if (customer) {
          // Send a success response
          res.status(200).json({ message: 'Customer deleted successfully', customer });
        } else {
          // Send a not found response
          res.status(404).json({ message: 'Customer not found' });
        }
      } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Customer deletion failed', error });
      }
    
}