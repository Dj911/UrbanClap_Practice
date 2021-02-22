const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Verified User'
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a proper Email']
    },
    phone: {
        type: Number,
        min: [1000000000, 'Enter 10 digit mobile number'],
        max: [9999999999, 'Enter 10 digit mobile number'],
        required: [true, 'Mobile Number is necessary']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // validate: [validator.isStrongPassword, 'Password is not strong'],
        select: false
    },
    city: {
        type: String,
        required: [true, 'Please enter a City']
    },
    bookingList: [
        {
            serviceName: {
                type: String,
                required: [true, 'Service Name is required']
            },
            vendorId: {
                type: Number,
                required: [true, 'Vendor Id is required']
            },
            price: {
                type: Number,
                required: [true, 'Price is required']
            },
            rating: {
                type: Number,
                required: [true, 'Rating is required']
            },
            message: {
                type: String
            }
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;