const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    try {
        const token =  req.headers.Userauthorization;
        if (!token) {
            return res.status(401).json({ msg: 'No token provided' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        const admin = await Admin.findById(decoded.id);
        if (!user && !admin) {
            return res.status(401).json({ msg: 'Invalid token' });
        }
        req.user = user;
        req.admin = admin;
        next();

    }catch (error) {
        console.error(error);
        
    }
}

