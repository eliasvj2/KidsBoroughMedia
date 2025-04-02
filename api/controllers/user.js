
import jwt from "jsonwebtoken";
import { User } from "../Models/user.js";

export const getAllUsers = async(req, res)=>{
    // Get all users from MongoDB
    const users = await User.find({}); // Include _id

    // Rename _id to id
    const formattedUsers = users.map(user => {
      const { _id, ...rest } = user.toObject(); // Convert to plain object
      return { id: _id, ...rest };
    });
    res.header('X-Total-Count', users.length); // Add the X-Total-Count header
    res.header('Access-Control-Expose-Headers', 'X-Total-Count'); 
    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
   
    res.json(formattedUsers);
};

export const createUser = async(req,res) =>{
    try {
        const { username, password, email, role, name, contactDetails } = req.body;
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
          username,
          password: hashedPassword,
          email,
          role,
          name,
          contactDetails,
        });
    
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // 201 Created
      } catch (err) {
        console.error(err);
        // Handle duplicate key errors (username or email already exists)
        if (err.code === 11000) {
          return res.status(409).json({ message: 'Username or email already exists' }); // 409 Conflict
        }
        res.status(500).json({ message: 'Server error', error: err.message });
      }
};

export const updateUser = async(req, res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true }
        );
    
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.json(updatedUser);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
      }
};

export const deleteUser = async(req,res) =>{
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // Does the user exist to delete?
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted`;

    res.json(reply);
};
