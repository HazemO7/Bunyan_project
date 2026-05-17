const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"], 
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"], 
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        select: false,
    },

},{timestamps: true});

// Hash the password before saving the admin
adminSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (error) {
        return next(error);
    }
});

// Method to compare password for login
adminSchema.methods.comparePassword = async function (matchPassword) {
    return await bcrypt.compare(matchPassword, this.password);
};

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
