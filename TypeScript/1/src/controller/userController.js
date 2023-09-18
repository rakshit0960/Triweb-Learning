const { addUserToDB } = require('../model/userModel');

const registerUser = (req, res) => {
    addUserToDB('username', 'password');
    res.send('user Registered');
}



module.exports = { registerUser }